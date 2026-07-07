import Image from "next/image";
import Link from "next/link";
import { openingHours } from "@/lib/content";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import BackToTop from "./BackToTop";
import TripAdvisorBadge from "./TripAdvisorBadge";

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-tavola-blue-dark pb-0 pt-20 text-tavola-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:px-10">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="relative h-11 w-32">
            <Image
              src="/images/brand/tavola-logo.png"
              alt="Tavola Ristorante"
              fill
              sizes="128px"
              className="object-contain object-left"
            />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-tavola-cream/70">
            Tavola Restaurant will delight anyone in search of a pleasant ambience, excellent
            food and professional service. On the Tavola menu, besides the various types of
            pasta, there is a great variety of meat and seafood specialities.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tavola on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-tavola-cream/25 text-tavola-cream transition-all duration-400 hover:scale-110 hover:border-tavola-gold hover:bg-tavola-gold hover:text-tavola-blue-dark"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/restauranttavola/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tavola on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-tavola-cream/25 text-tavola-cream transition-all duration-400 hover:scale-110 hover:border-tavola-gold hover:bg-tavola-gold hover:text-tavola-blue-dark"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="eyebrow text-sm sm:text-base">Visit</p>
          <p className="mt-4 text-sm leading-relaxed text-tavola-cream/70">
            Maršala Tita 50
            <br />
            Sarajevo 71000
            <br />
            Bosnia &amp; Herzegovina
          </p>
          <a
            href="tel:+38733222207"
            className="gold-underline mt-4 inline-block text-sm text-tavola-cream/70 transition-colors hover:text-tavola-gold"
          >
            +387 33 222-207
          </a>
        </div>

        <div>
          <p className="eyebrow text-sm sm:text-base">Opening hours</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-tavola-cream/70">
            {openingHours.map((row) => (
              <li key={row.day} className="flex justify-between gap-6">
                <span>{row.day}</span>
                <span>{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-sm sm:text-base">Explore</p>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-tavola-cream/70">
            <li>
              <Link href="/#our-story" className="gold-underline transition-colors hover:text-tavola-gold">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/menu" className="gold-underline transition-colors hover:text-tavola-gold">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/#gallery" className="gold-underline transition-colors hover:text-tavola-gold">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/#reservations" className="gold-underline transition-colors hover:text-tavola-gold">
                Reservations
              </Link>
            </li>
          </ul>
          <div className="mt-8">
            <TripAdvisorBadge />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-tavola-cream/10 px-6 lg:px-10" />

      {/* Oversized wordmark, cropped so only the top half of the letterforms
          shows (bottom half clipped past the container's lower edge). */}
      <div
        aria-hidden="true"
        className="pointer-events-none mt-10 flex select-none justify-center overflow-hidden [height:10.5vw]"
      >
        <p className="font-script whitespace-nowrap text-center leading-none text-tavola-gold [font-size:30vw] [transform:translateY(-4.5vw)]">
          Tavola
        </p>
      </div>

      <BackToTop />
    </footer>
  );
}
