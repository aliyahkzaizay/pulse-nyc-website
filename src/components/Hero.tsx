import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import skyline from "../assets/skyline2.jpg";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0B0F] via-[#1a0d2e] to-[#0B0B0F]" />

      {/* 🌃 NYC Skyline Background */}
      <div className="absolute inset-0 opacity-60">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75"
          style={{
            // 👉 CHANGE THIS TO USE A DIFFERENT SKYLINE IMAGE
            backgroundImage: `url(${skyline})`,
          }}
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#0B0B0F]/50" />
      </div>

      {/* Glow Effects */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        className="absolute top-20 left-20 w-96 h-96 bg-[#6C3BFF] rounded-full blur-[100px]"
      />

      <motion.div
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        style={{
          x: -mousePosition.x,
          y: -mousePosition.y,
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF2E88] rounded-full blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00E0FF] rounded-full blur-[150px]"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8"
        >
          <div className="w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse" />
          <span className="text-white/80 text-sm">NYC Nightlife, Tracked</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-[#6C3BFF] via-[#FF2E88] to-[#00E0FF] bg-clip-text text-transparent">
            Feel The Pulse
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          NYC nightlife, in real time.
          <br />
          Find where it’s lit, discover your vibe, and move through the city with confidence.
          <br />
          <span className="text-white font-bold">
            Launching soon. Join the waitlist.
          </span>
        </motion.p>

        <a
          href="YOUR_GOOGLE_FORM_LINK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl bg-[#6C3BFF] px-6 py-3 text-white font-medium hover:bg-[#7D52FF] shadow-[0_0_20px_rgba(108,59,255,0.35)] transition-all duration-200"
        >
          Join the Waitlist
        </a>
      </div>
    </section>
  );
}