"use client";

/**
 * Global depth layers: gradient mesh + vignette (edges 6–10% darker) + grain (2–4%).
 * Stops "blank beige" — gives a premium film look without new assets.
 */
export function PageFilm() {
  return (
    <>
      {/* Gradient mesh — subtle, not colorful */}
      <div
        className="pointer-events-none fixed inset-0 -z-20"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 50% 0%, rgba(248,246,243,0.4) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 80% 60%, rgba(232,228,222,0.35) 0%, transparent 45%),
            radial-gradient(ellipse 70% 50% at 20% 80%, rgba(232,228,222,0.25) 0%, transparent 40%)
          `,
        }}
      />
      {/* Vignette — edges darker ~6–10%, warm charcoal */}
      <div
        className="pointer-events-none fixed inset-0 -z-20"
        aria-hidden
        style={{
          background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 42%, rgba(43,43,43,0.06) 70%, rgba(43,43,43,0.10) 100%)",
        }}
      />
      {/* Grain overlay — 2–4% opacity */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 opacity-[0.03] mix-blend-multiply"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />
    </>
  );
}
