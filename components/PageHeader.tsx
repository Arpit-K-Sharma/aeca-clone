import Link from 'next/link';

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="bg-tint-lightest border-b border-tint-light">
      <div className="container-boxed py-16">
        <h1 className="text-3xl md:text-4xl font-montserrat font-bold mb-2">{title}</h1>
        <nav className="text-sm text-text-muted" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <span>{title}</span>
        </nav>
      </div>
    </div>
  );
}
