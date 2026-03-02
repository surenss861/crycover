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
          <Panel className="mt-4 px-8 py-12">
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
      <section className="border-b border-black/[0.08] bg-cream/70 px-4 py-6 md:px-6 md:py-8">
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
          <Panel className="mt-4 px-8 py-12">
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
      <section className="border-b border-black/[0.08] bg-sand/10 px-4 py-6 md:px-6 md:py-8">
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
          <h2 className="mt-3 text-center text-2xl font-medium tracking-tight text-ink md:text-3xl">
            Real results
          </h2>
          <p className="mx-auto mt-1 max-w-xl text-center text-sm text-stone">
            Honest lighting. Real moments.
          </p>

          {/* Proof gallery: 3-col / 2-row mosaic, photo frames + slider rail */}
          <div className="mt-8 grid gap-6 md:grid-cols-3 md:grid-rows-2">
            {/* BA 1 — tall, photo frame */}
            <div className="relative rounded-3xl border border-black/5 bg-white/55 p-5 shadow-panel md:row-span-2">
              <div className="absolute left-4 top-4 text-[8px] tracking-[0.2em] uppercase text-ink/60">
                SAME LIGHT / NO FILTERS / 10 MIN
              </div>
              <div className="mt-8 rounded-2xl border border-black/5 bg-gradient-to-b from-[#e8ddd5] via-[#f0eae4] to-[#e2d9d0] h-[420px]" />
              <div className="mt-4 text-center text-[10px] tracking-[0.2em] uppercase text-ink/40">
                BEFORE | AFTER
              </div>
              <div className="mt-2 mx-auto w-[70%] h-2 rounded-full bg-black/10 relative">
                <div className="absolute left-0 top-0 h-2 w-1/2 rounded-full bg-sage/40" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white border border-black/10 shadow-[0_1px_3px_rgba(0,0,0,0.12)]" />
              </div>
              <p className="mt-3 text-[11px] tabular-nums text-stone-600">10 min · same light</p>
            </div>
            {/* BA 2 — tall */}
            <div className="relative rounded-3xl border border-black/5 bg-white/55 p-5 shadow-panel md:row-span-2">
              <div className="absolute left-4 top-4 text-[8px] tracking-[0.2em] uppercase text-ink/60">
                SAME LIGHT / NO FILTERS / 10 MIN
              </div>
              <div className="mt-8 rounded-2xl border border-black/5 bg-gradient-to-b from-[#e8ddd5] via-[#f0eae4] to-[#e2d9d0] h-[420px]" />
              <div className="mt-4 text-center text-[10px] tracking-[0.2em] uppercase text-ink/40">
                BEFORE | AFTER
              </div>
              <div className="mt-2 mx-auto w-[70%] h-2 rounded-full bg-black/10 relative">
                <div className="absolute left-0 top-0 h-2 w-1/2 rounded-full bg-sage/40" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white border border-black/10 shadow-[0_1px_3px_rgba(0,0,0,0.12)]" />
              </div>
              <p className="mt-3 text-[11px] tabular-nums text-stone-600">10 min · same light</p>
            </div>
            {/* Quote — human proof, slight sage */}
            <div className="rounded-3xl border border-black/5 bg-sage/5 p-5 flex flex-col justify-center shadow-panel">
              <p className="text-sm italic text-ink/90">
                &ldquo;I keep one in my bag. No one has to know.&rdquo;
              </p>
              <p className="mt-2 text-[11px] text-stone">— Real customer</p>
            </div>
            {/* Routine */}
            <div className="rounded-3xl border border-black/5 bg-white/55 p-5 flex flex-col justify-center shadow-panel">
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
          <Panel className="mt-4 text-center px-8 py-8">
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
        className="border-b border-black/[0.08] bg-cream/60 px-4 py-8 md:px-6 md:py-8"
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
          <Panel className="mt-4 px-8 py-12">
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
