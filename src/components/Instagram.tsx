"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { instagramPosts } from "@/lib/content";

export default function Instagram() {
  return (
    <section className="bg-tavola-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-sm sm:text-base"
          >
            Follow us on Instagram
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-4 text-4xl text-tavola-text-dark sm:text-5xl"
          >
            @restauranttavola
          </motion.h2>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={i}
              href="https://www.instagram.com/restauranttavola/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <Image
                src={post.image}
                alt="Tavola on Instagram"
                fill
                sizes="(min-width: 768px) 22vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/35" />

              {post.video && (
                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-tavola-cream transition-transform duration-500 group-hover:scale-110 group-hover:animate-soft-pulse">
                  ▶
                </span>
              )}

              <div className="absolute inset-0 flex items-center justify-center gap-4 text-sm font-semibold text-tavola-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span>♥ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.instagram.com/restauranttavola/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-tavola-gold px-9 py-3.5 font-body text-sm font-semibold uppercase tracking-[0.12em] text-tavola-blue-dark transition-all duration-500 hover:scale-105 hover:bg-tavola-gold-light"
          >
            Follow @restauranttavola
          </a>
        </div>
      </div>
    </section>
  );
}
