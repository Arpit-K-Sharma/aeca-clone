import Button from '@/components/Button';
import AboutSummary from '@/components/AboutSummary';
import MembersShowcase from '@/components/MembersShowcase';
import LightboxGrid from '@/components/LightboxGrid';
import NewsPreview from '@/components/NewsPreview';
import DonorLogoStrip from '@/components/DonorLogoStrip';
import { HERO_BG, LOGO } from '@/lib/assets';

export default function HomePage() {
  return (
    <>
      {/* Hero — real homepage hero, verified live 2026-09-05: "AECA Solidarity COVID-19
          Response fund for Nepal", NOT the "Study in Australia" slider caption (that text
          only appears on a later/alternate Revolution Slider slide, not as the page's H1). */}
      <section
        className="relative flex items-center min-h-[420px] bg-cover bg-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(63,56,54,0.55), rgba(63,56,54,0.55)), url(${HERO_BG})` }}
      >
        <div className="container-boxed py-20 text-center">
          <div className="w-2 h-16 bg-primary mb-6 mx-auto" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="" className="h-12 w-auto mb-4 bg-white p-1 mx-auto" />
          {/* NOTE: explicit `text-white` here because app/globals.css has a global
              `h1,h2,...{ color: var(--color-dark) }` rule that otherwise overrides
              this section's inherited `text-white` (element-selector color wins over
              inherited color regardless of DOM nesting) — confirmed via
              getComputedStyle that the H1 was rendering rgb(63,56,54), not white,
              before this fix. Tailwind's `.text-white` class selector has higher
              specificity than the bare `h1` element selector, so this wins. */}
          <h1 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-3xl mx-auto text-white">
            AECA Solidarity COVID-19 Response fund for Nepal
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/90">
            AECA would like to thank all who contributed for COVID-19 Response fund for Nepal.
            We are grateful for your contribution.
          </p>
        </div>
      </section>

      {/* Donor "thank you" logo strip — verified live, directly under the hero */}
      <DonorLogoStrip />

      <AboutSummary />

      {/* Our Objective (home page teaser — 3 of the full 13-item list) */}
      <section className="py-16 md:py-24 bg-tint-lighter">
        <div className="container-boxed">
          <h2 className="text-3xl font-montserrat font-bold mb-12 text-center">Our Objective</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Commitment for betterment</h3>
              <p className="text-sm text-text-muted">Awareness and promotion of Australia</p>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">One Platform</h3>
              <p className="text-sm text-text-muted">Develop and distribute training resources</p>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">Code of Practice</h3>
              <p className="text-sm text-text-muted">Represent members to Australian government agencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* President's Message */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-boxed grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://aeca.com.au/wp-content/uploads/2024/12/President-1024x1024.png"
              alt="Komal Raj Pathak"
              className="rounded w-full object-cover"
            />
            <p className="font-montserrat font-semibold mt-4">Mr. Komal Raj Pathak (President)</p>
          </div>
          <div>
            <h2 className="text-3xl font-montserrat font-bold mb-4">Message from our President</h2>
            <p className="mb-4">Dear All,</p>
            <p className="text-text-muted mb-4">
              The Australian Education Consultants Alliance (AECA) was established in 2012 by industry
              professionals to enhance the services provided by education consultants in Australia. AECA
              and its members operate under a Code of Practice and promote Australian education services
              internationally. The AECA is dedicated to supporting and guiding education consultants and
              stakeholders in Australia. We offer expert advice to international students seeking counsel
              in Australia, assisting them in making informed choices that will help them achieve their
              academic objectives.
            </p>
            <details>
              <summary className="cursor-pointer text-primary font-montserrat font-semibold btn-inline">
                Read More
              </summary>
              <div className="mt-4 space-y-4 text-text-muted">
                <p>
                  I am proud to be the president of the Australian Education Consultants&rsquo; Alliance
                  (AECA) for the term 2024 &ndash; 2026. I am committed to acting in good faith, sincerity,
                  and dedication to the growth of this organization. I would also like to acknowledge the
                  contributions made by our Immediate Past President, Mr. Ram Chandra Poudel, and all our
                  valuable members
                </p>
                <p>
                  I have been associated with AECA since 2014. Over the past decade, I have built
                  relationships with many industry friends through this organization. My journey with the
                  AECA executive team started as a General Secretary in 2019, followed by the role of
                  Vice-President in 2022. Together, we have worked diligently for the betterment of this
                  organization and will continue to create new opportunities for our members.
                </p>
                <p>
                  Looking ahead, we have several exciting initiatives planned to further support and
                  enhance the capabilities of our members. We aim to introduce a range of professional
                  development programs, workshops, and networking events that will foster collaboration
                  and innovation within the industry. Additionally, we will be advocating for policies
                  that benefit education consultants and international students alike, ensuring that our
                  voices are heard at both national and international levels.
                </p>
                <p>
                  We are also committed to leveraging technology to streamline our operations and improve
                  the services we provide. By embracing digital tools and platforms, we can better connect
                  with our members, provide timely updates, and offer valuable resources that will help
                  them succeed in their roles.
                </p>
                <p>
                  I am excited about the future of AECA and the opportunities. Together, we can achieve
                  great things and continue to uphold the high standards of excellence that AECA is known
                  for.
                </p>
                <p>We look forward to our successful journey together!</p>
                <p>
                  Warm regards,<br />
                  Komal Raj Pathak<br />
                  President,<br />
                  AECA (2024 – 2026)
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Green "Our photo gallery" banner section */}
      <section className="py-16 md:py-24 bg-[#008852] text-white">
        <div className="container-boxed">
          <h2 className="text-3xl font-montserrat font-bold mb-8">Our photo gallery</h2>
          <LightboxGrid />
          <div className="mt-10 text-center">
            <Button href="/gallery" variant="dark">View full gallery</Button>
          </div>
        </div>
      </section>

      <MembersShowcase />
      <NewsPreview />
    </>
  );
}
