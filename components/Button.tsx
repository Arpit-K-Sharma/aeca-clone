import Link from 'next/link';
import type { ReactNode } from 'react';

export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  small = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'dark' | 'outline';
  className?: string;
  small?: boolean;
  external?: boolean;
}) {
  const variantClass =
    variant === 'dark'
      ? 'bg-dark text-white'
      : variant === 'outline'
      ? 'bg-transparent border border-dark text-dark'
      : 'bg-primary text-white';

  const classes = `btn-theme font-montserrat inline-block ${variantClass} ${
    small ? 'btn-small' : ''
  } ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
