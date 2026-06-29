"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Check } from "lucide-react";
import clsx from "clsx";

// Types
type CarColor = {
  name: string;
  hex: string;
  image: string; // The specific image for this color variation
};

type Car = {
  id: number;
  name: string;
  tagline: string;
  price: string;
  accent: string;
  features: string[];
  colors: CarColor[];
};

const carsData: Car[] = [
  {
    id: 1,
    name: "Mercedes-AMG GT",
    tagline: "The Pinnacle of German Engineering",
    price: "₦265,500,000",
    accent: "text-[var(--color-gold)]",
    features: ["Handcrafted AMG 4.0L V8", "0-60mph in 3.1s", "Active Rear-Axle Steering", "AMG Performance Seats"],
    colors: [
      { name: "Obsidian Black", hex: "#0a0a0a", image: "/cars/car-1.png" },
      // Note: Using the same image as a placeholder. Replace with actual colored image paths when available!
      { name: "Selenite Grey", hex: "#e2e8f0", image: "/cars/car-1.png" } 
    ]
  },
  {
    id: 2,
    name: "BMW M8 Competition",
    tagline: "Uncompromised M Power",
    price: "₦208,200,000",
    accent: "text-gray-300",
    features: ["617 Horsepower V8", "M xDrive All-Wheel Drive", "Carbon Fiber Roof", "Merino Leather Interior"],
    colors: [
      { name: "Motegi Red", hex: "#7f1d1d", image: "/cars/car-2.png" },
      { name: "Black Sapphire", hex: "#171717", image: "/cars/car-2.png" },
      { name: "Brands Hatch Grey", hex: "#737373", image: "/cars/car-2.png" }
    ]
  },
  {
    id: 3,
    name: "Porsche 911 Turbo S",
    tagline: "Relentless Performance",
    price: "₦345,600,000",
    accent: "text-[var(--color-gold)]",
    features: ["0-60mph in 2.6s", "Porsche Active Aerodynamics", "Ceramic Composite Brakes", "Sport Chrono Package"],
    colors: [
      { name: "Agate Grey", hex: "#525252", image: "/cars/car-3.png" },
      { name: "Jet Black", hex: "#000000", image: "/cars/car-3.png" }
    ]
  },
  {
    id: 4,
    name: "Audi RS e-tron GT",
    tagline: "The Future of Grand Touring",
    price: "₦220,650,000",
    accent: "text-stone-300",
    features: ["Fully Electric Dual Motor", "637 Horsepower", "Matrix-design LED Headlights", "Carbon Fiber Details"],
    colors: [
      { name: "Ascari Blue", hex: "#1e3a8a", image: "/cars/car-4.png" },
      { name: "Suzuka Gray", hex: "#f8fafc", image: "/cars/car-4.png" }
    ]
  },
  {
    id: 5,
    name: "Tesla Roadster",
    tagline: "Breaking All Records",
    price: "₦375,000,000",
    accent: "text-[var(--color-gold)]",
    features: ["0-60mph in 1.9s", "620 Mile Range", "SpaceX Thruster Package", "Removable Glass Roof"],
    colors: [
      { name: "Signature Red", hex: "#ca0404", image: "/cars/car-5.png" },
      { name: "Solid Black", hex: "#000000", image: "/cars/car-5.png" },
      { name: "Pearl White", hex: "#ffffff", image: "/cars/car-5.png" }
    ]
  }
];

// Extracted into a sub-component so each car can maintain its own active color state
function CarBlock({ car, index, onReserve }: { car: Car; index: number; onReserve: (car: string, color: string) => void }) {
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const activeColor = car.colors[activeColorIdx];

  return (
    <div
      className={clsx(
        "relative lg:sticky lg:top-0 w-full min-h-screen flex flex-col md:flex-row items-center overflow-hidden border-t border-white/10 shadow-2xl bg-black text-white"
      )}
      style={{ zIndex: index + 1 }} // Keep stacking context low so Navbar (z-50) stays on top
    >
      {/* Left Side - Massive Car Image */}
      <div className="w-full md:w-3/5 h-[50vh] md:h-screen relative flex items-center justify-center p-8 md:p-20">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={activeColor.image}
            alt={`${car.name} in ${activeColor.name}`}
            // blend-screen forces the black background of the image to become 100% transparent
            className="relative z-10 w-full max-w-4xl object-contain drop-shadow-2xl mix-blend-screen"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/800x400/111/fff?text=Transparent+Car+PNG+Here";
            }}
          />
      </div>

      {/* Right Side - Details & Features */}
      <div className="w-full md:w-2/5 min-h-[50vh] md:h-screen flex flex-col justify-center px-8 md:px-12 lg:px-16 pt-8 md:pt-32 pb-16 bg-black/20 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col my-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase mb-1 md:mb-2 leading-none">
            {car.name}
          </h2>
          <p className={clsx("text-base md:text-lg lg:text-xl font-light tracking-wide uppercase mb-4 lg:mb-8", car.accent)}>
            {car.tagline}
          </p>

          {/* Features List */}
          <ul className="space-y-2 lg:space-y-4 mb-6 lg:mb-8 border-y border-white/10 py-4 lg:py-6">
            {car.features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-3 text-gray-300">
                <Check size={18} className={car.accent} />
                <span className="text-sm md:text-base">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Variations */}
          <div className="mb-6 lg:mb-10">
            <p className="text-xs tracking-widest text-gray-500 uppercase mb-3">
              Available Colors: <span className="text-white font-medium ml-2">{activeColor.name}</span>
            </p>
            <div className="flex space-x-4">
              {car.colors.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveColorIdx(idx)}
                  className={clsx(
                    "w-8 h-8 rounded-full border-2 transition-all focus:outline-none",
                    activeColorIdx === idx 
                      ? "border-white ring-2 ring-white/50 scale-110" 
                      : "border-transparent hover:border-white/50 ring-1 ring-white/20"
                  )}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Price & Buy Button */}
          <div className="flex items-center justify-between mt-auto">
            <div className="text-2xl lg:text-3xl font-light">{car.price}</div>
            <button 
              onClick={() => onReserve(car.name, activeColor.name)}
              className="flex items-center space-x-2 bg-white text-black px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold uppercase tracking-wider hover:bg-[var(--color-gold)] transition-colors group text-sm lg:text-base"
            >
              <span>Reserve</span>
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import ReservationModal from "./ReservationModal";

export default function ProductShowcase() {
  const [modalState, setModalState] = useState({ isOpen: false, carName: "", colorName: "" });

  const handleReserve = (carName: string, colorName: string) => {
    setModalState({ isOpen: true, carName, colorName });
  };

  return (
    <>
      <section className="relative w-full">
        {carsData.map((car, index) => (
          <CarBlock key={car.id} car={car} index={index} onReserve={handleReserve} />
        ))}
      </section>

      <ReservationModal 
        isOpen={modalState.isOpen} 
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))} 
        initialCarName={modalState.carName}
        initialColorName={modalState.colorName}
      />
    </>
  );
}
