"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
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

  return (
    <>
      <HeroSection />

      <section
        ref={socialRef}
        className="border-b border-black/[0.08] bg-cream/80 px-4 py-6 md:px-6 md:py-8"
      >
        <div className="mx-auto max-w-4xl">
          <SectionRail label="Proof" />
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center text-stone">
            <span className="text-sm">★★★★★ 4.8 from 200+ reviews</span>
            <span className="text-sm">Loved by people who don&apos;t want to explain.</span>
            <blockquote className="w-full text-sm italic text-charcoal/90 md:max-w-md">
              &ldquo;I keep one in my bag. No one has to know.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <section
        ref={howRef}
        className="relative border-b border-black/[0.08] bg-[#F5F3EF] px-4 py-12 md:px-6 md:py-16"
      >
        <PatchMotif className="right-8 top-1/2 -translate-y-1/2 md:right-12" />
        <div className="mx-auto max-w-5xl">
          <SectionRail label="How it works" />
          <Panel className="mt-4 px-6 py-10 md:px-8 md:py-12">
            <h2 className="text-center text-2xl font-medium tracking-tight text-ink md:text-3xl">
              How it works
            </h2>
            <p className="mx-auto mt-2 max-w-md text-center text-sm text-stone">
              Designed for the places feelings show first.
            </p>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {[
                { step: "1", title: "Apply", text: "Place under eyes + upper cheek.", Icon: IconApply },
                { step: "2", title: "Rest", text: "10 minutes. Cool, calm, no rush.", Icon: IconRest },
                { step: "3", title: "Reset", text: "Remove gently. Skin looks calmer.", Icon: IconReset },
              ].map(({ step, title, text, Icon }) => (
                <div key={step} className="text-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage/15 text-sage">
                    <Icon />
                  </span>
                  <h3 className="mt-4 text-lg font-medium text-ink">{title}</h3>
                  <p className="mt-2 text-stone">{text}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </section>

      {/* Narrative: When you'd use it */}
      <section className="border-b border-black/[0.08] bg-cream/70 px-4 py-8 md:px-6 md:py-10">
        <div className="mx-auto max-w-2xl">
          <SectionRail label="When you'd use it" />
          <ul className="mt-4 space-y-2 text-sm text-ink/80">
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
      <div className="border-b border-black/[0.06] bg-cream/90 py-3 md:py-4">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-stone/70">
            The Reset Kit
          </span>
        </div>
      </div>

      <section
        ref={productRef}
        className="border-b border-black/[0.08] bg-sand/20 px-4 py-12 md:px-6 md:py-16"
      >
        <div className="mx-auto max-w-5xl">
          <SectionRail label="The product" />
          <Panel className="mt-4 px-6 py-10 md:px-8 md:py-12">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-sand/50 to-cream/80 flex items-center justify-center text-stone text-sm border border-black/[0.08]">
                [Product image / short demo video]
              </div>
              <div>
                <h2 className="text-2xl font-medium tracking-tight text-ink md:text-3xl">
                  The Reset Kit
                </h2>
              <p className="mt-4 text-stone">
                6 individually wrapped patches. Keep one at home, one in your bag.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-stone">
                <li><strong className="text-ink">Caffeine</strong> — for the look of less puffiness</li>
                <li><strong className="text-ink">Niacinamide</strong> — for the look of calmer skin</li>
                <li><strong className="text-ink">Hyaluronic acid</strong> — hydration after tears</li>
              </ul>
              <p className="mt-4 text-xs text-stone">
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
      <section className="border-b border-black/[0.08] bg-sand/10 px-4 py-8 md:px-6 md:py-10">
        <div className="mx-auto max-w-2xl">
          <SectionRail label="What it's not" />
          <ul className="mt-4 space-y-2 text-sm text-stone">
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

      <section
        ref={resultsRef}
        className="relative border-b border-black/[0.08] bg-cream/80 px-4 py-12 md:px-6 md:py-16"
      >
        <PatchMotif className="bottom-12 left-8 md:left-12" />
        <div className="mx-auto max-w-5xl">
          <SectionRail label="Real results" />
          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.15em] text-stone/70">
            Same light · no filter · 10 min
          </p>
          <h2 className="mt-3 text-center text-2xl font-medium tracking-tight text-ink md:text-3xl">
            Real results
          </h2>
          <p className="mx-auto mt-1 max-w-xl text-center text-sm text-stone">
            Honest lighting. Real moments.
          </p>

          {/* 4-card mosaic: left 2 tall BA, right column quote + routine */}
          <div className="mt-8 grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {/* BA 1 — taller */}
            <div className="relative rounded-2xl border border-black/[0.08] bg-white/70 p-4 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.05)] md:row-span-2">
              <span className="absolute left-3 top-3 z-10 rounded bg-ink/8 px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider text-ink/80">
                SAME LIGHT / NO FILTERS / 10 MIN
              </span>
              <div className="aspect-[3/4] mt-6 rounded-xl overflow-hidden bg-gradient-to-b from-[#e8ddd5] via-[#f0eae4] to-[#e2d9d0] flex flex-col items-center justify-center gap-2">
                <span className="text-[10px] font-medium uppercase tracking-wider text-ink/50">Before | After</span>
                <div className="flex w-full max-w-[70%] items-center rounded-full bg-black/10 p-1">
                  <div className="h-2 flex-1 rounded-full bg-sage/40" />
                  <div className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-sage shadow-[0_1px_3px_rgba(0,0,0,0.12)]" />
                </div>
              </div>
              <p className="mt-3 text-[11px] text-stone/90 tabular-nums">10 min · same light</p>
            </div>
            {/* BA 2 — taller */}
            <div className="relative rounded-2xl border border-black/[0.08] bg-white/70 p-4 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.05)] md:row-span-2">
              <span className="absolute left-3 top-3 z-10 rounded bg-ink/8 px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider text-ink/80">
                SAME LIGHT / NO FILTERS / 10 MIN
              </span>
              <div className="aspect-[3/4] mt-6 rounded-xl overflow-hidden bg-gradient-to-b from-[#e8ddd5] via-[#f0eae4] to-[#e2d9d0] flex flex-col items-center justify-center gap-2">
                <span className="text-[10px] font-medium uppercase tracking-wider text-ink/50">Before | After</span>
                <div className="flex w-full max-w-[70%] items-center rounded-full bg-black/10 p-1">
                  <div className="h-2 flex-1 rounded-full bg-sage/40" />
                  <div className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-sage shadow-[0_1px_3px_rgba(0,0,0,0.12)]" />
                </div>
              </div>
              <p className="mt-3 text-[11px] text-stone/90 tabular-nums">10 min · same light</p>
            </div>
            {/* Quote — right top */}
            <div className="rounded-2xl border border-black/[0.08] bg-sage/5 p-4 flex flex-col justify-center shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
              <p className="text-sm italic text-ink/90">
                &ldquo;I keep one in my bag. No one has to know.&rdquo;
              </p>
              <p className="mt-2 text-[11px] text-stone">— Real customer</p>
            </div>
            {/* Routine — right bottom */}
            <div className="rounded-2xl border border-black/[0.08] bg-white/70 p-4 flex flex-col justify-center shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
              <p className="text-xs font-medium uppercase tracking-wider text-sage mb-1">Routine</p>
              <p className="text-sm text-ink">Fridge → apply 10 min → remove</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/results"
              className="inline-block text-sage font-medium hover:underline"
            >
              See results →
            </Link>
            <p className="mt-1 text-[11px] text-stone">No filters. Honest lighting.</p>
          </div>
        </div>
      </section>

      <section
        ref={ingredientsRef}
        className="border-b border-black/[0.08] bg-sand/10 px-4 py-8 md:px-6 md:py-10"
      >
        <div className="mx-auto max-w-3xl">
          <SectionRail label="Ingredients" />
          <Panel className="mt-4 text-center px-6 py-6 md:px-8 md:py-8">
          <p className="text-sm text-stone">
            Caffeine · Niacinamide · Hyaluronic acid · Gentle, no harsh actives.
            Safe for sensitive skin. Not a medical product — for cosmetic use only.
          </p>
          <Link href="/ingredients" className="mt-3 inline-block text-sm font-medium text-sage hover:underline">
            Full ingredients & safety →
          </Link>
          </Panel>
        </div>
      </section>

      <section
        ref={bundleRef}
        className="border-b border-black/[0.08] bg-cream/60 px-4 py-8 md:px-6"
      >
        <div className="mx-auto max-w-2xl">
          <SectionRail label="Save more" />
          <div className="mt-4 text-center">
          <p className="text-stone">
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

      {/* Wind-down: calmer background, reduced contrast */}
      <section
        ref={faqRef}
        className="border-b border-black/[0.06] bg-sand/15 px-4 py-12 md:px-6 md:py-16"
      >
        <div className="mx-auto max-w-2xl">
          <SectionRail label="Quick answers" />
          <Panel className="mt-4 px-6 py-8 md:px-8 md:py-12">
            <h2 className="text-center text-2xl font-medium tracking-tight text-ink">
              Quick answers
            </h2>
            <ul className="mt-8 space-y-6">
              {[
                { q: "How long do I leave them on?", a: "About 10 minutes. Keep in the fridge for an extra cooling feel." },
                { q: "Are they okay for sensitive skin?", a: "Yes. We avoid harsh actives. See our full ingredients page for details." },
              ].map(({ q, a }) => (
                <li key={q}>
                  <h3 className="font-medium text-ink">{q}</h3>
                  <p className="mt-1 text-sm text-stone">{a}</p>
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
    </>
  );
}
