import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, type ProductHandle } from "@/data/products";
import { Button } from "@/components/Button";
import { StickyAddToCart } from "@/components/StickyAddToCart";

type Props = { params: Promise<{ handle: string }> };

export async function generateStaticParams() {
  return [
    { handle: "reset-kit" },
    { handle: "reset-duo" },
    { handle: "reset-trio" },
  ];
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();

  return (
    <>
      <div className="px-4 pb-24 md:pb-12 md:px-6">
        <div className="mx-auto max-w-5xl">
          {/* Product media */}
          <section className="pt-6 md:pt-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="aspect-[4/5] rounded-2xl bg-mist/30 flex items-center justify-center text-stone">
                [Short demo video + images]
              </div>
              <div>
                {product.badge && (
                  <span className="inline-block rounded-full bg-sage/20 px-2 py-0.5 text-xs font-medium text-sage">
                    {product.badge}
                  </span>
                )}
                <h1 className="mt-2 text-3xl font-medium text-charcoal md:text-4xl">
                  {product.name}
                </h1>
                <p className="mt-3 text-stone">{product.description}</p>

                {/* Price + buy */}
                <div className="mt-6 flex flex-wrap items-baseline gap-2">
                  <span className="text-2xl font-medium text-charcoal">
                    {product.price}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-stone line-through">
                      {product.compareAtPrice}
                    </span>
                  )}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/shop#cart" className="flex-1 min-w-[140px]">
                    Add to cart
                  </Button>
                  <Button href="/finder" variant="outline">
                    Find your fit
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Benefit bullets */}
          <section className="mt-14 border-t border-sand/60 pt-12">
            <h2 className="text-sm font-medium uppercase tracking-wider text-stone">
              Why it works
            </h2>
            <ul className="mt-4 space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex gap-3 text-charcoal">
                  <span className="text-sage">·</span>
                  {b}
                </li>
              ))}
            </ul>
          </section>

          {/* Made for after moments */}
          <section className="mt-14">
            <h2 className="text-sm font-medium uppercase tracking-wider text-stone">
              Made for after moments
            </h2>
            <p className="mt-4 text-lg text-charcoal">{product.story}</p>
            {product.bundleCopy && (
              <p className="mt-2 text-stone">{product.bundleCopy}</p>
            )}
          </section>

          {/* How to use */}
          <section className="mt-14 border-t border-sand/60 pt-12">
            <h2 className="text-sm font-medium uppercase tracking-wider text-stone">
              How to use
            </h2>
            <p className="mt-4 text-charcoal">{product.howToUse}</p>
            <p className="mt-2 text-stone">{product.fridgeTip}</p>
          </section>

          {/* What's inside */}
          <section className="mt-14">
            <h2 className="text-sm font-medium uppercase tracking-wider text-stone">
              What&apos;s inside
            </h2>
            <p className="mt-4 text-charcoal">{product.ingredientsSummary}</p>
            <Link href="/ingredients" className="mt-2 inline-block text-sage font-medium hover:underline">
              Full ingredients & safety →
            </Link>
          </section>

          {/* Reviews + UGC placeholder */}
          <section className="mt-14 border-t border-sand/60 pt-12">
            <h2 className="text-sm font-medium uppercase tracking-wider text-stone">
              Reviews
            </h2>
            <p className="mt-4 text-stone">
              ★★★★★ 4.8 from 200+ reviews. See real results on our Results page.
            </p>
            <Link href="/results" className="mt-2 inline-block text-sage font-medium hover:underline">
              View results →
            </Link>
          </section>

          {/* FAQ (shipping, returns, sensitive skin) */}
          <section className="mt-14">
            <h2 className="text-sm font-medium uppercase tracking-wider text-stone">
              Quick answers
            </h2>
            <ul className="mt-4 space-y-4">
              <li>
                <h3 className="font-medium text-charcoal">Shipping?</h3>
                <p className="mt-1 text-sm text-stone">
                  Free over $50. Usually 3–5 business days. See Shipping page for details.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-charcoal">Returns?</h3>
                <p className="mt-1 text-sm text-stone">
                  Easy returns within 30 days. See Returns page.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-charcoal">Sensitive skin?</h3>
                <p className="mt-1 text-sm text-stone">
                  Gentle formula. Full ingredient list and patch material on Ingredients page.
                </p>
              </li>
            </ul>
            <Link href="/faq" className="mt-4 inline-block text-sage font-medium hover:underline">
              Full FAQ →
            </Link>
          </section>

          {/* Trust + policies */}
          <section className="mt-14 border-t border-sand/60 pt-12 flex flex-wrap gap-6 text-sm text-stone">
            <Link href="/shipping" className="hover:text-charcoal">Shipping</Link>
            <Link href="/returns" className="hover:text-charcoal">Returns</Link>
            <Link href="/ingredients" className="hover:text-charcoal">Ingredients</Link>
            <span>Not a medical product. Cosmetic use only.</span>
          </section>
        </div>
      </div>

      <StickyAddToCart product={product} />
    </>
  );
}
