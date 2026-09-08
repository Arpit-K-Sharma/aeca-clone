import PageHeader from '@/components/PageHeader';
import { EVENTS } from '@/lib/content';

export const metadata = { title: 'Events - AECA' };

export default function EventsPage() {
  return (
    <>
      <PageHeader title="Events" />
      <section className="py-16 md:py-24 bg-white">
        <div className="container-boxed max-w-4xl">
          <h2 className="text-3xl font-montserrat font-bold mb-4">Our Programs and Events</h2>
          <p className="text-text-muted mb-12">
            We constantly run events and programs to bring the community together and build
            strong foundation. Find some of our events in past.
          </p>
          <div className="space-y-12">
            {EVENTS.map((event, i) => (
              <div key={event.title} className="border-b border-tint-light pb-10 last:border-0">
                <h3 className="text-xl font-montserrat font-semibold mb-3">
                  {i + 1}. {event.title}
                </h3>
                <p className="text-text-muted">{event.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
