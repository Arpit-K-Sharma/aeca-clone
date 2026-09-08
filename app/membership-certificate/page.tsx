import { notFound } from 'next/navigation';

export const metadata = { title: 'Page not found – AECA' };

// Membership Certificate (WP ?page_id=8961) is a genuine live 404 on the source site.
// Replicated verbatim per ADR-004 — the nav link exists and is clickable, but resolves to 404.
export default function MembershipCertificatePage() {
  notFound();
}
