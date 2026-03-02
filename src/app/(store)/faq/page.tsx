import Link from "next/link";
import { Button } from "@/components/Button";

const faqs: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "Product & use",
    items: [
      {
        q: "How long do I leave the patches on?",
        a: "About 10 minutes. You can leave them on a bit longer if you like; they’re gentle.",
      },
      {
        q: "Can I use them more than once?",
        a: "Each patch is single-use. We recommend one pair per session for best results.",
      },
      {
        q: "Should I keep them in the fridge?",
        a: "Optional but nice — the cooling feel can make the reset even more soothing.",
      },
    ],
  },
  {
    category: "Skin sensitivity",
    items: [
      {
        q: "Are they safe for sensitive skin?",
        a: "We formulated to be gentle and avoid common irritants. See our full Ingredients page. If you’re unsure, patch test on your inner arm first.",
      },
      {
        q: "What if I get irritation?",
        a: "Discontinue use and contact us. We’re happy to help with returns if it’s not a fit.",
      },
    ],
  },
  {
    category: "Shipping",
    items: [
      {
        q: "How long does shipping take?",
        a: "Usually 3–5 business days in the US. See our Shipping page for details and international options.",
      },
      {
        q: "Do you ship internationally?",
        a: "We’re starting in the US and expanding. Sign up for our list to hear when we ship to your country.",
      },
    ],
  },
  {
    category: "Returns",
    items: [
      {
        q: "What’s your return policy?",
        a: "Easy returns within 30 days. See our Returns page for the full process.",
      },
    ],
  },
  {
    category: "Subscriptions",
    items: [
      {
        q: "Do you offer subscriptions?",
        a: "We may add a subscription option later. For now, you can order one-off or bundles.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-medium text-charcoal md:text-4xl">
          FAQ
        </h1>
        <p className="mt-4 text-stone">
          Quick answers to product, skin, shipping, and returns.
        </p>

        <div className="mt-10 space-y-12">
          {faqs.map(({ category, items }) => (
            <section key={category}>
              <h2 className="text-lg font-medium text-charcoal">{category}</h2>
              <ul className="mt-4 space-y-6">
                {items.map(({ q, a }) => (
                  <li key={q}>
                    <h3 className="font-medium text-charcoal">{q}</h3>
                    <p className="mt-1 text-stone">{a}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Button href="/support">Contact support</Button>
          <Button href="/products/reset-kit" variant="outline">Shop Reset Kit</Button>
        </div>
      </div>
    </div>
  );
}
