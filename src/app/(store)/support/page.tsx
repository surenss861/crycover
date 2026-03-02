import Link from "next/link";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";

export default function SupportPage() {
  return (
    <div className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-medium text-charcoal md:text-4xl">
          Support
        </h1>
        <p className="mt-4 text-stone">
          Track your order, start a return, or get in touch.
        </p>

        <div className="mt-10 space-y-8">
          <section className="rounded-xl border border-sand/60 p-6">
            <h2 className="text-lg font-medium text-charcoal">Track order</h2>
            <p className="mt-2 text-stone">
              Check your email for a tracking link after your order ships. Lost it? Use the link below.
            </p>
            <button type="button" className="mt-4 rounded-full border-2 border-charcoal px-6 py-3 text-sm font-medium text-charcoal hover:bg-charcoal hover:text-cream transition">
              Track order (placeholder)
            </button>
          </section>

          <section className="rounded-xl border border-sand/60 p-6">
            <h2 className="text-lg font-medium text-charcoal">Returns</h2>
            <p className="mt-2 text-stone">
              Easy returns within 30 days. See our Returns page for the process, then use the form below to start a return.
            </p>
            <Link href="/returns" className="mt-2 inline-block text-sage font-medium hover:underline">
              Returns policy →
            </Link>
            <button type="button" className="mt-4 rounded-full border-2 border-charcoal px-6 py-3 text-sm font-medium text-charcoal hover:bg-charcoal hover:text-cream transition">
              Start return (placeholder)
            </button>
          </section>

          <section className="rounded-xl border border-sand/60 p-6">
            <h2 className="text-lg font-medium text-charcoal">Shipping times</h2>
            <p className="mt-2 text-stone">
              US: typically 3–5 business days after shipment. See Shipping for full details.
            </p>
            <Link href="/shipping" className="mt-2 inline-block text-sage font-medium hover:underline">
              Shipping info →
            </Link>
          </section>

          <section className="rounded-xl border border-sand/60 p-6">
            <h2 className="text-lg font-medium text-charcoal">Contact us</h2>
            <p className="mt-2 text-stone">
              Something else? Send us a message and we’ll get back within 1–2 business days.
            </p>
            <ContactForm />
          </section>

          <section className="rounded-xl border border-sand/60 p-6">
            <h2 className="text-lg font-medium text-charcoal">Wholesale</h2>
            <p className="mt-2 text-stone">
              Interested in carrying Cry Covers? Get in touch for wholesale inquiries.
            </p>
            <a href="mailto:wholesale@crycovers.com" className="mt-2 inline-block text-sage font-medium hover:underline">
              wholesale@crycovers.com
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
