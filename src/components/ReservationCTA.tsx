"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 20"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M2 10c8-8 16 8 24 0s16 8 24 0 16 8 24 0 16 8 24 0 16 8 20 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ReservationCTA() {
  return (
    <section className="bg-tavola-cream px-6 py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex min-h-[440px] max-w-4xl items-center justify-center overflow-hidden rounded-none bg-tavola-blue-dark px-6 py-20 shadow-2xl sm:px-12"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/evening-table.jpg"
            alt="A candlelit table set at Tavola"
            fill
            sizes="(min-width: 896px) 896px, 100vw"
            className="animate-ken-burns object-cover brightness-[0.7]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-tavola-blue-dark/85 via-tavola-blue-dark/75 to-tavola-blue-dark/90" />

        {/* Gold squiggle corner accents */}
        <Squiggle className="absolute left-6 top-6 h-4 w-24 text-tavola-gold/70 sm:left-10 sm:top-10" />
        <Squiggle className="absolute bottom-6 right-6 h-4 w-24 rotate-180 text-tavola-gold/70 sm:bottom-10 sm:right-10" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="eyebrow text-xs sm:text-sm">Join Us</p>
          <h2 className="mt-5 leading-none text-tavola-cream">
            <span className="font-serif-display block text-4xl font-semibold sm:text-5xl">
              Your Table
            </span>
            <span className="font-script mt-1 block text-5xl text-tavola-gold sm:text-7xl">
              Awaits
            </span>
          </h2>
          <p className="mt-6 max-w-md text-tavola-cream/70">
            Reservations recommended. Walk-ins welcome when available.
          </p>
          <p className="mt-2 text-sm text-tavola-cream/50">
            Maršala Tita 50, Sarajevo · Mon–Sat 12:00–23:00
          </p>

          <div className="mt-9 flex flex-col items-center gap-5 sm:flex-row">
            <MagneticButton
              href="#reservations"
              className="animate-soft-pulse inline-block rounded-full bg-tavola-gold px-9 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.12em] text-tavola-blue-dark transition-transform duration-500 hover:scale-105"
            >
              Book a Table
            </MagneticButton>
            <a
              href="tel:+38733222207"
              className="gold-underline font-body text-sm text-tavola-cream/80 transition-colors hover:text-tavola-gold"
            >
              Or call us: +387 33 222-207
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
