/**
 * Panel (details mode): one shadow ladder token.
 * bg-white/60 border-black/5 shadow-panel.
 */
export function Panel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-3xl border border-black/5 bg-white/60 shadow-panel ${className}`}
    >
      <div
        className="absolute inset-x-4 top-0 h-px rounded-full opacity-50 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)" }}
        aria-hidden
      />
      {children}
    </div>
  );
}
