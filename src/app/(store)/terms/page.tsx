import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-medium text-charcoal md:text-4xl">
          Terms of service
        </h1>
        <p className="mt-4 text-sm text-stone">
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>
        <div className="mt-10 space-y-6 text-stone">
          <p>
            This is a placeholder. Your terms should cover: use of the site and services, account obligations, orders and payment, shipping and returns (or link to those pages), intellectual property, disclaimers (cosmetic products, not medical), limitation of liability, and governing law. Consult a lawyer for your final terms.
          </p>
          <p>
            By using Cry Covers and this website, you agree to these terms. Our products are cosmetics and are not intended to diagnose, treat, or cure any condition.
          </p>
        </div>
        <div className="mt-10">
          <Link href="/support" className="text-sage font-medium hover:underline">
            Contact us →
          </Link>
        </div>
      </div>
    </div>
  );
}
