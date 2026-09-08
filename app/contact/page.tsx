import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact Page - AECA' };

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Page" />
      <section className="py-16 md:py-24 bg-white">
        <div className="container-boxed grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-montserrat font-bold mb-4">
              Feel free to get in touch with us.
            </h2>
            <p className="text-text-muted mb-8">
              AECA registered members offers you specialised education and migration consultancy
              services. Our registered education counsellors and migration agents have extensive
              experience in providing high quality education and immigration services.
            </p>
            <p className="font-montserrat font-semibold">
              <a href="mailto:info@aeca.com.au" className="hover:text-primary">info@aeca.com.au</a>
            </p>

            <h3 className="text-xl font-montserrat font-bold mt-12 mb-6">Leave a Message</h3>
            <ContactForm />
          </div>

          <div>
            {/* Verbatim clone of live defect: misconfigured London Eye map (ADR-004) — not "fixed" */}
            <iframe
              title="AECA location map"
              src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&output=embed"
              className="w-full h-[400px] border-0 rounded"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
