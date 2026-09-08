import Link from 'next/link';

export const metadata = { title: 'Page not found – AECA' };

export default function NotFound() {
  return (
    <div className="container-boxed py-32 text-center">
      <h1 className="text-4xl font-montserrat font-bold mb-4">Page not found – AECA</h1>
      <p className="text-text-muted mb-8">
        The page you are looking for might have been removed, had its name changed, or is
        temporarily unavailable.
      </p>
      <Link href="/" className="btn-theme font-montserrat inline-block bg-primary text-white">
        Back to Home
      </Link>
    </div>
  );
}
