import Link from "next/link";
import { Button } from "@/components/Button";

export default function AboutPage() {
  return (
    <div className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-medium text-charcoal md:text-4xl">
          About Cry Covers
        </h1>
        <p className="mt-6 text-lg text-stone">
          We exist because emotional moments are part of being human — and sometimes they show up on your face. Not as something to hide, but as something to care for.
        </p>
        <p className="mt-4 text-stone">
          Cry Covers are under-eye + upper cheek patches made for after those moments. A 10-minute reset. No shame, no explanation needed. Just gentle care when feelings show.
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-medium text-charcoal">Our mission</h2>
          <p className="mt-3 text-stone">
            To normalize the moment and give people a small, kind ritual. Not “fix” or “hide” — reset. So you can show up as yourself, even when the day is heavy.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-medium text-charcoal">Quality & manufacturing</h2>
          <p className="mt-3 text-stone">
            We work with manufacturers who meet our standards for safety and quality. Our formula is designed to be gentle: caffeine for the appearance of puffiness, niacinamide for the look of calmer skin, hyaluronic acid for hydration. No harsh actives. We share our full ingredient list and patch material info so you know exactly what you’re putting on your skin.
          </p>
          <Link href="/ingredients" className="mt-2 inline-block text-sage font-medium hover:underline">
            Full ingredients & safety →
          </Link>
        </section>

        <div className="mt-14">
          <Button href="/products/reset-kit">Shop Reset Kit</Button>
        </div>
      </div>
    </div>
  );
}
