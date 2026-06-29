"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

const variants = [
  {
    id: "alpine-white",
    name: "Alpine White",
    color: "#ffffff",
    price: 277500000,
    image: "/images/sports_car_hero.png",
  },
  {
    id: "matte-black",
    name: "Matte Black",
    color: "#1a1a1a",
    price: 292500000,
    image: "/images/sports_car_black.png",
  },
];

export default function PricingConfigurator() {
  const [activeVariant, setActiveVariant] = useState(variants[0]);
  const count = useMotionValue(activeVariant.price);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const formattedPrice = useTransform(rounded, (latest) => 
    new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(latest)
  );

  useEffect(() => {
    const controls = animate(count, activeVariant.price, {
      duration: 1,
      ease: "circOut",
    });
    return controls.stop;
  }, [activeVariant, count]);

  return (
    <section className="relative w-full py-32 bg-neutral-50 flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Visual Preview */}
        <div className="relative h-[300px] md:h-[500px] w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVariant.id}
              initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={activeVariant.image}
                alt={activeVariant.name}
                fill
                className="object-contain drop-shadow-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Configurator Controls */}
        <div className="max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-4">
              Design Your <span className="text-[var(--color-gold)]">Legacy</span>
            </h2>
            <p className="text-gray-500">
              Customize your vehicle's exterior finish. Watch the price dynamically update as you tailor perfection to your taste.
            </p>
          </motion.div>

          <div className="mb-10">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-4">Exterior Finish</h3>
            <div className="flex space-x-4">
              {variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setActiveVariant(variant)}
                  className={clsx(
                    "relative w-12 h-12 rounded-full border-2 transition-all duration-300 flex items-center justify-center",
                    activeVariant.id === variant.id ? "border-[var(--color-gold)] scale-110" : "border-transparent hover:border-gray-300"
                  )}
                >
                  <span
                    className="w-8 h-8 rounded-full shadow-inner border border-gray-200"
                    style={{ backgroundColor: variant.color }}
                  />
                </button>
              ))}
            </div>
            <p className="mt-4 text-black font-medium">{activeVariant.name}</p>
          </div>

          <div className="bg-black border border-[var(--color-gold)] p-8">
            <h3 className="text-xl font-bold uppercase tracking-widest text-[var(--color-gold)] mb-2">Total Investment</h3>
            <p className="text-gray-400 text-sm mb-6">Price reflects manufacturer&apos;s suggested retail price and selected options.</p>
            <motion.h4 className="text-5xl font-light tracking-tighter text-white">
              {formattedPrice}
            </motion.h4>
            <button className="mt-8 w-full py-4 bg-white text-black rounded-full font-medium transition-all hover:bg-[var(--color-gold)] hover:shadow-lg hover:shadow-gold/20">
              Reserve Configuration
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
