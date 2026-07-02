import Image from "next/image";

// TripAdvisor 2017 "Certificate of Excellence" — the actual client-provided
// badge image. Replace TRIPADVISOR_URL with Tavola's exact listing URL once
// available.

const TRIPADVISOR_URL = "https://www.tripadvisor.com/Search?q=Tavola%20Sarajevo";

export default function TripAdvisorBadge() {
  return (
    <a
      href={TRIPADVISOR_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Tavola — TripAdvisor 2017 Certificate of Excellence"
      className="group inline-flex shrink-0 transition-transform duration-500 ease-out hover:scale-105"
    >
      <span className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-tavola-cream sm:h-28 sm:w-28">
        <Image
          src="/images/brand/tripadvisor-certificate-2017.png"
          alt="TripAdvisor 2017 Certificate of Excellence"
          width={112}
          height={109}
          className="h-[92%] w-[92%] object-contain"
        />
      </span>
    </a>
  );
}
