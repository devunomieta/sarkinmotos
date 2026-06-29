"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 selection:bg-[var(--color-gold)] selection:text-black flex flex-col">
      <div className="container mx-auto px-8 flex-grow pb-24">
        
        {/* Header */}
        <div className="mb-24 md:mb-40">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--color-gold)] font-bold uppercase tracking-widest mb-4"
          >
            The Sarkin Mota Story
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold tracking-tighter uppercase text-white leading-none max-w-4xl"
          >
            About <span className="text-[var(--color-gold)]">Us</span>
          </motion.h1>
        </div>

        {/* Content Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-32 max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-white border-b border-white/10 pb-4">
              Our Humble Beginnings
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Sarkin Mota Autos was built on passion, driven by the vision of our CEO, Dr. Aliyu Mohammad (First Sarkin Motan Kasar Hausa). Starting with absolute zero capital, Dr. Aliyu began his journey as a car broker—connecting buyers with dealers. By consistently reinvesting every profit back into the business instead of personal luxury, he steadily grew the enterprise from buying his first car to establishing the premier dealership we are today.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-6 md:mt-24"
          >
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-white border-b border-white/10 pb-4">
              Integrity & Transparency
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We believe the foundation of any successful business is honesty and consistency. We do not just sell cars to make money; we sell to provide lasting value. We ensure every vehicle leaving our lot is in perfect condition, and we prioritize absolute transparency regarding our inventory. Earning our clients&apos; trust is what builds the lasting relationships that drive our growth.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 md:col-span-2 text-center items-center mt-12 md:mt-24 border-t border-white/10 pt-24"
          >
            <h2 className="text-4xl font-bold uppercase tracking-tighter text-[var(--color-gold)] mb-6">
              Our Powerful Network
            </h2>
            <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              Through years of dedicated service, we have built an expansive network spanning prominent politicians, traditional rulers, business moguls, and international dealers. This network allows us to source the best vehicles globally, while our greatest reward remains the priceless satisfaction of a happy customer safely driving their dream car.
            </p>
          </motion.div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
