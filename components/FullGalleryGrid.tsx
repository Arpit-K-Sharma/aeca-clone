'use client';

import { useState } from 'react';
import { FULL_GALLERY_IMAGES } from '@/lib/assets';

export default function FullGalleryGrid() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {FULL_GALLERY_IMAGES.map((img, i) => (
          <button
            key={`${img.full}-${i}`}
            type="button"
            onClick={() => setActive(img.full)}
            className="card-elevated block aspect-square overflow-hidden bg-tint-lightest"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.thumb}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </button>
        ))}
      </div>
      {active && (
        <div
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={active} alt="Gallery preview" className="max-h-full max-w-full" />
        </div>
      )}
    </>
  );
}
