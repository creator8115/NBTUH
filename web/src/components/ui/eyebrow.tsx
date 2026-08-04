export function Eyebrow({
  children,
  onDark = false,
  className = "",
}: {
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`block text-xs font-semibold uppercase tracking-[0.14em] ${
        onDark ? "text-brass-light" : "text-brass"
      } ${className}`}
    >
      {children}
    </span>
  );
}
