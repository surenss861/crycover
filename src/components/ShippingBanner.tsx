"use client";

import Link from "next/link";

export function ShippingBanner() {
  return (
    <div className="border-b border-black/[0.06] bg-surface px-4 py-2 text-center text-[12px] text-ink/80">
      <Link href="/shipping" className="hover:text-ink underline-offset-2 hover:underline">
        Free shipping $50+
      </Link>
      <span className="mx-2 text-ink/40">·</span>
      <Link href="/returns" className="hover:text-ink underline-offset-2 hover:underline">
        30-day returns
      </Link>
    </div>
  );
}
