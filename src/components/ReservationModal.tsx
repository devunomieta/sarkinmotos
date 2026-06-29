"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCarName: string;
  initialColorName: string;
}

export default function ReservationModal({ isOpen, onClose, initialCarName, initialColorName }: ReservationModalProps) {
  const [carSelection, setCarSelection] = useState(initialCarName);
  const [colorSelection, setColorSelection] = useState(initialColorName);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initial props when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setCarSelection(initialCarName);
        setColorSelection(initialColorName);
        setIsSubmitted(false);
      }, 0);
    }
  }, [isOpen, initialCarName, initialColorName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-zinc-950 border border-white/10 p-8 shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Check size={32} className="text-[var(--color-gold)]" />
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-widest text-white mb-2">Reservation Received</h3>
                <p className="text-gray-400">Our concierge will contact you shortly to finalize your request.</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold uppercase tracking-tighter text-white mb-2">
                    Reserve Your Vehicle
                  </h2>
                  <p className="text-gray-400 text-sm tracking-wide">
                    Complete the form below to secure your allocation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">First Name</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                      <input required type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                    <input required type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Vehicle Model</label>
                    <div className="relative">
                      <select 
                        value={carSelection}
                        onChange={(e) => setCarSelection(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors appearance-none"
                      >
                        <option value="Mercedes-AMG GT">Mercedes-AMG GT</option>
                        <option value="BMW M8 Competition">BMW M8 Competition</option>
                        <option value="Porsche 911 Turbo S">Porsche 911 Turbo S</option>
                        <option value="Audi RS e-tron GT">Audi RS e-tron GT</option>
                        <option value="Tesla Roadster">Tesla Roadster</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--color-gold)] uppercase tracking-wider mb-2">Selected Color</label>
                    <input 
                      readOnly
                      type="text" 
                      value={colorSelection}
                      className="w-full bg-zinc-900 border border-[var(--color-gold)]/30 px-4 py-3 text-white focus:outline-none transition-colors cursor-not-allowed" 
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 mt-4 hover:bg-[var(--color-gold)] transition-colors"
                  >
                    Confirm Reservation
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
