"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const paragraphs = [
  "Tavola is located in the city center, in a quiet and cosy court, away from the noise and crowd, but at the same time on the main Titova street #50.",
  "Tavola tradition goes back to the years after the siege of Sarajevo, as an idea of a big man, in whose honour we raise our glasses. We were one of the first restaurants that offered, and still offer international cuisine, in fact Italian and Mediterranean, in a fine dining way.",
  "Throughout the years, we were able to keep our quality, in the highest standards, with our professional staff, our romantic and vintage interior, delicious food and national and international wines.",
  "Tavola is the perfect place for a business meeting, family lunch, or intimate dinner — quiet, elegant, and hidden from the city noise, yet just a step away from the center.",
];

const storyImages = [
  { src: "/images/interior/interior-01.jpg", alt: "The romantic blue-and-gold dining room at Tavola" },
  { src: "/images/interior/interior-02.jpg", alt: "Elegant table settings in the Tavola dining room" },
  { src: "/images/interior/interior-03.jpg", alt: "Gold-framed artwork on Tavola's vintage blue walls" },
  { src: "/images/interior/interior-04.jpg", alt: "Warm candlelit ambiance beneath the chandelier" },
  { src: "/images/interior/interior-05.jpg", alt: "Tavola's characterful, romantic interior" },
];

function StorySlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % storyImages.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative order-1 aspect-[4/5] w-full overflow-hidden rounded-sm shadow-xl lg:order-none"
    >
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={storyImages[index].src}
            alt={storyImages[index].alt}
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-tavola-gold/0 transition-colors duration-700 group-hover:bg-tavola-gold/15" />
    </motion.div>
  );
}

export default function OurStory() {
  return (
    <section id="our-story" className="bg-tavola-cream py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <StorySlider />

        <div className="order-2 lg:order-none">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-sm sm:text-base"
          >
            Since the siege era
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-4 text-4xl text-tavola-text-dark sm:text-5xl"
          >
            Our Story
          </motion.h2>

          <div className="mt-8 flex flex-col gap-5">
            {paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-body leading-relaxed text-tavola-text-dark/80"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
