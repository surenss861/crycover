"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/finder", label: "Finder" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled ? "border-black/8 bg-cream shadow-sm" : "border-sand/60 bg-cream/90 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-xl font-medium tracking-tight text-charcoal">
          Cry Covers
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-stone hover:text-charcoal transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            href="/products/reset-kit"
            className="hidden rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-cream transition hover:bg-charcoal/90 sm:inline-block"
          >
            Shop Reset Kit
          </Link>
          <Link
            href="/shop#cart"
            className="relative rounded-full p-2 text-charcoal hover:bg-sand/50 transition"
            aria-label="Cart (0 items)"
          >
            <CartIcon />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-charcoal text-[10px] font-medium text-cream">
              0
            </span>
          </Link>
          <button
            type="button"
            className="rounded p-2 md:hidden text-charcoal"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-sand/60 bg-cream px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block text-charcoal"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/finder"
                className="block text-charcoal"
                onClick={() => setOpen(false)}
              >
                Finder
              </Link>
            </li>
            <li>
              <Link
                href="/products/reset-kit"
                className="block rounded-full bg-charcoal px-4 py-2 text-center text-sm font-medium text-cream w-fit"
                onClick={() => setOpen(false)}
              >
                Shop Reset Kit
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
