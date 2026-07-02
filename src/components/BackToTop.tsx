"use client";

import { useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  // Starts false to match SSR output; useLayoutEffect corrects it from the
  // real scroll position before paint, avoiding a hydration mismatch.
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 700);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-tavola-gold/50 bg-tavola-blue-dark text-tavola-gold shadow-lg transition-colors duration-300 hover:bg-tavola-gold hover:text-tavola-blue-dark"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
