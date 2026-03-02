import Link from "next/link";
import { Button } from "@/components/Button";

export default function ShippingPage() {
  return (
    <div className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-medium text-charcoal md:text-4xl">
          Shipping
        </h1>
        <p className="mt-4 text-stone">
          We ship within the US. Here’s what to expect.
        </p>
        <ul className="mt-8 space-y-4 text-stone">
          <li>
            <strong className="text-charcoal">Processing:</strong> Orders typically ship within 1–2 business days.
          </li>
          <li>
            <strong className="text-charcoal">Delivery:</strong> 3–5 business days after shipment (US).
          </li>
          <li>
            <strong className="text-charcoal">Free shipping:</strong> On orders over $50.
          </li>
          <li>
            <strong className="text-charcoal">Tracking:</strong> You’ll receive an email with a tracking link when your order ships.
          </li>
        </ul>
        <p className="mt-6 text-stone">
          International shipping may be added later. Sign up for our list to be notified.
        </p>
        <div className="mt-10">
          <Button href="/support">Contact support</Button>
        </div>
      </div>
    </div>
  );
}
