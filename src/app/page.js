"use client";

import { useState, useEffect, useRef } from "react";
import Hero from "./hero/page.js";
import Service from "./service/page.js";
import Gallery from "./gallery/page.js";
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
      <main>
        <Hero />
        <Service />
        <Plastic />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </main>
  );
}
