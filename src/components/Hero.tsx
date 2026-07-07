"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import MagneticButton from "./MagneticButton";
import GoogleIcon from "./GoogleIcon";

const heroImages = [
  "/images/brand/hero-restoran.jpg",
  "/images/interior/interior-01.jpg",
  "/images/interior/interior-02.jpg",
  "/images/interior/interior-03.jpg",
  "/images/interior/interior-04.jpg",
  "/images/brand/hero-2.jpg",
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function HeroBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[index]}
            alt="Tavola dining room"
            fill
            priority={index === 0}
            sizes="100vw"
            className="animate-ken-burns object-cover brightness-[0.95] saturate-[1.08]"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden bg-tavola-blue-dark">
      <HeroBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-black/10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.p
          variants={item}
          className="font-script mb-2 text-2xl text-tavola-gold sm:text-4xl md:text-[55px]"
        >
          Welcome to Tavola
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display leading-[1.05] text-tavola-cream"
          style={{ fontSize: "clamp(2.25rem, 7vw, 5rem)" }}
        >
          Where Italian Tradition
          <br />
          Meets Modern Taste
        </motion.h1>

        <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <MagneticButton
            href="/#reservations"
            className="inline-block rounded-full bg-tavola-gold px-9 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.12em] text-tavola-blue-dark shadow-[0_0_0_rgba(245,179,1,0)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(245,179,1,0.55)]"
          >
            Book a Table
          </MagneticButton>
          <MagneticButton
            href="/menu"
            className="inline-block rounded-full border border-tavola-cream/70 px-9 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.12em] text-tavola-cream transition-all duration-500 hover:scale-105 hover:border-tavola-gold hover:text-tavola-gold"
          >
            Explore Menu
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-white/15 px-5 py-2.5 shadow-lg backdrop-blur-md sm:flex"
      >
        <GoogleIcon className="h-5 w-5" />
        <span className="font-body text-sm text-tavola-cream">
          <strong className="font-semibold">4.6 ★</strong> Excellent, based on 871 reviews
        </span>
      </motion.div>

      <div className="animate-gentle-bounce absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <svg width="22" height="34" viewBox="0 0 22 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="20" height="32" rx="10" stroke="#F6F1E7" strokeOpacity="0.6" />
          <circle cx="11" cy="10" r="3" fill="#F5B301" />
        </svg>
      </div>
    </section>
  );
}
