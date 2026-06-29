"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { X, ChevronRight } from "lucide-react";
import clsx from "clsx";
import Footer from "@/components/Footer";

const filters = ["All", "Supercars", "Luxury SUVs", "Electric"];

const fleet = [
  {
    id: 1,
    name: "Mercedes-AMG GT",
    category: "Supercars",
    hp: "577 HP",
    acceleration: "3.1s",
    drivetrain: "RWD",
    price: "$177,000",
    image: "/cars/car-1.png",
  },
  {
    id: 2,
    name: "BMW M8 Competition",
    category: "Supercars",
    hp: "617 HP",
    acceleration: "3.0s",
    drivetrain: "AWD",
    price: "$138,800",
    image: "/cars/car-2.png",
  },
  {
    id: 3,
    name: "Porsche 911 Turbo S",
    category: "Supercars",
    hp: "640 HP",
    acceleration: "2.6s",
    drivetrain: "AWD",
    price: "$230,400",
    image: "/cars/car-3.png",
  },
  {
    id: 4,
    name: "Audi RS e-tron GT",
    category: "Electric",
    hp: "637 HP",
    acceleration: "2.9s",
    drivetrain: "AWD",
    price: "$147,100",
    image: "/cars/car-4.png",
  },
  {
    id: 5,
    name: "Tesla Roadster",
    category: "Electric",
    hp: "1000+ HP",
    acceleration: "1.9s",
    drivetrain: "AWD",
    price: "$250,000",
    image: "/cars/car-5.png",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20 } },
};

export default function CarsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCar, setSelectedCar] = useState<typeof fleet[0] | null>(null);
  const [isSent, setIsSent] = useState(false);

  const filteredFleet = fleet.filter((car) => activeFilter === "All" || car.category === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setSelectedCar(null);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-black text-white pt-32 selection:bg-[var(--color-gold)] selection:text-black flex flex-col">
      <div className="container mx-auto px-8 flex-grow pb-24">
        
        {/* Header & Quick Filters */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-6xl font-bold tracking-tighter uppercase text-white mb-4"
            >
              Available <span className="text-[var(--color-gold)]">Inventory</span>
            </motion.h1>
            <p className="text-gray-400 max-w-md text-lg">Browse our current selection of imported luxury and performance vehicles. All vehicles are inspected and ready for delivery.</p>
          </div>

          <div className="flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={clsx(
                  "relative px-6 py-2 text-sm font-medium transition-colors whitespace-nowrap uppercase tracking-widest",
                  activeFilter === filter ? "text-black" : "text-gray-500 hover:text-white"
                )}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-[var(--color-gold)] rounded-sm -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Showroom Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          key={activeFilter} // Re-trigger animation on filter change
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredFleet.map((car) => (
            <motion.div
              key={car.id}
              variants={itemVariants}
              className="group bg-zinc-950 border border-white/5 rounded-none p-6 hover:border-[var(--color-gold)]/50 transition-colors duration-500 flex flex-col relative overflow-hidden"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative w-full h-64 mb-6 flex items-center justify-center mix-blend-screen drop-shadow-2xl">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 relative z-10">
                <div className="flex flex-col mb-6">
                  <p className="text-xs text-[var(--color-gold)] font-bold uppercase tracking-widest mb-1">{car.category}</p>
                  <h3 className="text-2xl font-bold text-white tracking-tight uppercase">{car.name}</h3>
                  <span className="text-gray-300 font-light text-xl mt-2">{car.price}</span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-8 border-t border-b border-white/10 py-4">
                  <div className="text-center">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Power</p>
                    <p className="text-sm font-semibold text-white">{car.hp}</p>
                  </div>
                  <div className="text-center border-l border-r border-white/10">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">0-60 mph</p>
                    <p className="text-sm font-semibold text-white">{car.acceleration}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Drive</p>
                    <p className="text-sm font-semibold text-white">{car.drivetrain}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedCar(car)}
                className="w-full py-4 border border-white/20 text-white font-bold uppercase tracking-widest transition-all hover:bg-white hover:text-black flex items-center justify-center space-x-2 relative z-10"
              >
                <span>Inquire</span>
                <ChevronRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Slide-out Contact Panel */}
      <AnimatePresence>
        {selectedCar && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCar(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[150]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[500px] bg-zinc-950 border-l border-white/10 z-[200] shadow-2xl p-8 overflow-y-auto"
            >
              <button
                onClick={() => setSelectedCar(null)}
                className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h2 className="text-3xl font-bold text-white uppercase tracking-tighter mb-2">Vehicle Inquiry</h2>
              <p className="text-gray-400 text-sm mb-10">Our sales team will contact you shortly regarding the {selectedCar.name}.</p>

              <div className="bg-white/5 border border-white/10 p-6 flex flex-col items-center mb-10">
                <div className="relative w-full h-32 mb-4 mix-blend-screen drop-shadow-xl">
                  <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-full object-contain" />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-white uppercase tracking-widest text-lg">{selectedCar.name}</h4>
                  <p className="text-[var(--color-gold)] font-medium mt-1">{selectedCar.price}</p>
                </div>
              </div>

              {isSent ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="text-[var(--color-gold)] text-xl font-bold uppercase mb-2">Inquiry Sent</div>
                  <p className="text-gray-400">We will be in touch shortly.</p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input required type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                    <input required type="tel" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" />
                  </div>
                  <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest transition-all hover:bg-[var(--color-gold)] mt-8">
                    Submit Inquiry
                  </button>
                </form>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
