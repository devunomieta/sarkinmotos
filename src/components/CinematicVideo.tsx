"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";

export default function CinematicVideo() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] bg-black overflow-hidden flex items-center justify-center">
      {/* Background Image/Video Cover */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/suv_luxury.png"
          alt="Cinematic B-Roll Placeholder"
          fill
          className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <button
            onClick={() => setIsVideoOpen(true)}
            className="group relative flex items-center justify-center w-24 h-24 mx-auto mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all hover:bg-[var(--color-gold)] hover:border-transparent hover:scale-110"
          >
            <Play className="w-10 h-10 text-white ml-2 transition-transform group-hover:scale-110" fill="currentColor" />
            <div className="absolute inset-0 rounded-full border border-[var(--color-gold)] opacity-0 group-hover:animate-ping" />
          </button>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase"
        >
          Experience the <span className="text-[var(--color-gold)] text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)]">Drive</span>
        </motion.h2>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl shadow-gold/10"
            >
              {/* Placeholder Video Iframe (Using an example stock video URL if available, or just a dummy message) */}
              <div className="absolute inset-0 flex items-center justify-center text-white/50 flex-col">
                <Play className="w-16 h-16 mb-4 opacity-50" />
                <p className="text-xl font-light tracking-widest">CINEMATIC FILM PLAYING...</p>
                <p className="text-sm mt-2 text-gray-500">Video source would be embedded here.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
