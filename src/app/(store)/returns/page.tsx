import Link from "next/link";
import { Button } from "@/components/Button";

export default function ReturnsPage() {
  return (
    <div className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-medium text-charcoal md:text-4xl">
          Returns
        </h1>
        <p className="mt-4 text-stone">
          We want you to be happy. Easy returns within 30 days.
        </p>
        <ul className="mt-8 space-y-4 text-stone">
          <li>
            <strong className="text-charcoal">Window:</strong> 30 days from delivery.
          </li>
          <li>
            <strong className="text-charcoal">Condition:</strong> Unused, unopened items in original packaging for full refund. Gently used may be accepted for partial store credit — contact us.
          </li>
          <li>
            <strong className="text-charcoal">Process:</strong> Go to Support → Start a return. We’ll send you a prepaid label and instructions.
          </li>
          <li>
            <strong className="text-charcoal">Refund:</strong> Once we receive the return, refunds are processed within 5–7 business days to your original payment method.
          </li>
        </ul>
        <div className="mt-10">
          <Button href="/support">Start a return</Button>
        </div>
      </div>
    </div>
  );
}
