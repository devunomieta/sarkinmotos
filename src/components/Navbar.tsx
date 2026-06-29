"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/cars", label: "Cars" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav 
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-500",
          isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-xl" : "bg-transparent py-6"
        )}
      >
        {/* Invisible spacer to balance flexbox */}
        <div className="w-10 hidden md:block" />

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center justify-center">
            <img src="/logo.png" alt="Sarkin Mota Autos Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-md" />
          </Link>
        </div>

        {/* Hamburger Toggle (Desktop & Mobile) */}
        <button
          className="text-white hover:text-[var(--color-gold)] transition-colors focus:outline-none drop-shadow-md ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col space-y-10 text-center">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={clsx(
                      "text-4xl md:text-7xl font-bold tracking-tighter uppercase transition-colors hover:text-[var(--color-gold)]",
                      pathname === link.href ? "text-[var(--color-gold)]" : "text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 text-gray-500 text-sm tracking-widest uppercase font-medium"
            >
              Engineered Perfection.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
