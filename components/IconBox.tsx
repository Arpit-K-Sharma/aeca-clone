export type IconName = 'office' | 'target' | 'handshake' | 'book';

function Svg({ name }: { name: IconName }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  switch (name) {
    case 'office':
      return (
        <svg {...common} width="40" height="40" aria-hidden="true">
          <rect x="4" y="3" width="10" height="18" />
          <rect x="14" y="9" width="6" height="12" />
          <line x1="7" y1="7" x2="7" y2="7.01" />
          <line x1="11" y1="7" x2="11" y2="7.01" />
          <line x1="7" y1="11" x2="7" y2="11.01" />
          <line x1="11" y1="11" x2="11" y2="11.01" />
          <line x1="7" y1="15" x2="7" y2="15.01" />
          <line x1="11" y1="15" x2="11" y2="15.01" />
          <line x1="9" y1="21" x2="9" y2="17" />
        </svg>
      );
    case 'target':
      return (
        <svg {...common} width="40" height="40" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4.5" />
          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'handshake':
      return (
        <svg {...common} width="40" height="40" aria-hidden="true">
          <path d="M2 12l5-4 3 2 2-2 3 1 3-2 4 3" />
          <path d="M6 13l3.5 3.5a2 2 0 0 0 2.8 0L14 15" />
          <path d="M12.5 14.5L14 16a2 2 0 0 0 2.8 0L18 14.5" />
          <path d="M17 13l2-1.5" />
        </svg>
      );
    case 'book':
    default:
      return (
        <svg {...common} width="40" height="40" aria-hidden="true">
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 0 4 23.5v-18Z" />
          <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5a2.5 2.5 0 0 1 2.5 2.5v-18Z" />
        </svg>
      );
  }
}

export default function IconBox({
  icon,
  title,
  body,
}: {
  icon: IconName;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="text-primary flex-shrink-0" aria-hidden="true">
        <Svg name={icon} />
      </div>
      <div>
        <h3 className="text-lg font-montserrat font-semibold mb-2">{title}</h3>
        {body && <p className="text-sm text-text-muted">{body}</p>}
      </div>
    </div>
  );
}
