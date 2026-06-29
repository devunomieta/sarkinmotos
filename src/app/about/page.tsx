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
            Since 1998
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
              Our Mission
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              At Sarkinmotos, we provide our clients with the highest quality imported luxury and performance vehicles. Founded on the principle of uncompromising excellence, we source the most desirable vehicles from around the globe to offer an unparalleled dealership experience.
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
              Quality Assurance
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Every vehicle that graces our dealership floor undergoes a rigorous mechanical and structural inspection. We ensure that every imported car meets strict standards before it is listed for sale, guaranteeing peace of mind for every purchase.
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
              Importing Specialists
            </h2>
            <p className="text-gray-300 text-xl md:text-2xl font-light leading-relaxed max-w-3xl">
              Our expertise in international vehicle logistics allows us to source and import vehicles directly from overseas markets. We handle all compliance, customs, and transportation logistics to deliver exceptional inventory to our dealership.
            </p>
          </motion.div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
