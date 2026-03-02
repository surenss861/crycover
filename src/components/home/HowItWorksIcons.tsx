/** Shared: 2px stroke, rounded, same circle + padding. */
const iconClass = "mx-auto text-sage";
const stroke = 2;

export function IconApply() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={iconClass} aria-hidden>
      <path
        d="M8 16c0-1.5 1.5-3 4-4s6 0 9 1.5 6 3.5 7.5 6c.8 1.5 0 3.5-1.5 4.5s-3.5 0-6-1.5-4.5-3-6-4.5-1.5-3 0-4.5 3-3 6-3.5 3-1.5 3-1.5"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 10v12M12 16h8" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

export function IconRest() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={iconClass} aria-hidden>
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth={stroke} />
      <path d="M16 10v6l4 4" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconReset() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={iconClass} aria-hidden>
      <path
        d="M16 6l1.5 6 6 1.5-6 1.5-1.5 6-1.5-6-6-1.5 6-1.5 1.5-6z"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 14l.8 3.2 3.2.8-3.2.8-.8 3.2-.8-3.2-3.2-.8 3.2-.8.8-3.2z" fill="currentColor" fillOpacity={0.4} />
    </svg>
  );
}
