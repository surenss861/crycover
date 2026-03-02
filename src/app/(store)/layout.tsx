import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageFilm } from "@/components/PageFilm";
import { ShippingBanner } from "@/components/ShippingBanner";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PageFilm />
      <ShippingBanner />
      <Nav />
      <main className="relative min-h-screen bg-surface">{children}</main>
      <Footer />
    </>
  );
}
