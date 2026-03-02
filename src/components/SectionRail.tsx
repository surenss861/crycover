/**
 * Left-aligned section rail: micro label + 1px line.
 * Anchors whitespace so it feels curated, not empty.
 */
export function SectionRail({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone/80 shrink-0">
        {label}
      </span>
      <span
        className="h-px min-w-[2.5rem] w-10 bg-black/10 shrink-0"
        aria-hidden
      />
    </div>
  );
}
