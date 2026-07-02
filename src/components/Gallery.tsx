"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/lib/content";

function GalleryMarquee({ onSelect }: { onSelect: (i: number) => void }) {
  const [paused, setPaused] = useState(false);
  const items = [...galleryImages, ...galleryImages];

  return (
    <div
      className="mt-16 flex overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`flex w-max items-start gap-10 pr-10 animate-marquee-left-slow ${
          paused ? "marquee-paused" : ""
        }`}
      >
        {items.map((img, i) => {
          const originalIndex = i % galleryImages.length;
          const captionAbove = originalIndex % 2 === 1;
          return (
            <div key={i} className="flex w-64 shrink-0 flex-col sm:w-72">
              {captionAbove && (
                <p className="font-display-tight mb-3 text-2xl text-tavola-text-dark/80">
                  {img.caption}
                </p>
              )}
              <motion.button
                type="button"
                onClick={() => onSelect(originalIndex)}
                animate={{ rotate: img.rotate }}
                whileHover={{
                  rotate: 0,
                  y: -6,
                  scale: 1.02,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                }}
                className="group relative z-0 aspect-[4/5] w-full overflow-hidden rounded-sm bg-tavola-blue shadow-md transition-shadow duration-500 hover:z-10 hover:shadow-2xl"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="288px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.button>
              {!captionAbove && (
                <p className="font-display-tight mt-3 text-2xl text-tavola-text-dark/80">
                  {img.caption}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  function showPrev() {
    setSelected((prev) => (prev === null ? null : (prev + galleryImages.length - 1) % galleryImages.length));
  }
  function showNext() {
    setSelected((prev) => (prev === null ? null : (prev + 1) % galleryImages.length));
  }

  return (
    <section id="gallery" className="bg-tavola-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-xs sm:text-sm"
          >
            A Look Inside
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-4 text-4xl text-tavola-text-dark sm:text-5xl"
          >
            Gallery
          </motion.h2>
        </div>
      </div>

      <GalleryMarquee onSelect={setSelected} />

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-tavola-blue-dark/95 px-6 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-tavola-cream/40 text-xl text-tavola-cream transition-colors hover:border-tavola-gold hover:text-tavola-gold"
            >
              ✕
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-tavola-cream/40 text-tavola-cream transition-colors hover:border-tavola-gold hover:text-tavola-gold sm:left-8"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-tavola-cream/40 text-tavola-cream transition-colors hover:border-tavola-gold hover:text-tavola-gold sm:right-8"
            >
              ›
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={galleryImages[selected].src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="relative flex max-h-[80vh] w-full max-w-2xl flex-col items-center"
              >
                <div className="relative aspect-[4/5] w-full max-h-[70vh] overflow-hidden rounded-sm">
                  <Image
                    src={galleryImages[selected].src}
                    alt={galleryImages[selected].caption}
                    fill
                    sizes="90vw"
                    className="object-cover"
                  />
                </div>
                <p className="font-display mt-5 text-2xl text-tavola-cream">
                  {galleryImages[selected].caption}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
