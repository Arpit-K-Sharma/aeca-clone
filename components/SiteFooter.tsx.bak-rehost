import Link from 'next/link';
import { LOGO } from '@/lib/assets';
import { ABOUT_BLURB } from '@/lib/content';

export default function SiteFooter() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-boxed py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="AECA logo" className="h-14 w-auto mb-4 bg-white p-2" />
          <p className="text-sm text-white/70">{ABOUT_BLURB}</p>
          <p className="text-sm mt-4">
            <a href="mailto:info@aeca.com.au" className="text-white/90 hover:text-primary">
              info@aeca.com.au
            </a>
          </p>
        </div>
        <div>
          <h4 className="text-lg font-montserrat font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-primary">About us</Link></li>
            <li><Link href="/events" className="hover:text-primary">Latest events</Link></li>
            <li><Link href="/news" className="hover:text-primary">News &amp; articles</Link></li>
            <li><Link href="/contact" className="hover:text-primary">Contact us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-montserrat font-semibold text-white mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/members" className="hover:text-primary">Our Members</Link></li>
            {/* Verbatim clone of live defect: dead "#" anchor (ADR-004) */}
            <li><a href="#" className="hover:text-primary">Terms &amp; condition</a></li>
            <li>
              <a
                href="https://aeca.com.au/wp-content/uploads/2021/04/AECA-Code-of-Practice-2015.pdf"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Code of Practice
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-montserrat font-semibold text-white mb-4">Contact</h4>
          <p className="text-sm text-white/70">
            <a href="mailto:info@aeca.com.au" className="hover:text-primary">info@aeca.com.au</a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-boxed py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          {/* Verbatim clone of live defect: stale hardcoded "2021" copyright (ADR-004) */}
          <p>
            © Copyright 2021 AECA. Site Designed by{' '}
            <a href="https://ausnepit.com.au" target="_blank" rel="noreferrer" className="hover:text-primary">
              AusNep IT Solutions
            </a>
          </p>
          <a
            href="https://www.facebook.com/australianeducationconsultantsalliance"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-primary"
          >
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
