import PageHeader from '@/components/PageHeader';
import { NEWS_ITEMS } from '@/lib/assets';

export const metadata = { title: 'News - AECA' };

export default function NewsPage() {
  return (
    <>
      <PageHeader title="News" />
      <section className="py-16 md:py-24 bg-white">
        <div className="container-boxed grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {NEWS_ITEMS.map((item) => (
            <article key={item.title}>
              <div className="card-elevated aspect-video overflow-hidden mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="text-xs text-text-muted mb-2">{item.byline}</p>
              <h3 className="font-montserrat font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
