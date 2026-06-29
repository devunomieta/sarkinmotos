"use client";

import { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 4000);
  };

  return (
    <main className="min-h-screen bg-black flex flex-col pt-32 selection:bg-[var(--color-gold)] selection:text-black">
      <div className="container mx-auto px-8 flex-grow mb-20 flex flex-col items-center justify-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white mb-6">
            Contact Us
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Whether you are inquiring about our current inventory, need assistance with an import, or want to arrange a viewing, our sales team is here to assist you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center space-y-10 border-r border-white/5 pr-0 lg:pr-16"
          >
            <div className="flex items-start space-x-6">
              <div className="bg-white/5 p-4 rounded-full text-[var(--color-gold)]">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase text-white mb-2 tracking-widest">Our Dealership</h3>
                <p className="text-gray-400 leading-relaxed">
                  100 Auto Plaza Boulevard<br />
                  Beverly Hills, CA 90210<br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-white/5 p-4 rounded-full text-[var(--color-gold)]">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase text-white mb-2 tracking-widest">Direct Line</h3>
                <p className="text-gray-400 leading-relaxed">
                  +1 (800) LUX-AUTO<br />
                  Available 24/7 for existing clients.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-white/5 p-4 rounded-full text-[var(--color-gold)]">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase text-white mb-2 tracking-widest">Email</h3>
                <p className="text-gray-400 leading-relaxed">
                  info@sarkinmotos.com<br />
                  sales@sarkinmotos.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-zinc-950 border border-white/10 p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-bold uppercase tracking-tighter text-white mb-8">Send an Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input required type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" />
                <input required type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" />
              </div>
              <input required type="text" placeholder="Subject / Vehicle of Interest" className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors" />
              <textarea required rows={5} placeholder="Your Message" className="w-full bg-white/5 border border-white/10 px-4 py-4 text-white focus:outline-none focus:border-[var(--color-gold)] transition-colors resize-none"></textarea>
              
              <button 
                type="submit"
                className="w-full flex items-center justify-center space-x-3 bg-white text-black font-bold uppercase tracking-widest py-5 hover:bg-[var(--color-gold)] transition-colors"
              >
                {isSent ? (
                  <span>Inquiry Dispatched</span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
