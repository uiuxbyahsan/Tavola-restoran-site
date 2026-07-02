import type { Metadata } from "next";
import { hitoribok, manrope, fraunces } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tavola | Fine Italian & Mediterranean Dining in Sarajevo",
  description:
    "Tavola is a fine-dining Italian and Mediterranean restaurant in the heart of Sarajevo, Maršala Tita 50. Romantic, vintage interior, seasonal cuisine, and a curated wine list.",
  icons: {
    icon: "/images/brand/tavola-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hitoribok.variable} ${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-tavola-cream text-tavola-text-dark">
        {children}
      </body>
    </html>
  );
}
