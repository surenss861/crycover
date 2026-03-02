"use client";

import { Button } from "@/components/Button";

export function ContactForm() {
  return (
    <form
      className="mt-4 space-y-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email"
        className="w-full rounded-xl border border-sand px-4 py-3 text-charcoal placeholder:text-mist bg-cream"
      />
      <select className="w-full rounded-xl border border-sand px-4 py-3 text-charcoal bg-cream">
        <option>Order question</option>
        <option>Returns</option>
        <option>Product question</option>
        <option>Other</option>
      </select>
      <textarea
        placeholder="Your message"
        rows={4}
        className="w-full rounded-xl border border-sand px-4 py-3 text-charcoal placeholder:text-mist resize-none bg-cream"
      />
      <Button type="submit">Send message</Button>
    </form>
  );
}
