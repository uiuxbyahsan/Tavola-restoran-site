"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/content";
import GoogleIcon from "./GoogleIcon";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-tavola-gold">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

function TestimonialMarquee() {
  const [paused, setPaused] = useState(false);
  const items = [...testimonials, ...testimonials];

  return (
    <div
      className="flex overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`flex w-max items-start gap-8 pr-8 animate-marquee-left-slow ${
          paused ? "marquee-paused" : ""
        }`}
      >
        {items.map((t, i) => (
          <motion.div
            key={`${t.author}-${i}`}
            animate={{ rotate: i % 2 === 0 ? -1.5 : 1.5 }}
            whileHover={{
              rotate: 0,
              y: -6,
              transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
            }}
            className="relative w-80 shrink-0 rounded-sm bg-white p-7 shadow-lg sm:w-96"
          >
            <span className="absolute right-5 top-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-tavola-text-dark/30">
              Google
            </span>
            <Stars count={t.rating} />
            <p className="mt-5 font-body text-base leading-relaxed text-tavola-text-dark">
              “{t.quote}”
            </p>
            <p className="mt-6 text-sm font-semibold text-tavola-text-dark/70">{t.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-tavola-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow text-sm sm:text-base"
            >
              What our guests say
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mt-4 text-4xl text-tavola-text-dark sm:text-5xl"
            >
              Stories from <span className="italic text-tavola-gold">Our Table</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 rounded-full border border-tavola-text-dark/10 bg-white px-5 py-3 shadow-sm"
          >
            <GoogleIcon className="h-6 w-6" />
            <div className="text-sm">
              <p className="font-semibold text-tavola-text-dark">4.6/5 · Excellent</p>
              <p className="text-tavola-text-dark/50">Based on 871 reviews</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-14">
        <TestimonialMarquee />
      </div>
    </section>
  );
}
