export default function StatBlock({
  icon,
  number,
  label,
}: {
  icon: string;
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="text-primary text-[70px] leading-none" aria-hidden="true">
        {icon}
      </div>
      <div>
        <div className="text-4xl font-montserrat font-bold text-dark">{number}</div>
        <div className="text-sm text-text-muted leading-[22px]">{label}</div>
      </div>
    </div>
  );
}
