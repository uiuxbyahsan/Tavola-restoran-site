import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import DishTicker from "@/components/DishTicker";
import OurStory from "@/components/OurStory";
import SignatureDishes from "@/components/SignatureDishes";
import MenuShowcase from "@/components/MenuShowcase";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Instagram from "@/components/Instagram";
import ReservationCTA from "@/components/ReservationCTA";
import ReservationForm from "@/components/ReservationForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <DishTicker />
        <OurStory />
        <SignatureDishes />
        <MenuShowcase />
        <Gallery />
        <Testimonials />
        <Instagram />
        <ReservationCTA />
        <ReservationForm />
      </main>
      <Footer />
    </>
  );
}
