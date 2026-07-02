import localFont from "next/font/local";
import { Manrope, Fraunces } from "next/font/google";

export const hitoribok = localFont({
  src: "./hitoribok-2obp3.otf",
  variable: "--font-script",
  display: "swap",
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

// Heavy display serif — used only for the oversized decorative footer
// wordmark, where a script font would be unreadable at that scale.
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["600", "900"],
  variable: "--font-serif",
  display: "swap",
});
