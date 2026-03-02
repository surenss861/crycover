"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/Button";
import { Panel } from "@/components/Panel";
import { PatchMotif } from "@/components/PatchMotif";
import { SectionRail } from "@/components/SectionRail";
import { HeroSection } from "@/components/home/HeroSection";
import { IconApply, IconRest, IconReset } from "@/components/home/HowItWorksIcons";

gsap.registerPlugin(ScrollTrigger);

const card =
  "rounded-2xl bg-white/80 backdrop-blur border border-black/10 shadow-[0_18px_50px_rgba(0,0,0,0.08)]";

function FridgeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="1" />
      <path d="M4 8h16M4 14h16" />
    </svg>
  );
}
function ApplyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    </svg>
  );
}
function RemoveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

/** Touch-safe compare slider: pointer events + touch-none + 44px hitbox */
function CompareSlider() {
  const [value, setValue] = useState(50);
  const railRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const rail = railRef.current;
    if (!rail) return;
    const rect = rail.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setValue(Math.round(x * 100));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    isDragging.current = true;
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="touch-none select-none">
      <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-ink/50">
        <span>Before</span>
        <span>After</span>
      </div>
      <div
        ref={railRef}
        role="slider"
        aria-label="Drag to compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onKeyDown={(e) => {
          const step = e.key === "ArrowLeft" ? -10 : e.key === "ArrowRight" ? 10 : 0;
          if (step) {
            e.preventDefault();
            setValue((v) => Math.max(0, Math.min(100, v + step)));
          }
        }}
        className="relative mt-2 h-2 w-full rounded-full bg-black/10 cursor-ew-resize"
      >
        <div
          className="absolute left-0 top-0 h-2 rounded-full bg-black/20 transition-[width] duration-0"
          style={{ width: `${value}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 h-10 w-10 -m-2 grid place-items-center cursor-ew-resize"
          style={{ left: `${value}%` }}
        >
          <span className="h-6 w-6 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] border border-black/15 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

export function HomePageContent() {
  const socialRef = useRef<HTMLElement>(null);
  const howRef = useRef<HTMLElement>(null);
  const productRef = useRef<HTMLElement>(null);
  const resultsRef = useRef<HTMLElement>(null);
  const ingredientsRef = useRef<HTMLElement>(null);
  const bundleRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);

  // Chapter transitions only (2–3 moments), not every section
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const triggers = [
      { ref: howRef, y: 24, delay: 0 },
      { ref: productRef, y: 24, delay: 0 },
      { ref: resultsRef, y: 20, delay: 0.1 },
    ];
    triggers.forEach(({ ref: r, y, delay }) => {
      if (!r?.current) return;
      gsap.fromTo(
        r.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: r.current,
            start: "top 88%",
            end: "top 70%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  // Sticky CTA when Results section enters view
  useEffect(() => {
    const el = resultsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setShowStickyCta(e.isIntersecting),
      { rootMargin: "-10% 0px 0px 0px", threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <HeroSection />

      {/* Full-bleed band — scene change: gradient + rule + type moment */}
      <div className="relative border-b border-black/[0.04] py-14 md:py-[4.5rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none" aria-hidden />
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "180px 180px" }} aria-hidden />
        <div className="absolute left-1/2 bottom-0 w-[80%] max-w-md h-px -translate-x-1/2 bg-black/[0.06]" aria-hidden />
        <div className="relative mx-auto max-w-[980px] px-4 text-center">
          <p className="text-[28px] md:text-[34px] font-medium tracking-[-0.02em] text-ink">
            Visible calm in 10 minutes.
          </p>
          <p className="mt-2 text-sm text-ink/60">
            Gentle care — no explanation needed.
          </p>
        </div>
      </div>

      <section
        ref={socialRef}
        className="border-t border-black/[0.04] bg-surface px-4 py-14 md:py-[4.5rem]"
      >
        <div className="mx-auto max-w-[1100px] flex flex-col gap-6 md:gap-10">
          <SectionRail label="Proof" />
          <div className="text-center">
            <p className="text-lg font-medium text-ink">★★★★★ Loved by early testers</p>
            <p className="mt-1 text-sm text-ink/70">Loved by people who don&apos;t want to explain.</p>
            <p className="mt-3 text-[13px] text-ink/80 max-w-md mx-auto">
              In beta: most testers reported calmer-looking eyes in 10 minutes <span className="text-ink/55">(n=__)</span>
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 text-center md:text-left">
            <blockquote className={`${card} px-5 py-4`}>
              <p className="text-sm italic text-ink/90">&ldquo;I keep one in my bag. No one has to know.&rdquo;</p>
              <footer className="mt-2 text-[11px] text-ink/50">— <strong className="text-ink/80">Maya, 29</strong> · post-cry at work</footer>
            </blockquote>
            <blockquote className={`${card} px-5 py-4`}>
              <p className="text-sm italic text-ink/90">&ldquo;Used it before a big meeting. Eyes looked normal again.&rdquo;</p>
              <footer className="mt-2 text-[11px] text-ink/50">— <strong className="text-ink/80">James, 34</strong> · before seeing people</footer>
            </blockquote>
            <blockquote className={`${card} px-5 py-4`}>
              <p className="text-sm italic text-ink/90">&ldquo;After a red-eye flight, these saved me.&rdquo;</p>
              <footer className="mt-2 text-[11px] text-ink/50">— <strong className="text-ink/80">Sam, 26</strong> · after travel</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        ref={howRef}
        className="relative border-t border-black/[0.04] bg-white/40 px-4 py-14 md:py-[4.5rem]"
      >
        <PatchMotif className="right-8 top-1/2 -translate-y-1/2 md:right-12" />
        <div className="mx-auto max-w-[1100px] flex flex-col gap-6 md:gap-10">
          <SectionRail label="How it works" />
          <Panel className="px-8 py-12">
            <h2 className="text-center text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] md:tracking-[-0.03em] text-ink">
              How it works
            </h2>
            <p className="mx-auto mt-2 max-w-md text-center text-sm text-ink/80">
              Designed for the places feelings show first.
            </p>
            <div className="mt-10 grid gap-6 md:gap-10 md:grid-cols-3">
              {[
                { step: "1", title: "Apply", text: "Place under eyes + upper cheek.", Icon: IconApply },
                { step: "2", title: "Rest", text: "10 minutes. Cool, calm, no rush.", Icon: IconRest },
                { step: "3", title: "Reset", text: "Remove gently. Skin looks calmer.", Icon: IconReset },
              ].map(({ step, title, text, Icon }) => (
                <div key={step} className="text-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage/15 text-sage">
                    <Icon />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-ink/70">{text}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </section>

      {/* Mode A — When you'd use it: no border-left, 2-col grid, lighter/social */}
      <section className="border-t border-black/[0.04] bg-surface px-4 py-14 md:py-[4.5rem]">
        <div className="mx-auto max-w-[980px]">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px flex-1 max-w-12 bg-ink/10" aria-hidden />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink/50">When you&apos;d use it</span>
          </div>
          <div className="h-px w-full max-w-[120px] bg-ink/10 mb-8" aria-hidden />
          <ul className="grid gap-4 md:grid-cols-2 md:gap-x-12 gap-y-3 text-sm text-ink/80">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-sage/50 shrink-0" />
              After crying
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-sage/50 shrink-0" />
              After travel / late night
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-sage/50 shrink-0" />
              Before seeing people
            </li>
          </ul>
        </div>
      </section>

      {/* Chapter divider: How → Product */}
      <div className="border-t border-black/[0.04] bg-surface py-4 md:py-5">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink/50">
            The Reset Kit
          </span>
        </div>
      </div>

      <section
        ref={productRef}
        className="border-t border-black/[0.04] bg-white/40 px-4 py-14 md:py-[4.5rem]"
      >
        <div className="mx-auto max-w-[1100px] flex flex-col gap-6 md:gap-10">
          <SectionRail label="The product" />
          <Panel className="px-8 py-12">
            <div className="grid items-center gap-6 md:gap-10 md:grid-cols-2">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-black/[0.08] bg-sand/30">
                  <Image
                    src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80"
                    alt="Skincare patches or eye care product"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* How-to-use — real video slot: sheen + duration pill + play */}
                <div className="space-y-2">
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-black/[0.08] via-white/60 to-black/[0.06]">
                    <div className="absolute inset-0 opacity-[0.35] [background:linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.55)_18%,transparent_36%)]" aria-hidden />
                    <div className="absolute left-4 top-4 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink/60 border border-black/10">
                      Watch how · :15
                    </div>
                    <Link href="/#how-it-works" className="absolute inset-0 grid place-items-center">
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-black/10 text-2xl text-ink/80 ml-1">▶</span>
                    </Link>
                  </div>
                  <p className="text-[11px] text-ink/60">Open pouch → Apply under eyes → 10 min → Remove</p>
                </div>
              </div>
              <div>
                <h2 className="text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] md:tracking-[-0.03em] text-ink">
                  The Reset Kit
                </h2>
                <p className="mt-4 text-ink/80">
                  6 individually wrapped patches. Keep one at home, one in your bag.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-ink/70">
                  <li><strong className="text-ink">Caffeine</strong> — for the look of less puffiness</li>
                  <li><strong className="text-ink">Niacinamide</strong> — for the look of calmer skin</li>
                  <li><strong className="text-ink">Hyaluronic acid</strong> — hydration after tears</li>
                </ul>
                <p className="mt-4 text-xs text-ink/60">
                  Cosmetic use only. Not a medical product.
                </p>
                {/* Purchase anxiety — hierarchy: returns first, then shipping, then sensitive skin */}
                <div className="mt-4 space-y-1 text-[11px] text-ink/60">
                  <p><strong className="text-ink/80 font-medium">30-day free returns</strong></p>
                  <p>Ships from US · 24–48h dispatch</p>
                  <p>No fragrance · no harsh actives</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-4">
                  <Button href="/products/reset-kit" data-track="add_to_cart">Add to cart</Button>
                  <Button href="/finder" variant="outline" data-track="finder_start">
                    Find your fit
                  </Button>
                </div>
                <div className="mt-5 pt-4 border-t border-black/[0.06] text-[12px] text-ink/80">
                  <p><strong className="text-ink">Shipping:</strong> Free $50+ · Ships in 24–48h</p>
                  <p className="mt-1"><strong className="text-ink">Returns:</strong> 30-day, no questions · Secure checkout</p>
                  <Link href="/shipping" className="mt-2 inline-block text-sage hover:underline">Details →</Link>
                </div>
              </div>
            </div>
          </Panel>
        </div>
      </section>

      {/* Mode A — What it's not: short manifesto + 3 bullets, decisive */}
      <section className="border-t border-black/[0.04] bg-surface px-4 py-14 md:py-[4.5rem]">
        <div className="mx-auto max-w-[980px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px flex-1 max-w-12 bg-ink/10" aria-hidden />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink/50">What it&apos;s not</span>
          </div>
          <p className="text-base font-medium text-ink/90 mb-6 max-w-md">
            Gentle cosmetic patches. Not medicine. No harsh actives. No sting, no fragrance.
          </p>
          <ul className="space-y-2 text-sm text-ink/80">
            <li className="flex items-center gap-3">
              <span className="text-ink/40">—</span>
              Not medicine
            </li>
            <li className="flex items-center gap-3">
              <span className="text-ink/40">—</span>
              Not harsh actives
            </li>
            <li className="flex items-center gap-3">
              <span className="text-ink/40">—</span>
              No sting / fragrance vibe
            </li>
          </ul>
        </div>
      </section>

      {/* Editorial split — Why it works + patch cross-section */}
      <section className="border-t border-black/[0.04] bg-white/40 px-4 py-14 md:py-[4.5rem]">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid items-center gap-6 md:gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-6 md:gap-10">
              <SectionRail label="Why it works" />
              <h2 className="text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] md:tracking-[-0.03em] text-ink">
                Gentle actives where you need them
              </h2>
              <p className="text-sm text-ink/80">
                Caffeine and niacinamide help with the look of puffiness and redness. Hyaluronic acid rehydrates. No harsh actives, no fragrance — just a 10-minute reset.
              </p>
              <ul className="space-y-2 text-sm text-ink/70">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage/50 shrink-0" />
                  Cooling hydrogel
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage/50 shrink-0" />
                  Caffeine + niacinamide
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage/50 shrink-0" />
                  Hydration layer
                </li>
              </ul>
            </div>
            {/* Patch cross-section micro diagram */}
            <div className="flex justify-center">
              <div className={`w-full max-w-[200px] ${card} p-4`}>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50 mb-3 text-center">Patch cross-section</p>
                <div className="space-y-2">
                  <div className="h-8 rounded-lg bg-gradient-to-b from-sand/40 to-sand/20 border border-black/5 flex items-center justify-center">
                    <span className="text-[9px] font-medium text-ink/60">Cooling hydrogel</span>
                  </div>
                  <div className="h-8 rounded-lg bg-sage/15 border border-sage/20 flex items-center justify-center">
                    <span className="text-[9px] font-medium text-ink/70">Caffeine + niacinamide</span>
                  </div>
                  <div className="h-8 rounded-lg bg-white/80 border border-black/5 flex items-center justify-center">
                    <span className="text-[9px] font-medium text-ink/60">Hydration layer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mode B — Proof gallery: exhibit container + distinct bg */}
      <section
        ref={resultsRef}
        className="relative border-t border-black/[0.06] bg-[#f5f2ee] px-4 py-14 md:py-[4.5rem]"
      >
        <PatchMotif className="bottom-12 left-8 md:left-12" />
        <div className="mx-auto max-w-[1100px] flex flex-col gap-5 md:gap-8">
          <SectionRail label="Real results" />
          <h2 className="text-center text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] md:tracking-[-0.03em] text-ink">
            Real results
          </h2>
          <p className="mx-auto max-w-xl text-center text-sm text-ink/80">
            Honest lighting. Real moments.
          </p>
          {/* Testing conditions strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.15em] text-ink/50">
            <span>Same light</span>
            <span>10 minutes</span>
            <span>No makeup</span>
            <span>No filter</span>
            <span>Single use</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-black/10 bg-white/80 px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-ink/60">
              Tap or drag to compare
            </span>
            <span className="text-[10px] uppercase tracking-[0.15em] text-ink/50">
              Unretouched · single use
            </span>
          </div>
          <p className="text-[11px] text-ink/50 max-w-md text-center">
            Everyone&apos;s skin is different. Photos shown are unretouched.
          </p>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 md:grid-rows-2">
            {/* BA 1 — skin-toned abstract gradient (lab card) */}
            <div className={`relative ${card} p-5 md:row-span-2`}>
              <span className="absolute right-4 top-4 rounded-full bg-sage/20 px-2 py-1 text-[9px] font-medium uppercase tracking-wider text-sage z-10">10 min</span>
              <div className="absolute left-4 top-4 text-[8px] tracking-[0.18em] uppercase text-ink/50 z-10">
                Same light · 10 min
              </div>
              <div className="mt-8 rounded-2xl ring-1 ring-black/5 h-[420px] overflow-hidden relative bg-gradient-to-b from-[#d4c4b5] via-[#e8ddd2] to-[#dfd2c6] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]">
                <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "120px 120px" }} aria-hidden />
              </div>
              <CompareSlider />
              <div className="mt-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink/45">Focus</p>
                <p className="mt-0.5 text-sm text-ink/80">Under-eye puffiness look (10 min)</p>
              </div>
            </div>
            {/* BA 2 — skin-toned abstract gradient */}
            <div className={`relative ${card} p-5 md:row-span-2`}>
              <span className="absolute right-4 top-4 rounded-full bg-sage/20 px-2 py-1 text-[9px] font-medium uppercase tracking-wider text-sage z-10">10 min</span>
              <div className="absolute left-4 top-4 text-[8px] tracking-[0.18em] uppercase text-ink/50 z-10">
                Same light · 10 min
              </div>
              <div className="mt-8 rounded-2xl ring-1 ring-black/5 h-[420px] overflow-hidden relative bg-gradient-to-b from-[#c9b8a8] via-[#e2d8ce] to-[#d8ccc2] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]">
                <div className="absolute inset-0 opacity-[0.06] mix-blend-multiply pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "120px 120px" }} aria-hidden />
              </div>
              <CompareSlider />
              <div className="mt-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink/45">Focus</p>
                <p className="mt-0.5 text-sm text-ink/80">Redness look (10 min)</p>
              </div>
            </div>
            <div className={`${card} p-5 flex flex-col justify-center`}>
              <p className="text-sm italic text-ink/90">&ldquo;I keep one in my bag. No one has to know.&rdquo;</p>
              <p className="mt-2 text-[11px] text-ink/50">— Real customer</p>
            </div>
            {/* Micro proof card — breaks "all BA" pattern */}
            <div className={`${card} bg-sage/5 p-5 flex flex-col justify-center`}>
              <p className="text-sm font-medium text-ink/90">Cooling hydrogel + caffeine + niacinamide</p>
              <p className="mt-1 text-[11px] text-ink/70">Designed for sensitive skin</p>
            </div>
            <div className={`${card} p-5 flex flex-col justify-center`}>
              <p className="text-xs font-medium uppercase tracking-wider text-sage mb-3">Routine</p>
              <div className="flex items-center justify-center gap-3 text-ink/70">
                <span className="flex flex-col items-center gap-1">
                  <FridgeIcon className="w-6 h-6" />
                  <span className="text-[10px]">Fridge</span>
                </span>
                <span className="text-ink/40">→</span>
                <span className="flex flex-col items-center gap-1">
                  <ApplyIcon className="w-6 h-6" />
                  <span className="text-[10px]">Apply</span>
                </span>
                <span className="text-ink/40">→</span>
                <span className="flex flex-col items-center gap-1">
                  <RemoveIcon className="w-6 h-6" />
                  <span className="text-[10px]">Remove</span>
                </span>
              </div>
              <p className="mt-2 text-sm text-ink/80 text-center">10 min</p>
            </div>
          </div>

          {/* Trust row */}
          <p className="text-center text-[11px] text-ink/50">
            No filters — Same light — 10 minutes — Sensitive-skin friendly
          </p>

          {/* CTA row — decision pressure */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Button href="/products/reset-kit" data-track="results_atc">Add to cart</Button>
            <Button href="/#shop-bundles" variant="outline" data-track="results_bundles">Shop bundles</Button>
            <Link href="/#faq" className="text-sm font-medium text-ink/80 hover:text-ink underline-offset-2 hover:underline" data-track="results_faq">Read FAQ</Link>
          </div>
        </div>
      </section>

      {/* Mode A — Ingredients: border-left + dense spec (technical) */}
      <section
        ref={ingredientsRef}
        className="border-t border-black/[0.04] bg-surface px-4 py-14 md:py-[4.5rem]"
      >
        <div className="mx-auto max-w-[980px]">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px flex-1 max-w-12 bg-ink/10" aria-hidden />
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink/50">Ingredients</span>
          </div>
          <div className="border-l-2 border-ink/15 pl-6 space-y-1">
            <p className="text-sm text-ink/80 leading-relaxed">
              Caffeine · Niacinamide · Hyaluronic acid.
            </p>
            <p className="text-sm text-ink/80 leading-relaxed">
              Gentle, no harsh actives. Safe for sensitive skin.
            </p>
            <p className="text-xs text-ink/60 mt-2">Not a medical product — for cosmetic use only.</p>
            <Link href="/ingredients" className="mt-4 inline-block text-sm font-medium text-sage hover:underline">
              Full ingredients & safety →
            </Link>
          </div>
        </div>
      </section>

      <section
        id="shop-bundles"
        ref={bundleRef}
        className="border-t border-black/[0.04] bg-white/40 px-4 py-14 md:py-[4.5rem]"
      >
        <div className="mx-auto max-w-[1100px] flex flex-col gap-6 md:gap-10">
          <SectionRail label="Shop bundles" />
          <h2 className="text-center text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] md:tracking-[-0.03em] text-ink">
            Save more when you stock up
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <div className={`relative ${card} h-full p-6 flex flex-col transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]`}>
              <div className="flex-1 text-center">
                <p className="text-sm font-semibold text-ink">Reset Kit</p>
                <p className="mt-1 text-3xl font-semibold text-ink">$24</p>
                <p className="mt-2 text-sm text-ink/70">3 resets · $4.00/patch</p>
                <p className="mt-1 text-xs text-ink/50">Best for: try it</p>
              </div>
              <Link href="/products/reset-kit" data-track="bundle_atc" data-bundle="kit" className="mt-5 flex h-11 min-h-[44px] w-full items-center justify-center rounded-full bg-ink px-4 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] hover:opacity-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:ring-offset-2">
                Add Kit to cart
              </Link>
            </div>
            <div className={`relative ${card} h-full p-6 flex flex-col transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] border-2 border-sage/30 ring-2 ring-sage/10`}>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-black/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink/60">You save $4</span>
                <span className="rounded-full bg-sage/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink/70">Most popular</span>
              </div>
              <div className="flex-1 mt-4 text-center">
                <p className="text-sm font-semibold text-ink">Reset Duo</p>
                <p className="mt-1 text-3xl font-semibold text-ink">$44</p>
                <p className="mt-1 text-xs text-ink/55 line-through">$48</p>
                <p className="mt-2 text-sm text-ink/70">6 resets · $3.67/patch</p>
                <p className="mt-1 text-xs text-ink/50">Best for: home + bag</p>
              </div>
              <Link href="/products/reset-duo" data-track="bundle_atc" data-bundle="duo" className="mt-5 flex h-11 min-h-[44px] w-full items-center justify-center rounded-full bg-ink px-4 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] hover:opacity-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:ring-offset-2">
                Add Duo to cart
              </Link>
            </div>
            <div className={`relative ${card} h-full p-6 flex flex-col transition hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]`}>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-black/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink/60">You save $10</span>
              </div>
              <div className="flex-1 mt-4 text-center">
                <p className="text-sm font-semibold text-ink">Reset Trio</p>
                <p className="mt-1 text-3xl font-semibold text-ink">$62</p>
                <p className="mt-1 text-xs text-ink/55 line-through">$72</p>
                <p className="mt-2 text-sm text-ink/70">9 resets · $3.44/patch · Free shipping</p>
                <p className="mt-1 text-xs text-ink/50">Best for: stressful weeks</p>
              </div>
              <Link href="/products/reset-trio" data-track="bundle_atc" data-bundle="trio" className="mt-5 flex h-11 min-h-[44px] w-full items-center justify-center rounded-full bg-ink px-4 text-center text-sm font-medium text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)] hover:opacity-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:ring-offset-2">
                Add Trio to cart
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mode C — Details panel: FAQ with heavier headings */}
      <section
        id="faq"
        ref={faqRef}
        className="border-t border-black/[0.04] bg-surface px-4 py-14 md:py-[4.5rem]"
      >
        <div className="mx-auto max-w-[980px] flex flex-col gap-6 md:gap-10">
          <SectionRail label="Quick answers" />
          <Panel className="px-8 py-12">
            <h2 className="text-center text-[28px] md:text-[32px] font-bold tracking-[-0.02em] md:tracking-[-0.03em] text-ink">
              Quick answers
            </h2>
            <ul className="mt-8 space-y-6">
              {[
                { q: "How long do I leave them on?", a: "About 10 minutes. Keep in the fridge for an extra cooling feel." },
                { q: "Are they okay for sensitive skin?", a: "Yes. We avoid harsh actives. See our full ingredients page for details." },
                { q: "Will this sting?", a: "No. The formula is gentle and cooling. If you have very sensitive skin, do a patch test first." },
                { q: "Is it fragrance-free?", a: "Yes. No added fragrance." },
                { q: "Can I wear makeup after?", a: "Yes. Remove the patches, let skin dry for a minute, then apply makeup as usual." },
                { q: "Does it work if I didn't cry?", a: "Yes. It helps with under-eye puffiness and redness from travel, late nights, or allergies too." },
              ].map(({ q, a }) => (
                <li key={q}>
                  <h3 className="font-semibold text-ink">{q}</h3>
                  <p className="mt-1 text-sm text-ink/70">{a}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Link href="/faq" className="text-sage font-medium hover:underline">
                Full FAQ →
              </Link>
            </div>
          </Panel>
        </div>
      </section>

      {/* Sticky CTA — safe-area + blur fallback for Safari iOS */}
      {showStickyCta && (
        <div className="fixed bottom-0 left-0 right-0 z-40 min-h-[3.5rem] pt-3 pb-[env(safe-area-inset-bottom)] border-t border-black/5 bg-white/90 backdrop-blur-xl flex items-center">
          <div className="mx-auto w-full max-w-[1100px] px-4 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="font-medium text-ink text-sm">Reset Kit — $24</p>
              <p className="text-[11px] text-ink/55 truncate">6 patches · Ships in 24–48h · Free returns</p>
            </div>
            <Link
              href="/products/reset-kit"
              data-track="sticky_atc"
              className="flex-shrink-0 min-h-[44px] h-11 inline-flex items-center justify-center rounded-full bg-ink px-5 text-[13px] font-medium text-white hover:bg-ink/90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:ring-offset-2"
            >
              Add to cart
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
