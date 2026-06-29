import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import ExploreFleetCTA from "@/components/ExploreFleetCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-[var(--color-gold)] selection:text-black">
      <HeroSection />
      <ProductShowcase />
      <ExploreFleetCTA />
      <Footer />
    </main>
  );
}
