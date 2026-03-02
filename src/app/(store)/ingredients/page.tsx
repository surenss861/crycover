import Link from "next/link";
import { Button } from "@/components/Button";

export default function IngredientsPage() {
  return (
    <div className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-medium text-charcoal md:text-4xl">
          Ingredients & safety
        </h1>
        <p className="mt-4 text-stone">
          Full transparency. Cosmetic phrasing only — we don’t make medical claims.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-medium text-charcoal">Full ingredient list</h2>
          <p className="mt-3 text-sm text-stone">
            Aqua, Glycerin, Caffeine, Niacinamide, Sodium Hyaluronate, Aloe Barbadensis Leaf Juice, Panthenol, Allantoin, Xanthan Gum, Phenoxyethanol, Ethylhexylglycerin. Patch material: Hydrogel (non-woven backing).
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-medium text-charcoal">What each does (cosmetic)</h2>
          <ul className="mt-3 space-y-2 text-sm text-stone">
            <li><strong className="text-charcoal">Caffeine</strong> — helps reduce the appearance of puffiness.</li>
            <li><strong className="text-charcoal">Niacinamide</strong> — helps skin look calmer and more even.</li>
            <li><strong className="text-charcoal">Sodium Hyaluronate (HA)</strong> — helps hydrate and support the look of plump, calm skin.</li>
            <li><strong className="text-charcoal">Aloe, Panthenol, Allantoin</strong> — gentle, soothing ingredients that help skin look and feel calm.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-medium text-charcoal">Allergy info</h2>
          <p className="mt-3 text-stone">
            If you have known allergies to any of the ingredients above, avoid use. Do a patch test on inner arm if you’re unsure. Discontinue use if irritation occurs.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-medium text-charcoal">Patch material</h2>
          <p className="mt-3 text-stone">
            Our patches use a hydrogel formulation with a soft, non-woven backing. They’re designed to sit comfortably under the eye and on the upper cheek. Remove gently; do not pull hard on delicate skin.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-medium text-charcoal">Sensitive skin</h2>
          <p className="mt-3 text-stone">
            We formulated without common irritants and kept the ingredient list relatively simple. If you have very sensitive skin, we recommend patch testing first. See our FAQ for more on sensitive skin.
          </p>
        </section>

        <section className="mt-10 rounded-xl border border-sand/60 bg-sand/20 p-6">
          <h2 className="text-lg font-medium text-charcoal">Disclaimer</h2>
          <p className="mt-2 text-sm text-stone">
            Cry Covers are cosmetic products, not medical devices or drugs. They are intended to help reduce the appearance of puffiness and support the look of calmer, hydrated skin. They do not treat, cure, or diagnose any condition. If you have persistent swelling, redness, or eye concerns, please consult a healthcare provider.
          </p>
        </section>

        <div className="mt-14 flex flex-wrap gap-4">
          <Button href="/products/reset-kit">Shop Reset Kit</Button>
          <Button href="/faq" variant="outline">FAQ</Button>
        </div>
      </div>
    </div>
  );
}
