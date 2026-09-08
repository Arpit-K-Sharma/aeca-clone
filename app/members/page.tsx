import PageHeader from '@/components/PageHeader';
import MembersShowcase from '@/components/MembersShowcase';

export const metadata = { title: 'Our Members - AECA' };

export default function MembersPage() {
  return (
    <>
      <PageHeader title="Our Members" />
      <section className="py-8 bg-white">
        <div className="container-boxed">
          <h2 className="text-3xl font-montserrat font-bold">Meet our members</h2>
        </div>
      </section>
      <MembersShowcase heading="" />
      {/* "Fully equipped meeting rooms for rent" PromoBlock removed: confirmed dead/
          never-rendered markup on the real site (elementor-hidden-desktop/tablet/phone
          wraps this whole section on ?page_id=1397, fresh-fetch verified) — fabricated
          coworking-theme placeholder content, same defect category as the About-page
          "early stage startups" block, not genuine real-site content. */}
    </>
  );
}
