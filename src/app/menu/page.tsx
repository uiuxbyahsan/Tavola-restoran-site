import { Suspense } from "react";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MenuContent from "@/components/MenuContent";

export const metadata: Metadata = {
  title: "Menu | Tavola Ristorante",
  description: "The full Tavola menu — salads, appetizers, soups, pasta, meat, seafood, desserts, kids' menu, and drinks.",
};

export default function MenuPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Suspense fallback={null}>
          <MenuContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
