"use client";

import Link from "next/link";
import type { Product } from "@/data/products";

export function StickyAddToCart({ product }: { product: Product }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-sand/60 bg-cream/95 backdrop-blur-sm p-4 md:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
        <div>
          <p className="font-medium text-charcoal">{product.name}</p>
          <p className="text-sm text-stone">{product.price}</p>
        </div>
        <Link
          href="/shop#cart"
          className="flex-shrink-0 rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-cream hover:bg-charcoal/90 transition"
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
}
