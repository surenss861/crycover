"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";

const whenOptions = [
  { id: "work", label: "Work / stress" },
  { id: "relationship", label: "Relationship" },
  { id: "overwhelm", label: "Overwhelm" },
  { id: "grief", label: "Grief" },
  { id: "hormones", label: "Hormones / cycle" },
  { id: "morning-after", label: "Morning after (sleep / tears)" },
];

const puffOptions = [
  { id: "light", label: "Light" },
  { id: "medium", label: "Medium" },
  { id: "heavy", label: "Heavy" },
];

export default function FinderPage() {
  const [step, setStep] = useState(1);
  const [when, setWhen] = useState<string | null>(null);
  const [puff, setPuff] = useState<string | null>(null);
  const [sensitive, setSensitive] = useState<boolean | null>(null);

  const totalSteps = 3;
  const isComplete = when && puff !== null && sensitive !== null;

  return (
    <div className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-xl">
        <h1 className="text-2xl font-medium text-charcoal md:text-3xl">
          Find your reset
        </h1>
        <p className="mt-2 text-stone">
          Quick questions so we can recommend the right product and routine.
        </p>

        {/* Progress */}
        <div className="mt-8 flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full ${
                s <= step ? "bg-sage" : "bg-sand"
              }`}
            />
          ))}
        </div>

        {/* Step 1: When do you need a reset? */}
        {step === 1 && (
          <div className="mt-10">
            <h2 className="text-lg font-medium text-charcoal">
              When do you need a reset?
            </h2>
            <div className="mt-4 grid gap-2">
              {whenOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setWhen(opt.id);
                    setStep(2);
                  }}
                  className={`rounded-xl border px-4 py-3 text-left transition ${
                    when === opt.id
                      ? "border-sage bg-sage/10 text-charcoal"
                      : "border-sand bg-cream text-charcoal hover:border-stone/50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: How puffy does it get? */}
        {step === 2 && (
          <div className="mt-10">
            <h2 className="text-lg font-medium text-charcoal">
              How puffy does it get?
            </h2>
            <div className="mt-4 grid gap-2">
              {puffOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setPuff(opt.id);
                    setStep(3);
                  }}
                  className={`rounded-xl border px-4 py-3 text-left transition ${
                    puff === opt.id
                      ? "border-sage bg-sage/10 text-charcoal"
                      : "border-sand bg-cream text-charcoal hover:border-stone/50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-6 text-sm text-stone hover:text-charcoal"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 3: Skin sensitivity? */}
        {step === 3 && (
          <div className="mt-10">
            <h2 className="text-lg font-medium text-charcoal">
              Sensitive skin?
            </h2>
            <div className="mt-4 flex gap-4">
              <button
                type="button"
                onClick={() => setSensitive(true)}
                className={`flex-1 rounded-xl border px-4 py-3 transition ${
                  sensitive === true
                    ? "border-sage bg-sage/10 text-charcoal"
                    : "border-sand bg-cream text-charcoal hover:border-stone/50"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => setSensitive(false)}
                className={`flex-1 rounded-xl border px-4 py-3 transition ${
                  sensitive === false
                    ? "border-sage bg-sage/10 text-charcoal"
                    : "border-sand bg-cream text-charcoal hover:border-stone/50"
                }`}
              >
                No
              </button>
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="mt-6 text-sm text-stone hover:text-charcoal"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Result + CTA */}
        {isComplete && (
          <div className="mt-12 rounded-2xl border border-sand/60 bg-sand/20 p-6">
            <h2 className="text-lg font-medium text-charcoal">
              Your reset plan
            </h2>
            <p className="mt-2 text-stone">
              We recommend the <strong className="text-charcoal">Reset Kit</strong> to start.
              Apply under eyes and on upper cheek for about 10 minutes. Keep in the fridge for an extra cooling feel.
            </p>
            {sensitive && (
              <p className="mt-2 text-sm text-stone">
                Our formula is gentle and free of common irritants. See our Ingredients page for the full list.
              </p>
            )}
            <div className="mt-6 flex flex-wrap gap-4">
              <Button href="/products/reset-kit">Shop Reset Kit</Button>
              <Button href="/shop" variant="outline">
                See all options
              </Button>
            </div>
            <div className="mt-6 border-t border-sand/60 pt-6">
              <p className="text-sm text-stone">
                Want your reset plan sent to you?
              </p>
              <form className="mt-2 flex flex-wrap gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-full border border-sand px-4 py-2 text-sm text-charcoal placeholder:text-mist flex-1 min-w-[180px]"
                />
                <button
                  type="submit"
                  className="rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-cream hover:bg-charcoal/90"
                >
                  Send my reset plan
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
