'use client';

export default function BenefitsAccordion() {
  const items = [
    {
      title: '1. Reserve conference rooms',
      body: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
    },
    {
      title: '2. Post or respond to job listings',
      body: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
    },
    {
      title: '3. Flexibility of monthly terms',
      body: 'There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-tint-lightest">
      <div className="container-boxed max-w-3xl">
        <h2 className="text-3xl font-montserrat font-bold mb-10">Benefits of our coworking spaces</h2>
        <div className="divide-y divide-tint-light border-t border-b border-tint-light">
          {items.map((item) => (
            <details key={item.title} className="group py-4">
              <summary className="cursor-pointer font-bold text-body list-none flex justify-between items-center">
                {item.title}
                <span className="text-primary group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-text-muted mt-3 leading-[28px]">{item.body}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
