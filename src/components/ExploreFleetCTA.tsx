import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExploreFleetCTA() {
  return (
    <section className="relative z-40 w-full bg-[#050505] py-32 flex flex-col items-center justify-center text-center border-t border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase text-white mb-6">
        View Full Inventory
      </h2>
      <p className="text-gray-400 max-w-2xl text-lg md:text-xl mb-12 px-4">
        Our complete inventory extends beyond what is featured here. Browse our full selection of imported luxury and performance vehicles.
      </p>
      <Link 
        href="/cars"
        className="flex items-center space-x-3 bg-[var(--color-gold)] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white transition-colors group"
      >
        <span>Explore All Cars</span>
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </section>
  );
}
