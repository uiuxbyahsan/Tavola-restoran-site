"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categoryShowcase } from "@/lib/menu-data";

const MotionLink = motion(Link);

export default function MenuShowcase() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="bg-tavola-blue-dark">
      <div className="flex h-[560px] w-full snap-x snap-mandatory overflow-x-auto md:snap-none md:overflow-x-hidden">
        {categoryShowcase.map((cat, i) => {
          const isHovered = hovered === i;
          // Accordion (md+ only): hovered column expands, others compress.
          // Recalibrated for 9 columns so the shift stays subtle.
          const grow = hovered === null ? 1 : isHovered ? 1.9 : 0.9;

          return (
            <MotionLink
              key={cat.tab}
              href={`/menu?tab=${cat.tab}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              animate={{ flexGrow: grow }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{ flexBasis: 0 }}
              className="group relative block h-full min-w-[74vw] shrink-0 snap-center overflow-hidden sm:min-w-[42vw] md:min-w-0 md:shrink"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                fill
                sizes="(min-width: 768px) 30vw, (min-width: 640px) 42vw, 74vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-opacity duration-500 group-hover:from-black/95" />

              <div className="absolute bottom-8 left-6 right-6 sm:left-8">
                <p className="eyebrow text-xs">{cat.tagline}</p>
                <p className="font-display mt-2 text-2xl text-tavola-cream transition-colors duration-500 group-hover:text-tavola-gold sm:text-3xl">
                  {cat.label}
                </p>
              </div>

              <span className="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-tavola-cream/50 text-lg text-tavola-cream transition-colors duration-500 group-hover:border-tavola-gold group-hover:text-tavola-gold">
                +
              </span>
            </MotionLink>
          );
        })}
      </div>
    </section>
  );
}
