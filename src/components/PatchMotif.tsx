/**
 * Floating product motif: patch silhouette at very low opacity.
 * Reappears in key sections for consistency = premium.
 */
export function PatchMotif({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute opacity-[0.03] ${className}`}
      aria-hidden
    >
      <svg width="80" height="48" viewBox="0 0 80 48" fill="none" className="text-ink">
        <path
          d="M8 24c0-3 4-8 12-10s16 0 24 4 16 10 20 16c2 4 0 10-4 12s-10 0-16-4-12-8-16-12-4-8 0-12 8-8 16-10 8-4 8-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
