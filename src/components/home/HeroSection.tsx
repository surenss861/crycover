"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/Button";

const HeroCanvas = dynamic(
  () => import("@/components/home/HeroCanvas").then((m) => m.default),
  { ssr: false }
);

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const proofNoteRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.set([headlineRef.current, subheadRef.current, proofNoteRef.current, ctasRef.current, cardRef.current], { opacity: 0, y: 20 })
      .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.5 })
      .to(subheadRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.25")
      .to(proofNoteRef.current, { opacity: 1, y: 0, duration: 0.35 }, "-=0.2")
      .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.15")
      .to(cardRef.current, { opacity: 1, y: 0, duration: 0.45 }, "-=0.3");
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!cardRef.current || prefersReducedMotion) return;
    gsap.to(cardRef.current, {
      y: -4,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-black/[0.06] bg-gradient-to-b from-sand/30 to-surface px-4 py-14 md:py-20 md:px-6 min-h-[min(78vh,78dvh)] flex flex-col justify-center">
      <HeroCanvas />

      {/* Atmospheric wordmark — not shouting */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center text-[18vw] font-semibold tracking-[-0.06em] text-ink/[0.04] blur-[0.5px] select-none"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
        aria-hidden
      >
        CRY COVERS
      </div>

      {/* Global hero vignette (softer) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, rgba(43,43,43,0.05) 70%, rgba(43,43,43,0.08) 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute left-[18%] top-1/2 hidden lg:block z-[2] w-[38%] h-px -translate-y-1/2"
        aria-hidden
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(212,181,168,0.2) 45%, rgba(212,181,168,0.3) 50%, transparent 100%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr,300px] lg:gap-14">
          <div className="text-center lg:text-left pb-2">
            {/* Eyebrow: tiny caps, high tracking, darker rail */}
            <p
              ref={proofNoteRef}
              className="text-[10px] font-medium uppercase tracking-[0.25em] text-ink/70 mb-3 flex items-center gap-3 justify-center lg:justify-start"
            >
              <span className="h-px w-8 bg-ink/20" aria-hidden />
              Visible calm in 10 minutes
            </p>
            <h1
              ref={headlineRef}
              className="font-semibold tracking-[-0.03em] text-ink leading-[1.08] [font-size:clamp(2.1rem,5vw,3.75rem)] md:tracking-[-0.04em]"
            >
              10-minute under-eye{" "}
              <span className="border-b-2 border-sage/40 pb-0.5">reset</span>
              <br className="hidden sm:block" />
              <span className="italic text-ink/90 leading-[1.08]">after crying.</span>
            </h1>
            <p className="mt-2 text-sm text-ink/60 max-w-lg uppercase tracking-[0.12em]">
              For post-cry meetings, dates, and &ldquo;I&apos;m fine&rdquo; moments.
            </p>
            <p ref={subheadRef} className="mt-3 text-lg text-ink/80 max-w-lg md:text-xl">
              When feelings show up on your face. Gentle care — no explanation needed.
            </p>
            <p className="mt-2 text-sm font-medium text-ink/80 max-w-lg italic">
              Keep one in your bag. Nobody has to know.
            </p>
            <p className="mt-2 text-sm text-ink/80 max-w-lg">
              Cooling hydrogel patches for puffiness + redness look.
            </p>
            <p className="mt-1 text-[13px] font-medium text-ink/90">
              $24 · 6 individually wrapped patches
            </p>
            <div ref={ctasRef} className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Button href="/products/reset-kit" data-track="add_to_cart">Add to cart</Button>
              <Button href="/finder" variant="outline" data-track="finder_start">
                Take the 15-sec finder
              </Button>
            </div>
            {/* Micro-proof strip — checkout reassurance bar */}
            <div className="mt-4 rounded-full border border-black/[0.06] bg-white/60 backdrop-blur-sm px-4 py-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.18em] text-ink/50">
              <span>★★★★★ Loved by early testers</span>
              <span className="text-ink/40">·</span>
              <span>Ships 24–48h · Free returns</span>
              <span className="text-ink/40">·</span>
              <span>Secure checkout</span>
              <span className="text-ink/40">·</span>
              <span>No fragrance · Sensitive-skin friendly</span>
            </div>
            {/* Benefit chips */}
            <div className="mt-3 flex flex-wrap gap-2 justify-center lg:justify-start">
              {["Depuffs under-eyes", "Calms redness look", "10 min"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-black/5 bg-white/40 px-3 py-1 text-[12px] text-ink/80 backdrop-blur-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Card column: surface plane + contact line + card */}
          <div className="relative mx-auto w-full max-w-[300px] lg:mx-0 lg:translate-x-1 lg:mt-6">
            {/* Surface plane band */}
            <div
              className="pointer-events-none absolute left-[-10%] right-[-10%] top-[58%] z-0 h-36 bg-gradient-to-b from-white/0 via-white/55 to-white/0"
              aria-hidden
            />
            {/* Contact shadow line */}
            <div
              className="pointer-events-none absolute left-[10%] right-[10%] top-[72%] z-0 h-px bg-black/10"
              aria-hidden
            />
            {/* Spotlight halo + beam + reflection */}
            <div
              className="pointer-events-none absolute inset-0 -inset-y-6 z-0 rounded-3xl"
              aria-hidden
              style={{
                background: "radial-gradient(ellipse 90% 100% at 50% 45%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 45%, transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-[120%] -translate-x-1/2 z-0"
              aria-hidden
              style={{
                background: "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.12) 35%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.08) 70%, transparent 100%)",
              }}
            />
            <div
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-0 w-[90%] h-12 bottom-0"
              aria-hidden
              style={{
                background: "radial-gradient(ellipse 100% 100% at 50% 100%, rgba(43,43,43,0.06) 0%, transparent 70%)",
                filter: "blur(8px)",
              }}
            />

            <Link
              ref={cardRef}
              href="/products/reset-kit"
              data-track="add_to_cart"
              className="hero-card group relative z-10 flex w-full flex-col rounded-2xl border border-black/[0.10] bg-cream/95 p-5 transition-[transform,box-shadow] duration-300 ease-out hover:border-stone/30 hover:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.12)] -rotate-1"
              style={{
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.4), inset 0 -12px 24px -8px rgba(0,0,0,0.06), 0 8px 24px -8px rgba(0,0,0,0.08), 0 24px 56px -16px rgba(0,0,0,0.10)",
              }}
            >
              {/* Specular edges: top-left + right */}
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-px rounded-l-2xl opacity-40"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.6), transparent 40%)" }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute right-0 top-0 h-full w-px rounded-r-2xl opacity-30"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.5), transparent 50%)" }}
                aria-hidden
              />
              {/* Sheen — moves across on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden"
                aria-hidden
              >
                <div
                  className="absolute inset-0 w-[60%] -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[200%]"
                />
              </div>
              {/* Top highlight line */}
              <div
                className="absolute inset-x-4 top-4 h-px rounded-full opacity-50 group-hover:opacity-80 transition-opacity"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)" }}
                aria-hidden
              />
              <span className="absolute right-4 top-4 rounded-full bg-sage/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-sage">
                6 patches · Individually wrapped
              </span>
              {/* Hero image placeholder — gradient + noise + specular + inner card */}
              <div className="relative mt-4 aspect-[4/5] w-full overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-b from-black/[0.06] via-white/60 to-black/[0.04]">
                <div className="absolute inset-0 opacity-[0.18] [background:radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.10),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.08),transparent_55%)]" aria-hidden />
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:22px_22px]" aria-hidden />
                <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-black/[0.06] blur-2xl" aria-hidden />
                <div className="absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-black/[0.05] blur-2xl" aria-hidden />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/70 backdrop-blur border border-black/10 p-4 shadow-[0_16px_50px_rgba(0,0,0,0.10)]">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-ink/50">Reset Kit</div>
                  <div className="mt-1 text-sm text-ink/80">6 individually wrapped patches</div>
                  <div className="mt-2 text-2xl font-semibold text-ink">$24</div>
                </div>
              </div>
              <p className="mt-4 font-medium text-ink">Reset Kit</p>
              <p className="mt-0.5 text-[11px] text-ink/60">Includes: 6 individually wrapped patches</p>
              <p className="mt-2 text-xs text-ink/60 line-clamp-2">
                Cooling hydrogel. Caffeine, niacinamide, HA. Depuff + rehydrate in 10 min.
              </p>
              <p className="mt-4">
                <span className="text-2xl font-semibold tracking-tight text-ink">$24</span>
              </p>
              <p className="mt-1 text-[11px] text-ink/55">Ships 24–48h · Free returns</p>
              <p className="mt-1 text-[9px] uppercase tracking-wider text-ink/45">Same light · 10 min · single use</p>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-[0.04] mix-blend-soft-light"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"), repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)`,
          backgroundSize: "200px 200px, 100% 4px",
        }}
      />
    </section>
  );
}
