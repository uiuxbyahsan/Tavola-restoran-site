"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";

type FieldProps = {
  label: string;
  type?: string;
  name: string;
  required?: boolean;
  textarea?: boolean;
};

function Field({ label, type = "text", name, required, textarea }: FieldProps) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const alwaysFloated = type === "date" || type === "time";
  const floated = focused || value.length > 0 || alwaysFloated;

  const sharedProps = {
    id,
    name,
    required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValue(e.target.value),
    className:
      "peer w-full border-0 border-b border-tavola-text-dark/25 bg-transparent pb-2.5 pt-6 font-body text-tavola-text-dark outline-none transition-colors duration-300 focus:border-transparent",
  };

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 font-body text-tavola-text-dark/50 transition-all duration-300 ${
          floated ? "top-0 text-xs tracking-[0.08em] text-tavola-gold" : "top-6 text-base"
        }`}
      >
        {label}
        {required && " *"}
      </label>
      {textarea ? (
        <textarea rows={3} {...sharedProps} />
      ) : (
        <input type={type} {...sharedProps} />
      )}
      <span
        className={`absolute bottom-0 left-0 h-px bg-tavola-gold transition-all duration-400 ease-out ${
          focused ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
}

export default function ReservationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1400);
  }

  return (
    <section id="reservations" className="bg-tavola-cream py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-xs sm:text-sm"
          >
            Reservations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-4 text-4xl text-tavola-text-dark sm:text-5xl"
          >
            Reserve Your Table
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 max-w-xl text-tavola-text-dark/70"
          >
            Book easily and quickly via our online form or contact us directly by phone{" "}
            <a href="tel:+38733222207" className="text-tavola-blue-dark underline">
              +387 (0) 33 222-207
            </a>
            . Please note that your reservation is only confirmed when you receive our return
            confirmation. We only accept online reservations at least 24 hours before your
            planned arrival.
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onSubmit={handleSubmit}
          className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2"
        >
          <Field label="Name" name="name" required />
          <Field label="Contact Number" name="phone" type="tel" required />
          <Field label="Email" name="email" type="email" required />
          <Field label="Party Size" name="partySize" type="number" required />
          <Field label="Date" name="date" type="date" required />
          <Field label="Arrival Time" name="time" type="time" required />
          <div className="sm:col-span-2">
            <Field label="Additional Information" name="notes" textarea />
          </div>

          <div className="sm:col-span-2 mt-4 flex justify-center">
            <button
              type="submit"
              disabled={status !== "idle"}
              className="relative inline-flex h-12 w-56 items-center justify-center overflow-hidden rounded-full bg-tavola-gold font-body text-sm font-semibold uppercase tracking-[0.12em] text-tavola-blue-dark transition-all duration-500 hover:scale-105 hover:bg-tavola-gold-light disabled:hover:scale-100"
            >
              {status === "idle" && "Send Request"}
              {status === "loading" && (
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="h-5 w-5 rounded-full border-2 border-tavola-blue-dark/30 border-t-tavola-blue-dark"
                />
              )}
              {status === "success" && (
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  Request Sent ✓
                </motion.span>
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
