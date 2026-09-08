import PageHeader from '@/components/PageHeader';
import AboutSummary from '@/components/AboutSummary';
import TeamGrid from '@/components/TeamGrid';
import MembersShowcase from '@/components/MembersShowcase';
import { OBJECTIVES, ABOUT_TEAM } from '@/lib/content';

export const metadata = { title: 'About Us - AECA' };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" />
      <AboutSummary />

      {/* Full 13-item objectives list */}
      <section className="py-16 md:py-24 bg-tint-lighter">
        <div className="container-boxed">
          <h2 className="text-3xl font-montserrat font-bold mb-10">Our Objective</h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OBJECTIVES.map((obj, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-montserrat font-bold text-primary text-xl flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}.
                </span>
                <span className="text-text-muted">{obj}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team grid — 13 people, era-mixing replicated verbatim per ADR-004 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-boxed">
          <h2 className="text-3xl font-montserrat font-bold mb-10">Team Members</h2>
          <TeamGrid names={ABOUT_TEAM} />
        </div>
      </section>

      {/* "Our members" — real site duplicates this heading in its raw HTML (two Elementor
          sections both titled "Our members"), but the FIRST instance is verified dead markup
          (wrapped in elementor-hidden-desktop/tablet/phone — never rendered on any breakpoint,
          confirmed against a fresh fetch of ?page_id=612). Only the second instance is real,
          visible content. Render exactly one section here, not two. */}
      <MembersShowcase heading="Our members" />
    </>
  );
}
