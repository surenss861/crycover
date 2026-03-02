import Link from "next/link";
import { Button } from "@/components/Button";

const products = [
  {
    handle: "reset-kit",
    name: "Reset Kit",
    description: "6 patches · Your go-to for after emotional moments",
    price: "$24",
    image: null,
  },
  {
    handle: "reset-duo",
    name: "Reset Duo",
    description: "2 kits · Keep one at home, one in your bag",
    price: "$44",
    badge: "Save 10%",
  },
  {
    handle: "reset-trio",
    name: "Reset Trio",
    description: "3 kits · Never without a reset",
    price: "$62",
    badge: "Save 15%",
  },
];

export default function ShopPage() {
  return (
    <div className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-medium text-charcoal md:text-4xl">Shop</h1>
        <p className="mt-2 text-stone">
          Simple selection. One flagship kit, bundles, and refills.
        </p>

        <section className="mt-12" id="reset-kit">
          <h2 className="text-sm font-medium uppercase tracking-wider text-stone">
            Flagship
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard product={products[0]} />
          </div>
        </section>

        <section className="mt-14" id="bundles">
          <h2 className="text-sm font-medium uppercase tracking-wider text-stone">
            Bundles
          </h2>
          <p className="mt-1 text-sm text-stone">
            Save when you stock up. Keep one at home, one in your bag.
          </p>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <ProductCard product={products[1]} />
            <ProductCard product={products[2]} />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-sm font-medium uppercase tracking-wider text-stone">
            Coming soon
          </h2>
          <p className="mt-2 text-stone">
            Heavy Day · Morning After · Refill packs
          </p>
        </section>
      </div>
    </div>
  );
}

function ProductCard({
  product,
}: {
  product: (typeof products)[0];
}) {
  return (
    <Link
      href={`/products/${product.handle}`}
      className="group block rounded-2xl border border-sand/60 bg-cream p-6 transition hover:border-stone/40"
    >
      <div className="aspect-[4/5] rounded-xl bg-mist/30 mb-4 flex items-center justify-center text-stone text-sm">
        Product image
      </div>
      {product.badge && (
        <span className="inline-block rounded-full bg-sage/20 px-2 py-0.5 text-xs font-medium text-sage">
          {product.badge}
        </span>
      )}
      <h3 className="mt-2 text-lg font-medium text-charcoal group-hover:underline">
        {product.name}
      </h3>
      <p className="mt-1 text-sm text-stone">{product.description}</p>
      <p className="mt-3 text-lg font-medium text-charcoal">{product.price}</p>
      <Button
        href={`/products/${product.handle}`}
        variant="outline"
        className="mt-4 w-full"
      >
        View
      </Button>
    </Link>
  );
}
