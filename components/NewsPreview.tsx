import { NEWS_ITEMS } from '@/lib/assets';
import Link from 'next/link';

export default function NewsPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-boxed">
        <h2 className="text-3xl font-montserrat font-bold mb-10">News &amp; articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {NEWS_ITEMS.slice(0, 4).map((item) => (
            <Link key={item.title} href="/news" className="block group">
              <div className="card-elevated aspect-video overflow-hidden mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-text-muted mb-2">{item.byline}</p>
              <h3 className="text-body font-montserrat font-semibold group-hover:text-primary">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
