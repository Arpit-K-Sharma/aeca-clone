'use client';

import { useState } from 'react';
import { GALLERY_IMAGES } from '@/lib/assets';

export default function LightboxGrid() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {GALLERY_IMAGES.map((img) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(img.src)}
            className="card-elevated block aspect-square overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
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
