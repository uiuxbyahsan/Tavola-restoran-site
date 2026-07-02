"use client";

import { useState } from "react";
import Image from "next/image";
import { tickerDishes } from "@/lib/menu-data";

function Row({
  direction,
  dishes,
}: {
  direction: "left" | "right";
  dishes: typeof tickerDishes;
}) {
  const [paused, setPaused] = useState(false);
  const items = [...dishes, ...dishes];

  return (
    <div
      className="flex overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={`flex w-max items-center gap-14 pr-14 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } ${paused ? "marquee-paused" : ""}`}
      >
        {items.map((dish, i) => (
          <div key={`${dish.name}-${i}`} className="flex shrink-0 items-center gap-4">
            <div
              style={{ rotate: `${i % 2 === 0 ? -3 : 2}deg` }}
              className="relative h-14 w-20 shrink-0 overflow-hidden ring-1 ring-tavola-gold/40 transition-transform duration-500 ease-out hover:scale-110"
            >
              <Image src={dish.image} alt={dish.name} fill sizes="80px" className="object-cover" />
            </div>
            <span className="font-display-tight whitespace-nowrap text-2xl text-tavola-cream sm:text-3xl">
              {dish.name}
            </span>
            <span className="text-lg text-tavola-gold">⚬</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DishTicker() {
  const half = Math.ceil(tickerDishes.length / 2);
  const rowOne = tickerDishes.slice(0, half);
  const rowTwo = tickerDishes.slice(half);

  return (
    <section className="bg-tavola-blue-dark py-10">
      <div className="mx-auto max-w-7xl border-t border-tavola-gold/25" />
      <div className="flex flex-col gap-6 py-7">
        <Row direction="left" dishes={rowOne} />
        <Row direction="right" dishes={rowTwo} />
      </div>
      <div className="mx-auto max-w-7xl border-t border-tavola-gold/25" />
    </section>
  );
}
