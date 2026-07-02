"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/content";
import MagneticButton from "./MagneticButton";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // Starts false to match SSR output; useLayoutEffect corrects it from the
  // real scroll position before paint, so there's no visible flash and no
  // hydration mismatch (unlike reading window.scrollY in the initializer).
  const [scrolledPast, setScrolledPast] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    if (!isHome) return;
    function onScroll() {
      setScrolledPast(window.scrollY > 60);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solid = !isHome || scrolledPast || menuOpen;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        menuOpen
          ? "bg-tavola-blue-dark"
          : solid
            ? "bg-tavola-cream/95 shadow-[0_2px_20px_rgba(16,17,43,0.08)] backdrop-blur-sm"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="relative z-10 block h-10 w-32 shrink-0">
          <Image
            src="/images/brand/tavola-logo.png"
            alt="Tavola Ristorante"
            fill
            sizes="128px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`gold-underline group relative rounded-full px-3 py-1.5 font-body text-sm uppercase tracking-[0.12em] transition-colors duration-300 hover:text-black ${
                solid ? "text-[#1a1a1a]" : "text-tavola-cream"
              }`}
            >
              <span
                className={`absolute inset-0 -z-10 rounded-full opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 ${
                  solid ? "bg-black/[0.06]" : "bg-white/10"
                }`}
              />
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <MagneticButton
            href="/#reservations"
            className="inline-block rounded-full bg-tavola-gold px-6 py-2.5 font-body text-sm font-semibold uppercase tracking-[0.1em] text-tavola-blue-dark transition-colors duration-300 hover:bg-tavola-gold-light"
          >
            Book a Table
          </MagneticButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="relative z-10 flex h-8 w-8 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 transition-transform duration-300 ${
              menuOpen ? "bg-tavola-gold" : solid ? "bg-tavola-text-dark" : "bg-tavola-cream"
            } ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 transition-transform duration-300 ${
              menuOpen ? "bg-tavola-gold" : solid ? "bg-tavola-text-dark" : "bg-tavola-cream"
            } ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-tavola-blue-dark lg:hidden"
          >
            <div className="flex min-h-[calc(100vh-4.5rem)] flex-col gap-5 px-6 pb-8 pt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-2xl text-tavola-cream transition-colors duration-300 hover:text-tavola-gold"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#reservations"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-block rounded-full bg-tavola-gold px-6 py-3 text-center font-body text-sm font-semibold uppercase tracking-[0.1em] text-tavola-blue-dark"
              >
                Book a Table
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
