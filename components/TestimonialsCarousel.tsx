'use client';

import { useState } from 'react';
import { TESTIMONIALS } from '@/lib/content';

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-boxed max-w-3xl text-center">
        <h2 className="text-3xl font-montserrat font-bold mb-10">Testimonials</h2>
        <div className="text-5xl text-primary mb-4" aria-hidden="true">&ldquo;</div>
        <p className="text-lg text-text-muted mb-6">{t.body}</p>
        <p className="font-montserrat font-semibold">{t.name}</p>
        <p className="text-sm text-text-muted mb-8">{t.role}</p>
        <div className="flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-primary' : 'bg-tint-light'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
