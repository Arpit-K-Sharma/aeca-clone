import PageHeader from '@/components/PageHeader';
import TeamGrid from '@/components/TeamGrid';
import { FULL_TEAM_CURRENT, FULL_TEAM_CURRENT_PHOTOS } from '@/lib/content';

export const metadata = { title: 'Meet Our Team - AECA' };

export default function TeamPage() {
  return (
    <>
      <PageHeader title="Meet Our Team" />
      <section className="py-16 md:py-24 bg-white">
        <div className="container-boxed">
          {/* Current committee only, matching the live site's actual rendered roster
              (aeca.com.au/?page_id=2844) with each member's real headshot. The prior/historical
              roster (FULL_TEAM_PRIOR) is legacy data the real site never displays here and
              was incorrectly concatenated in before -- fixed per user report of duplicate/
              misplaced team page content. */}
          <TeamGrid names={FULL_TEAM_CURRENT} photos={FULL_TEAM_CURRENT_PHOTOS} />
        </div>
      </section>
    </>
  );
}
