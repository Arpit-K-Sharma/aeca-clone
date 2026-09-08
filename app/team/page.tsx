import PageHeader from '@/components/PageHeader';
import TeamGrid from '@/components/TeamGrid';
import { FULL_TEAM_CURRENT, FULL_TEAM_PRIOR } from '@/lib/content';

export const metadata = { title: 'Meet Our Team - AECA' };

export default function TeamPage() {
  return (
    <>
      <PageHeader title="Meet Our Team" />
      <section className="py-16 md:py-24 bg-white">
        <div className="container-boxed">
          {/* Combined roster, no era headers, replicated as-is per ADR-004 */}
          <TeamGrid names={[...FULL_TEAM_CURRENT, ...FULL_TEAM_PRIOR]} />
        </div>
      </section>
    </>
  );
}
