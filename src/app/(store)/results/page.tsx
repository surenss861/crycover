import Link from "next/link";
import { Button } from "@/components/Button";

const filters = [
  { id: "all", label: "All" },
  { id: "puffy", label: "Puffiness" },
  { id: "redness", label: "Redness-looking" },
  { id: "morning-after", label: "Morning after" },
  { id: "sensitive", label: "Sensitive skin" },
];

export default function ResultsPage() {
  return (
    <div className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-medium text-charcoal md:text-4xl">
          Reviews & results
        </h1>
        <p className="mt-4 text-stone">
          Real people, honest lighting. We don’t over-edit — these are the results our community shared.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`rounded-full px-4 py-2 text-sm transition ${
                f.id === "all"
                  ? "bg-charcoal text-cream"
                  : "bg-sand/50 text-charcoal hover:bg-sand"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <p className="mt-6 text-sm text-stone">
          Before/after policy: Honest lighting, no heavy retouching. We want you to see what’s real.
        </p>

        {/* UGC grid — modal-ready: open tile for before/after + time worn + lighting note */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square cursor-pointer rounded-xl bg-mist/30 flex flex-col items-center justify-center gap-1 text-stone text-sm transition hover:ring-2 hover:ring-sage/40"
              data-result-tile
              data-time-worn="10 min"
              data-lighting-note="Same window light, no makeup"
            >
              <span>Before/after</span>
              <span className="text-xs opacity-80">10 min · same light</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/products/reset-kit">Shop Reset Kit</Button>
        </div>
      </div>
    </div>
  );
}
