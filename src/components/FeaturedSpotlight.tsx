"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const hotspots = [
  {
    id: 1,
    x: "25%",
    y: "65%",
    title: "Carbon Ceramic Brakes",
    description: "Lightweight and fade-resistant for ultimate stopping power.",
  },
  {
    id: 2,
    x: "82%",
    y: "55%",
    title: "Matrix LED Tech",
    description: "Adaptive lighting that intelligently illuminates the road ahead.",
  },
  {
    id: 3,
    x: "55%",
    y: "40%",
    title: "Aerodynamic Canopy",
    description: "Tear-drop cabin design to minimize drag and enhance downforce.",
  },
];

export default function FeaturedSpotlight() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  return (
    <section className="relative w-full py-32 bg-white flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-4"
          >
            Engineering <span className="text-[var(--color-gold)]">Mastery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Discover the intricate details and advanced technology that make our flagship model a true masterpiece of modern automotive engineering.
          </motion.p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[600px]">
          {/* Car Image with Parallax/Tilt Feel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/sports_car_black.png"
              alt="Flagship Profile"
              fill
              className="object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Hotspots */}
          {hotspots.map((spot) => (
            <div
              key={spot.id}
              className="absolute z-20"
              style={{ left: spot.x, top: spot.y }}
              onMouseEnter={() => setActiveHotspot(spot.id)}
              onMouseLeave={() => setActiveHotspot(null)}
            >
              {/* Pulse effect */}
              <div className="relative flex items-center justify-center w-8 h-8 cursor-pointer">
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-[var(--color-gold)]"
                />
                <div className="relative w-3 h-3 bg-[var(--color-gold)] rounded-full shadow-[0_0_10px_var(--color-gold)]" />
              </div>

              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{
                  opacity: activeHotspot === spot.id ? 1 : 0,
                  scale: activeHotspot === spot.id ? 1 : 0.8,
                  y: activeHotspot === spot.id ? 0 : 10,
                }}
                className="absolute top-10 left-1/2 -translate-x-1/2 w-64 p-4 bg-black/90 backdrop-blur-md rounded-xl shadow-2xl pointer-events-none"
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black/90 rotate-45" />
                <h4 className="text-[var(--color-gold)] font-medium mb-1 text-sm">{spot.title}</h4>
                <p className="text-gray-300 text-xs leading-relaxed">{spot.description}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
