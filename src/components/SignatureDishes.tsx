"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { signatureDishes } from "@/lib/menu-data";

export default function SignatureDishes() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % signatureDishes.length);
    }, 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <section className="bg-tavola-blue-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-xs sm:text-sm"
          >
            A Taste of Tavola
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-4 text-4xl text-tavola-cream sm:text-5xl"
          >
            Our Signature Dishes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-tavola-cream/70 sm:whitespace-nowrap"
          >
            Known for our pasta, homemade gnocchi, and the best steak in town.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            onMouseLeave={() => setPaused(false)}
            className="flex flex-col divide-y divide-tavola-cream/10 border-y border-tavola-cream/10"
          >
            {signatureDishes.map((dish, i) => {
              const isActive = i === active;
              return (
                <button
                  key={dish.name}
                  type="button"
                  onMouseEnter={() => {
                    setPaused(true);
                    setActive(i);
                  }}
                  onFocus={() => {
                    setPaused(true);
                    setActive(i);
                  }}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-6 border-l-2 py-6 pl-5 text-left transition-all duration-500 ease-out ${
                    isActive
                      ? "border-tavola-gold bg-tavola-cream/5"
                      : "border-transparent hover:border-tavola-gold/40"
                  }`}
                >
                  <span
                    className={`font-display-tight text-xl transition-colors duration-500 ${
                      isActive ? "text-tavola-gold" : "text-tavola-cream/40"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span className="flex-1">
                    <span
                      className={`font-display block text-2xl transition-colors duration-500 sm:text-3xl ${
                        isActive ? "text-tavola-gold" : "text-tavola-cream"
                      }`}
                    >
                      {dish.name}
                    </span>
                    {dish.tag && (
                      <span className="mt-1 block text-xs uppercase tracking-[0.15em] text-tavola-gold/70">
                        {dish.tag}
                      </span>
                    )}
                  </span>
                  <span className="font-body text-tavola-cream/60">{dish.price}</span>
                </button>
              );
            })}

            <Link
              href="/menu"
              className="group mt-8 hidden w-fit items-center gap-3 rounded-full bg-tavola-gold px-8 py-3 font-body text-sm font-semibold uppercase tracking-[0.12em] text-tavola-blue-dark transition-all duration-500 hover:scale-105 hover:bg-tavola-gold-light lg:inline-flex"
            >
              View Full Menu
            </Link>
          </div>

          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            style={{ rotate: "2deg" }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-2xl lg:aspect-auto"
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={signatureDishes[active].image}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={signatureDishes[active].image}
                  alt={signatureDishes[active].name}
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile-only button — sits after the image so the mobile stack
              reads list -> image -> button. Desktop uses the button inside
              the list column above (hidden on mobile). */}
          <Link
            href="/menu"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-tavola-gold px-8 py-3 font-body text-sm font-semibold uppercase tracking-[0.12em] text-tavola-blue-dark transition-all duration-500 hover:scale-105 hover:bg-tavola-gold-light lg:hidden"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
