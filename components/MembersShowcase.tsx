'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { MEMBER_LOGOS } from '@/lib/assets';
import Button from './Button';

export default function MembersShowcase({ heading = 'Our members' }: { heading?: string }) {
  return (
    <section className="py-16 md:py-24 bg-tint-lightest">
      <div className="container-boxed">
        <div className="flex items-center justify-between mb-10">
          {heading ? <h2 className="text-3xl font-montserrat font-bold">{heading}</h2> : <span />}
          <Button href="/members" small variant="outline">More</Button>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Grid]}
          slidesPerView={1}
          grid={{ rows: 2, fill: 'row' }}
          spaceBetween={24}
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, pauseOnMouseEnter: true, disableOnInteraction: false }}
          breakpoints={{
            580: { slidesPerView: 3, grid: { rows: 2, fill: 'row' } },
            992: { slidesPerView: 5, grid: { rows: 2, fill: 'row' } },
          }}
          className="members-logo-swiper pb-10"
        >
          {MEMBER_LOGOS.map((src) => (
            <SwiperSlide key={src}>
              <LogoTile src={src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function LogoTile({ src }: { src: string }) {
  const [broken, setBroken] = useState(false);
  const name = src.split('/').pop()?.replace(/\.(png|jpe?g)$/i, '').replace(/-/g, ' ') ?? '';
  if (broken) {
    return (
      <div className="card-elevated flex items-center justify-center h-16 bg-white border border-tint-light text-xs text-text-muted p-2 text-center mx-1">
        {name}
      </div>
    );
  }
  return (
    <div className="card-elevated bg-white p-2 border border-tint-light mx-1">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={name}
        className="h-16 w-full object-contain grayscale hover:grayscale-0 transition"
        onError={() => setBroken(true)}
        loading="lazy"
      />
    </div>
  );
}
