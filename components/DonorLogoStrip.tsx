'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { DONOR_THANKYOU_LOGOS } from '@/lib/assets';

export default function DonorLogoStrip() {
  return (
    <section className="py-10 bg-white border-b border-tint-light">
      <div className="container-boxed">
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
            580: { slidesPerView: 2, grid: { rows: 2, fill: 'row' } },
            992: { slidesPerView: 4, grid: { rows: 2, fill: 'row' } },
          }}
          className="donor-logo-swiper pb-10"
        >
          {DONOR_THANKYOU_LOGOS.map((src) => (
            <SwiperSlide key={src}>
              <div className="flex items-center justify-center h-20 px-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  className="h-14 w-full object-contain grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
