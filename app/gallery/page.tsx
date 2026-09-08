import PageHeader from '@/components/PageHeader';
import FullGalleryGrid from '@/components/FullGalleryGrid';

export const metadata = { title: 'Our Gallery - AECA' };

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Our Gallery" />
      <section className="py-16 md:py-24 bg-white">
        <div className="container-boxed">
          <FullGalleryGrid />
        </div>
      </section>
    </>
  );
}
