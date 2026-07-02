"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { menuCategories, categoryTabImages, menuItemImages } from "@/lib/menu-data";

export default function MenuContent() {
  const searchParams = useSearchParams();
  const urlTab = searchParams.get("tab");
  const urlCategoryId = menuCategories.some((c) => c.id === urlTab) ? urlTab : null;

  const [manualId, setManualId] = useState<string | null>(null);
  const activeId = manualId ?? urlCategoryId ?? menuCategories[0].id;
  const active = menuCategories.find((c) => c.id === activeId) ?? menuCategories[0];

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const previewImage = (hoveredItem && menuItemImages[hoveredItem]) || categoryTabImages[activeId];

  return (
    <section className="bg-tavola-cream pb-24 pt-36 sm:pt-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-xs sm:text-sm"
        >
          Our Menu
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-4 text-4xl text-tavola-text-dark sm:text-5xl"
        >
          What We Serve
        </motion.h1>

        <nav className="mt-12 flex gap-8 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-10 [&::-webkit-scrollbar]:hidden">
          {menuCategories.map((cat, i) => {
            const isActive = cat.id === activeId;
            const tilt = i % 2 === 0 ? -3 : 2;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setManualId(cat.id)}
                className="group flex shrink-0 flex-col items-center gap-3"
              >
                <motion.span
                  animate={{ rotate: tilt, scale: isActive ? 1.06 : 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative block h-24 w-24 shrink-0 overflow-hidden rounded-md shadow-md ring-2 transition-all duration-400 sm:h-28 sm:w-28 ${
                    isActive
                      ? "ring-tavola-gold"
                      : "ring-tavola-text-dark/10 group-hover:ring-tavola-gold/40"
                  }`}
                >
                  <Image
                    src={categoryTabImages[cat.id]}
                    alt={cat.label}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </motion.span>
                <span
                  className={`font-display whitespace-nowrap text-xl transition-colors duration-300 sm:text-2xl ${
                    isActive ? "text-tavola-blue-dark" : "text-tavola-text-dark/50 group-hover:text-tavola-text-dark"
                  }`}
                >
                  {cat.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="menu-tab-underline"
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="h-0.5 w-10 rounded-full bg-tavola-gold"
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:mt-14 lg:grid-cols-[1fr_320px]">
          <div className="min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-10"
              >
                {active.subsections.map((section, sIdx) => (
                  <div key={section.title ?? sIdx}>
                    {section.title && (
                      <h3 className="font-display mb-4 text-xl text-tavola-blue-dark">
                        {section.title}
                      </h3>
                    )}
                    <div className="flex flex-col divide-y divide-tavola-text-dark/10 border-t border-tavola-text-dark/10">
                      {section.items.map((item) => (
                        <div
                          key={item.name}
                          onMouseEnter={() =>
                            setHoveredItem(menuItemImages[item.name] ? item.name : null)
                          }
                          onMouseLeave={() => setHoveredItem(null)}
                          className="group flex items-baseline justify-between gap-6 border-l-2 border-transparent px-4 py-3.5 transition-all duration-300 hover:border-tavola-gold hover:bg-tavola-gold/5"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-body text-[15px] text-tavola-text-dark">
                                {item.name}
                              </span>
                              {item.signature && (
                                <span className="rounded-full bg-tavola-gold/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-tavola-gold">
                                  Signature
                                </span>
                              )}
                            </div>
                            {item.description && (
                              <p className="mt-1 text-sm text-tavola-text-dark/50">
                                {item.description}
                              </p>
                            )}
                          </div>
                          <span className="font-body shrink-0 whitespace-nowrap text-sm text-tavola-text-dark/70 transition-all duration-300 group-hover:scale-105 group-hover:font-semibold group-hover:text-tavola-blue-dark">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-32 flex flex-col items-center">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-xl">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={previewImage}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={previewImage}
                      alt={hoveredItem ?? active.label}
                      fill
                      sizes="320px"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
