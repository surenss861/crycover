/**
 * Premium panel: card on soft surface.
 * bg-white/55, inner border, top specular, wide soft shadow.
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
      className={`relative rounded-3xl border border-black/5 bg-white/55 shadow-panel ${className}`}
      style={{
        boxShadow: "0 20px 60px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.4)",
      }}
    >
      {/* Top-edge specular highlight */}
      <div
        className="absolute inset-x-4 top-0 h-px rounded-full opacity-60 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)" }}
        aria-hidden
      />
      {children}
    </div>
  );
}
