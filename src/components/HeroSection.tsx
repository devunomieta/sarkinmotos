"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import clsx from "clsx";

export default function HeroSection() {
  const [textState, setTextState] = useState<"hidden" | "center" | "bottom">("hidden");
  const [isAudioReady, setIsAudioReady] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Trigger when the element is even slightly in view (amount: 0)
  const isInView = useInView(containerRef, { amount: 0 });

  useEffect(() => {
    // Show the text centered after 2 seconds
    const centerTimer = setTimeout(() => {
      setTextState("center");
    }, 2000);

    // Animate to the bottom after 4 seconds (2s + 2s delay)
    const bottomTimer = setTimeout(() => {
      setTextState("bottom");
    }, 4000);

    // Audio is ready to play immediately (after 0 seconds)
    const audioTimer = setTimeout(() => {
      setIsAudioReady(true);
    }, 0);

    return () => {
      clearTimeout(centerTimer);
      clearTimeout(bottomTimer);
      clearTimeout(audioTimer);
    };
  }, []);

  // Track if user has interacted with the page to safely bypass browser autoplay block
  useEffect(() => {
    if (typeof navigator !== "undefined" && navigator.userActivation?.hasBeenActive) {
      setTimeout(() => setHasInteracted(true), 0);
    }

    const markInteracted = () => setHasInteracted(true);
    
    window.addEventListener("click", markInteracted, { once: true });
    window.addEventListener("scroll", markInteracted, { once: true });
    window.addEventListener("keydown", markInteracted, { once: true });
    window.addEventListener("pointerdown", markInteracted, { once: true });

    return () => {
      window.removeEventListener("click", markInteracted);
      window.removeEventListener("scroll", markInteracted);
      window.removeEventListener("keydown", markInteracted);
      window.removeEventListener("pointerdown", markInteracted);
    };
  }, []);

  // Force video playback for mobile
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const videoElement = videoWrapperRef.current?.querySelector("video");
    if (videoElement) {
      videoElement.play().catch(e => console.log("Autoplay blocked by browser:", e));
    }
  }, []);

  // Play audio safely only when we are sure the user has interacted
  useEffect(() => {
    if (!audioRef.current) return;

    if (isAudioReady && isInView && hasInteracted) {
      audioRef.current.play().catch((err) => {
        console.log("Audio playback still blocked:", err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isAudioReady, isInView, hasInteracted]);

  return (
    <section 
      ref={containerRef}
      className="sticky top-0 z-0 w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center"
    >
      {/* Hidden Audio Element - Loop removed */}
      <audio ref={audioRef} src="/audio.mp3" preload="auto" />

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div 
          ref={videoWrapperRef}
          className="w-full h-full"
          dangerouslySetInnerHTML={{
            __html: `
              <video 
                src="/car.mp4" 
                autoplay 
                loop 
                muted 
                playsinline
                style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6;"
              ></video>
            `
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Animated Cursive Overlay Text using layout animation to move to bottom */}
      <div 
        className={clsx(
          "absolute inset-0 z-10 flex flex-col items-center px-4 text-center pointer-events-none pb-12 md:pb-16",
          textState === "bottom" ? "justify-end" : "justify-center"
        )}
      >
        <motion.h1
          layout
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ 
            opacity: textState === "hidden" ? 0 : 1, 
            scale: textState === "hidden" ? 0.9 : (textState === "bottom" ? 0.5 : 1), 
            y: textState === "hidden" ? 20 : 0 
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-6xl md:text-8xl lg:text-9xl text-white font-bold drop-shadow-2xl"
          style={{ fontFamily: "var(--font-cursive)" }}
        >
          LUXURY IS LIFE
        </motion.h1>
      </div>

    </section>
  );
}
