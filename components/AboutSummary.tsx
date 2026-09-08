import { ABOUT_BLURB } from '@/lib/content';
import IconBox from './IconBox';
import Button from './Button';

const OBJECTIVE_TEASER = [
  'Commitment for the betterment of education consultants and stakeholders in Australia',
  'Bringing together AECA members with other institutions in Australia in one platform',
  'Provide develop and distribute training resources to AECA members',
];

export default function AboutSummary() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-boxed">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-montserrat font-bold mb-4">About Us.</h2>
            <p className="text-text-muted mb-6">{ABOUT_BLURB}</p>
            <Button href="/about" variant="outline">Read more</Button>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* "Flexible private offices" — real-site leftover demo-theme copy, kept verbatim
                  per non-goals; the "44 and rising members" stat now lives only in the
                  standalone counter widget below, not merged into this item. */}
              <IconBox icon="office" title="Flexible private offices" body="" />

              {/* Standalone milestone/stat widget — matches real site's tinted-column
                  counter, split out of the icon-list per research 1.1(A). */}
              <div className="bg-tint-light rounded-lg px-6 py-8 flex flex-col justify-center">
                <div className="text-5xl md:text-6xl font-montserrat font-bold text-dark leading-none">
                  44
                </div>
                <p className="text-sm text-text-muted mt-3">and rising members</p>
              </div>
            </div>

            {/* Plain checkmark list — 3 of the real 13 objectives, verbatim teaser text,
                kept as its own clean list separate from the stat widget. */}
            <ul className="space-y-4">
              {OBJECTIVE_TEASER.map((text) => (
                <li key={text} className="flex gap-3 items-start">
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent-green flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-sm text-text-muted">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
