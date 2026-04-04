"use client";

import { useState, useEffect, useRef } from "react";
import Service from "./service/page.js";
import Gallery from "./gallery/page.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Plastic from "./plastic/page.js";
import Contact from "./contact/page.js";
import About from "./about/about.js";

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroSectionRef = useRef(null);
  const heroCardRef = useRef(null);
  const cursorGlowRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);
  const blob3Ref = useRef(null);
  const centralGlowRef = useRef(null);

  useEffect(() => {
    const heroCard = heroCardRef.current;
    if (!heroCard) return;

    const onMouseMove = (e) => {
      const rect = heroCard.getBoundingClientRect();
      
      // Calculate position relative to card center (-1 to 1)
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      // Clamp values
      const clampX = Math.max(-1, Math.min(1, x));
      const clampY = Math.max(-1, Math.min(1, y));

      // Calculate rotation angles (very subtle - max 3 degrees)
      const rotateY = clampX * 3;
      const rotateX = clampY * -3;

      setMousePos({ x: clampX, y: clampY });

      // Apply 3D rotation to card
      heroCard.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      
      // Update CSS variables for reflection gradient
      const reflectX = ((e.clientX - rect.left) / rect.width) * 100;
      const reflectY = ((e.clientY - rect.top) / rect.height) * 100;
      heroCard.style.setProperty('--mouse-x', `${reflectX}%`);
      heroCard.style.setProperty('--mouse-y', `${reflectY}%`);

      // Position cursor glow - use relative position within card
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.opacity = '1';
        cursorGlowRef.current.style.left = `${e.clientX - rect.left}px`;
        cursorGlowRef.current.style.top = `${e.clientY - rect.top}px`;
      }

      // Subtle parallax effect for blobs
      const parallaxX = clampX * 5;
      const parallaxY = clampY * 5;

      if (blob1Ref.current) {
        blob1Ref.current.style.transform = `translate(${parallaxX * 1.2}px, ${parallaxY * 1.2}px)`;
      }
      if (blob2Ref.current) {
        blob2Ref.current.style.transform = `translate(${parallaxX * -1}px, ${parallaxY * -1}px)`;
      }
      if (blob3Ref.current) {
        blob3Ref.current.style.transform = `translate(${parallaxX * 1.4}px, ${parallaxY * -1.4}px)`;
      }
      if (centralGlowRef.current) {
        centralGlowRef.current.style.transform = `translate(${parallaxX * 0.8}px, ${parallaxY * 0.8}px)`;
      }
    };

    const onMouseLeave = () => {
      // Reset card tilt when mouse leaves
      heroCard.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
      
      if (blob1Ref.current) blob1Ref.current.style.transform = `translate(0, 0)`;
      if (blob2Ref.current) blob2Ref.current.style.transform = `translate(0, 0)`;
      if (blob3Ref.current) blob3Ref.current.style.transform = `translate(0, 0)`;
      if (centralGlowRef.current) centralGlowRef.current.style.transform = `translate(0, 0)`;
      
      // Hide cursor glow
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.opacity = '0';
      }
    };

    heroCard.addEventListener("mousemove", onMouseMove);
    heroCard.addEventListener("mouseleave", onMouseLeave);
    
    return () => {
      heroCard.removeEventListener("mousemove", onMouseMove);
      heroCard.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="bg-surface-2 text-body">
      <Navbar />
      <main className="relative overflow-hidden">
        <section id="home" ref={heroSectionRef} className="relative overflow-hidden bg-gradient-to-br from-surface-2 via-surface to-surface pb-12 sm:pb-16 lg:pb-20 pt-12 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
            <svg viewBox="0 0 1200 600" className="absolute inset-0 h-full w-full opacity-90 text-slate-700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <g stroke="currentColor" strokeWidth="2" fill="none" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round">
                <path d="M80 520h1040" opacity="0.98" />
                <path d="M80 460h1040" opacity="0.92" />
                <path d="M80 400h1040" opacity="0.8" />
                <rect x="140" y="120" width="90" height="196" rx="12" opacity="0.95" />
                <rect x="240" y="156" width="184" height="172" rx="16" opacity="0.92" />
                <path d="M280 210h120M280 260h120" opacity="0.88" />
                <rect x="500" y="132" width="140" height="160" rx="16" opacity="0.92" />
                <circle cx="720" cy="168" r="28" opacity="0.95" />
                <path d="M720 132v-40M688 168h64M720 204v40" opacity="0.95" />
                <rect x="820" y="204" width="92" height="96" rx="12" opacity="0.92" />
                <path d="M820 300l26-28 26 28" opacity="0.92" />
                <path d="M102 180h72M102 232h72" opacity="0.85" />
                <path d="M122 110h28M122 138h28M122 166h28" opacity="0.85" />
                <path d="M412 520h32M412 554h32" opacity="0.78" />
                <rect x="360" y="40" width="136" height="68" rx="10" opacity="0.9" />
                <path d="M398 68h58M398 96h40" opacity="0.95" />
                <path d="M940 500l-140-220 120-60" opacity="0.8" />
                <path d="M860 300l80-40 40 40" opacity="0.8" />
                <path d="M112 360h180M112 390h180" opacity="0.75" />
                <path d="M450 500h300" opacity="0.65" />
              </g>
            </svg>
          </div>
          <div className="responsive mx-auto flex min-h-[calc(100vh-88px)] flex-col items-center justify-center py-6 sm:py-10 lg:py-12 max-w-6xl">
            <div ref={heroCardRef} className="hero-card-glass relative w-full overflow-hidden rounded-2xl sm:rounded-[2rem] border border-panel p-6 sm:p-8 lg:p-16 bg-panel shadow-[0_40px_120px_-80px_var(--shadow)] backdrop-blur-2xl [perspective:1200px]" style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out' }}>
              <div ref={cursorGlowRef} className="cursor-glow"></div>
              <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div ref={centralGlowRef} className="absolute left-1/2 top-16 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl animate-hero-glow"></div>
                <div className="absolute right-10 top-1/3 h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-hero-glow-delay"></div>
              </div>
              <div ref={blob1Ref} className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl hero-animation-blob-1"></div>
              <div ref={blob2Ref} className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-surface-2/80 blur-2xl hero-animation-blob-2"></div>
              <div ref={blob3Ref} className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-secondary/20 blur-3xl hero-animation-blob-3"></div>
              <div className="relative z-10 flex flex-col items-center text-center">
                <span className="mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-[0.4em] text-accent font-medium">3D-printimine ja graveerimine</span>
                <h1 className="mb-4 sm:mb-6 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thedusCLB leading-tight text-body">
                  Täpsus ja kvaliteet igas detailis
                </h1>
                <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-sm sm:text-base md:text-lg leading-6 sm:leading-8 text-muted">
                  3D-printimine ja graveerimine sinu ideede elluviimiseks. Kujunda detaile, kohanda esemeid ja loo midagi ainulaadset.
                </p>
                <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:justify-center w-full sm:w-auto">
                  <a href="#services" className="btn-glow inline-flex items-center justify-center rounded-full bg-accent px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-[#ff5c69]">
                    Vaata teenuseid
                  </a>
                  <a href="#contact" className="btn-glow inline-flex items-center justify-center rounded-full border border-panel bg-panel px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-body transition hover:border-accent hover:text-accent">
                    Võta ühendust
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Service />
        <Plastic />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
