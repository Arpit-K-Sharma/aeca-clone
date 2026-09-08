'use client';

import { AVATAR_FRAMES } from '@/lib/assets';

export default function TeamGrid({ names }: { names: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {names.map((name, i) => {
        const frame = AVATAR_FRAMES[i % AVATAR_FRAMES.length];
        const [full, roleRaw] = name.split(' (');
        const role = roleRaw ? roleRaw.replace(')', '') : '';
        return (
          <div key={`${name}-${i}`} className="text-center">
            <div className="card-elevated aspect-square overflow-hidden !rounded-full mb-4 bg-tint-lightest">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={frame}
                alt={full}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <h3 className="font-montserrat font-semibold text-body">{full}</h3>
            <p className="text-sm text-text-muted">{role}</p>
          </div>
        );
      })}
    </div>
  );
}
