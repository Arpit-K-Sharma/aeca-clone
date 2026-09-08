import type { Metadata } from 'next';
import { Montserrat, Open_Sans, Roboto, Roboto_Slab } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { FAVICON_32, FAVICON_192, APPLE_TOUCH_ICON } from '@/lib/assets';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-opensans',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-robotoslab',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AECA - Australian Education Consultants Alliance',
  description:
    'AECA registered members offers you specialised education and migration consultancy services.',
  icons: {
    icon: [
      { url: FAVICON_32, sizes: '32x32' },
      { url: FAVICON_192, sizes: '192x192' },
    ],
    apple: APPLE_TOUCH_ICON,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} ${roboto.variable} ${robotoSlab.variable} font-opensans antialiased`}
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
