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
    <div>
    <div
      className="relative min-h-full w-full max-w-4xl mx-auto rounded-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex"
        animate={{ x: `-${currentIndex * 100}%` }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={1000}
              height={750}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </motion.div>

      {/* Clickable Areas for Navigation */}
      <div className="absolute left-0 top-0 h-full w-1/2 cursor-pointer bg-transparent" onClick={prevSlide}></div>
      <div className="absolute right-0 top-0 h-full w-1/2 cursor-pointer bg-transparent" onClick={nextSlide}></div>
    </div>
    {/* Indicator Dots */}
    <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-sm ${currentIndex === index ? 'bg-secondary' : 'bg-base-100'}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
