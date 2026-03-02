import Link from "next/link";

const shopLinks = [
  { href: "/shop", label: "Shop All" },
  { href: "/products/reset-kit", label: "Reset Kit" },
  { href: "/products/reset-duo", label: "Reset Duo" },
  { href: "/products/reset-trio", label: "Reset Trio" },
];

const infoLinks = [
  { href: "/about", label: "About" },
  { href: "/ingredients", label: "Ingredients & Safety" },
  { href: "/results", label: "Results" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

const legalLinks = [
  { href: "/shipping", label: "Shipping" },
  { href: "/returns", label: "Returns" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/accessibility", label: "Accessibility" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-sand/30">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <p className="text-[12px] text-ink/45 mb-8">
          Gentle care — no explanation needed.
        </p>
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link href="/" className="text-lg font-medium text-charcoal">
              Cry Covers
            </Link>
            <p className="mt-2 text-sm text-stone">
              A 10-minute reset for after emotional moments.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-stone">
              Shop
            </h3>
            <ul className="mt-3 space-y-2">
              {shopLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-charcoal hover:text-stone transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-stone">
              Info
            </h3>
            <ul className="mt-3 space-y-2">
              {infoLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-charcoal hover:text-stone transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-stone">
              Policies
            </h3>
            <ul className="mt-3 space-y-2">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-charcoal hover:text-stone transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-sand/60 pt-6 text-center text-sm text-stone">
          © {new Date().getFullYear()} Cry Covers. Not a medical product.
        </div>
      </div>
    </footer>
  );
}
