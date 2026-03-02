import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-medium text-charcoal md:text-4xl">
          Privacy policy
        </h1>
        <p className="mt-4 text-sm text-stone">
          Last updated: {new Date().toLocaleDateString("en-US")}
        </p>
        <div className="mt-10 space-y-6 text-stone">
          <p>
            This is a placeholder. Your privacy policy should cover: what data you collect (email, order info, usage), how you use it (fulfillment, marketing if consented, analytics), who you share it with (processors, no sale of data), how long you keep it, and user rights (access, delete, opt-out of marketing). Consider consulting a lawyer for your final policy.
          </p>
          <p>
            We respect your privacy. We do not sell your personal information. You can unsubscribe from marketing at any time and request deletion of your data by contacting us.
          </p>
        </div>
        <div className="mt-10">
          <Link href="/support" className="text-sage font-medium hover:underline">
            Contact us →
          </Link>
        </div>
      </div>
    </div>
  );
}
