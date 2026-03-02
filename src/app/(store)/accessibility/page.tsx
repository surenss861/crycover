import Link from "next/link";

export default function AccessibilityPage() {
  return (
    <div className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-medium text-charcoal md:text-4xl">
          Accessibility
        </h1>
        <p className="mt-4 text-stone">
          We’re committed to making Cry Covers’ website usable for everyone.
        </p>
        <div className="mt-10 space-y-6 text-stone">
          <p>
            We aim to meet WCAG 2.1 Level AA where possible: readable contrast, keyboard navigation, clear focus states, and sensible structure and labels. If you run into barriers, we want to hear about it so we can improve.
          </p>
          <p>
            For accessibility feedback or requests, please contact us via the Support page. We’ll respond within a few business days.
          </p>
        </div>
        <div className="mt-10">
          <Link href="/support" className="text-sage font-medium hover:underline">
            Contact support →
          </Link>
        </div>
      </div>
    </div>
  );
}
