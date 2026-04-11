'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/image20.jpeg',
  '/image30.jpeg',
  '/image40.jpeg',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-4 sm:px-0 sm:py-6">
      <div
        className="relative min-h-[220px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[500px] w-full overflow-hidden rounded-[10px] sm:rounded-[1.75rem] bg-secondary"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex h-full"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
          {images.map((src, index) => (
            <div key={index} className="min-w-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={1000}
                height={750}
                className="h-[220px] sm:h-[320px] md:h-[400px] lg:h-[500px] w-full object-cover"
              />
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-1/2 cursor-pointer bg-transparent" onClick={prevSlide} />
        <div className="absolute inset-y-0 right-0 w-1/2 cursor-pointer bg-transparent" onClick={nextSlide} />
      </div>

      <div className="flex justify-center gap-2 sm:gap-3 mt-3 sm:mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 sm:h-3 w-2.5 sm:w-3 rounded-full transition ${currentIndex === index ? 'bg-accent' : 'bg-neutral'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
