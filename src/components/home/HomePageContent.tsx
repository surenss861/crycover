"use client";

import Link from "next/link";
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
      <div className="relative border-b border-black/[0.04] py-14 md:py-16 overflow-hidden">
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
        className="border-t border-black/[0.04] bg-surface px-4 py-14 md:py-20"
      >
        <div className="mx-auto max-w-[1100px] flex flex-col gap-6 md:gap-10">
          <SectionRail label="Proof" />
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center">
            <span className="text-sm text-ink/80">★★★★★ 4.8 from 200+ reviews</span>
            <span className="text-sm text-ink/70">Loved by people who don&apos;t want to explain.</span>
            <blockquote className="w-full text-sm italic text-ink/90 md:max-w-md">
              &ldquo;I keep one in my bag. No one has to know.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <section
        ref={howRef}
        className="relative border-t border-black/[0.04] bg-surface px-4 py-14 md:py-20"
      >
        <PatchMotif className="right-8 top-1/2 -translate-y-1/2 md:right-12" />
        <div className="mx-auto max-w-[1100px] flex flex-col gap-6 md:gap-10">
          <SectionRail label="How it works" />
          <Panel className="px-8 py-12">
            <h2 className="text-center text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] text-ink">
              How it works
            </h2>
            <p className="mx-auto mt-2 max-w-md text-center text-sm text-ink/70">
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

      {/* Narrative: When you'd use it */}
      <section className="border-t border-black/[0.04] bg-surface px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[980px] flex flex-col gap-6 md:gap-10">
          <SectionRail label="When you'd use it" />
          <ul className="space-y-2 text-sm text-ink/80">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-sage/50" />
              After crying
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-sage/50" />
              After travel / late night
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-sage/50" />
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
        className="border-t border-black/[0.04] bg-surface px-4 py-14 md:py-20"
      >
        <div className="mx-auto max-w-[1100px] flex flex-col gap-6 md:gap-10">
          <SectionRail label="The product" />
          <Panel className="px-8 py-12">
            <div className="grid items-center gap-6 md:gap-10 md:grid-cols-2">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-sand/50 to-cream/80 flex items-center justify-center text-ink/55 text-sm border border-black/[0.08]">
                [Product image / short demo video]
              </div>
              <div>
                <h2 className="text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] text-ink">
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
                <p className="mt-4 text-xs text-ink/55">
                  Cosmetic use only. Not a medical product.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button href="/products/reset-kit">Shop Reset Kit</Button>
                  <Button href="/finder" variant="outline">
                    Find your fit
                  </Button>
                </div>
              </div>
            </div>
          </Panel>
        </div>
      </section>

      {/* Narrative: What it's not (trust builder) */}
      <section className="border-t border-black/[0.04] bg-surface px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[980px] flex flex-col gap-6 md:gap-10">
          <SectionRail label="What it's not" />
          <ul className="mt-4 space-y-2 text-sm text-ink/70">
            <li className="flex items-center gap-3">
              <span className="text-sage/70">—</span>
              Not medicine
            </li>
            <li className="flex items-center gap-3">
              <span className="text-sage/70">—</span>
              Not harsh actives
            </li>
            <li className="flex items-center gap-3">
              <span className="text-sage/70">—</span>
              No sting / fragrance vibe
            </li>
          </ul>
        </div>
      </section>

      {/* Editorial split — break the rhythm: copy left, visual right */}
      <section className="border-t border-black/[0.04] bg-surface px-4 py-14 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid items-center gap-6 md:gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-6 md:gap-10">
              <SectionRail label="Why it works" />
              <h2 className="text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] text-ink">
                Gentle actives where you need them
              </h2>
              <p className="mt-3 text-sm text-ink/80">
                Caffeine and niacinamide help with the look of puffiness and redness. Hyaluronic acid rehydrates. No harsh actives, no fragrance — just a 10-minute reset.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage/50 shrink-0" />
                  Cool, calming feel
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage/50 shrink-0" />
                  Individually wrapped for freshness
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage/50 shrink-0" />
                  Fits in any bag
                </li>
              </ul>
            </div>
            <div className="aspect-[4/5] max-h-[360px] md:max-h-none rounded-2xl bg-white/75 border border-black/5 shadow-card flex items-center justify-center overflow-hidden">
              <div className="w-[60%] h-[50%] rounded-2xl border border-white/50 bg-white/40 shadow-inner flex items-center justify-center">
                <span className="text-[10px] tracking-[0.2em] text-ink/[0.2]">POUCH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results = card token + photo-frame language */}
      <section
        ref={resultsRef}
        className="relative border-t border-black/[0.04] bg-surface px-4 py-14 md:py-20"
      >
        <PatchMotif className="bottom-12 left-8 md:left-12" />
        <div className="mx-auto max-w-[1100px] flex flex-col gap-6 md:gap-10">
          <SectionRail label="Real results" />
          <h2 className="text-center text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] text-ink">
            Real results
          </h2>
          <p className="mx-auto max-w-xl text-center text-sm text-ink/70">
            Honest lighting. Real moments.
          </p>
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-ink/45">
            Tap or drag to compare
          </p>

          <div className="grid gap-6 md:grid-cols-3 md:grid-rows-2">
            {/* BA 1 — card token + ring + shadow-inner frame + caption block */}
            <div className="relative rounded-3xl border border-black/5 bg-white/75 p-5 shadow-card md:row-span-2">
              <div className="absolute left-4 top-4 text-[8px] tracking-[0.2em] uppercase text-ink/50 z-10">
                SAME LIGHT / NO FILTERS / 10 MIN
              </div>
              <div className="mt-8 rounded-2xl ring-1 ring-black/5 h-[420px] overflow-hidden relative bg-gradient-to-b from-[#e8ddd5] via-[#f0eae4] to-[#e2d9d0] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "120px 120px" }} aria-hidden />
              </div>
              <div className="mt-4 text-center text-[10px] tracking-[0.2em] uppercase text-ink/40">BEFORE | AFTER</div>
              <div className="mt-2 mx-auto w-[70%] h-2 rounded-full bg-black/10 relative">
                <div className="absolute left-0 top-0 h-2 w-1/2 rounded-full bg-sage/40" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white border border-black/10 shadow-tight" />
              </div>
              <div className="mt-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink/45">Focus</p>
                <p className="mt-0.5 text-sm text-ink/80">Under-eye puffiness (10 min)</p>
              </div>
            </div>
            {/* BA 2 */}
            <div className="relative rounded-3xl border border-black/5 bg-white/75 p-5 shadow-card md:row-span-2">
              <div className="absolute left-4 top-4 text-[8px] tracking-[0.2em] uppercase text-ink/50 z-10">
                SAME LIGHT / NO FILTERS / 10 MIN
              </div>
              <div className="mt-8 rounded-2xl ring-1 ring-black/5 h-[420px] overflow-hidden relative bg-gradient-to-b from-[#e8ddd5] via-[#f0eae4] to-[#e2d9d0] shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "120px 120px" }} aria-hidden />
              </div>
              <div className="mt-4 text-center text-[10px] tracking-[0.2em] uppercase text-ink/40">BEFORE | AFTER</div>
              <div className="mt-2 mx-auto w-[70%] h-2 rounded-full bg-black/10 relative">
                <div className="absolute left-0 top-0 h-2 w-1/2 rounded-full bg-sage/40" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white border border-black/10 shadow-tight" />
              </div>
              <div className="mt-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink/45">Focus</p>
                <p className="mt-0.5 text-sm text-ink/80">Redness look (10 min)</p>
              </div>
            </div>
            <div className="rounded-3xl border border-black/5 bg-white/75 p-5 flex flex-col justify-center shadow-card">
              <p className="text-sm italic text-ink/90">&ldquo;I keep one in my bag. No one has to know.&rdquo;</p>
              <p className="mt-2 text-[11px] text-ink/60">— Real customer</p>
            </div>
            <div className="rounded-3xl border border-black/5 bg-white/75 p-5 flex flex-col justify-center shadow-card">
              <p className="text-xs font-medium uppercase tracking-wider text-sage mb-1">Routine</p>
              <p className="text-sm text-ink/80">Fridge → apply 10 min → remove</p>
            </div>
          </div>

          {/* Trust row: one line, em dashes */}
          <p className="text-center text-[11px] text-ink/55">
            No filters — Same light — 10 minutes — Sensitive-skin friendly
          </p>

          <div className="text-center">
            <Link href="/results" className="inline-block text-sage font-medium hover:underline">
              See results →
            </Link>
          </div>
        </div>
      </section>

      {/* Ingredients = quiet spec sheet (no panel) */}
      <section
        ref={ingredientsRef}
        className="border-t border-black/[0.04] bg-surface px-4 py-14 md:py-20"
      >
        <div className="mx-auto max-w-[980px] flex flex-col gap-6 md:gap-10">
          <SectionRail label="Ingredients" />
          <div className="border-l-2 border-sage/20 pl-6 py-2">
            <p className="text-sm text-ink/80 leading-relaxed">
              Caffeine · Niacinamide · Hyaluronic acid · Gentle, no harsh actives.
              Safe for sensitive skin. Not a medical product — for cosmetic use only.
            </p>
            <Link href="/ingredients" className="mt-3 inline-block text-sm font-medium text-sage hover:underline">
              Full ingredients & safety →
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={bundleRef}
        className="border-t border-black/[0.04] bg-surface px-4 py-14 md:py-20"
      >
        <div className="mx-auto max-w-[980px] flex flex-col gap-6 md:gap-10">
          <SectionRail label="Save more" />
          <div className="text-center">
          <p className="text-ink/80">
            Save with our Duo or Trio — keep one at home, one in your bag.
          </p>
          <Link
            href="/shop#bundles"
            className="mt-2 inline-block text-sm font-medium text-ink hover:underline"
          >
            Shop bundles →
          </Link>
          </div>
        </div>
      </section>

      {/* Wind-down: details mode — keep panel for FAQ */}
      <section
        ref={faqRef}
        className="border-t border-black/[0.04] bg-surface px-4 py-14 md:py-20"
      >
        <div className="mx-auto max-w-[980px] flex flex-col gap-6 md:gap-10">
          <SectionRail label="Quick answers" />
          <Panel className="px-8 py-12">
            <h2 className="text-center text-[28px] md:text-[32px] font-semibold tracking-[-0.02em] text-ink">
              Quick answers
            </h2>
            <ul className="mt-8 space-y-6">
              {[
                { q: "How long do I leave them on?", a: "About 10 minutes. Keep in the fridge for an extra cooling feel." },
                { q: "Are they okay for sensitive skin?", a: "Yes. We avoid harsh actives. See our full ingredients page for details." },
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

      {/* Sticky CTA — when Results in view; quiet luxury */}
      {showStickyCta && (
        <div className="fixed bottom-0 left-0 right-0 z-40 h-14 border-t border-black/5 bg-white/70 backdrop-blur-xl flex items-center">
          <div className="mx-auto w-full max-w-[1100px] px-4 flex items-center justify-between gap-4">
            <p className="text-[11px] text-ink/55 hidden sm:block">In stock · Ships fast</p>
            <div className="flex-1 flex items-center justify-center sm:justify-end gap-4">
              <p className="font-medium text-ink text-sm">Reset Kit — $24</p>
              <Link
                href="/products/reset-kit"
                className="rounded-full border border-black/10 bg-ink/90 px-4 py-2 text-[13px] font-medium text-white hover:bg-ink transition"
              >
                Shop now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
