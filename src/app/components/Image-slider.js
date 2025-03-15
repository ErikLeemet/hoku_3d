'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-[336px] mx-auto">
      <div className="overflow-hidden rounded-sm shadow-md shadow-secondary/50 border-4 border-secondary">
        <motion.div
          className="flex items-center"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          {images.map((src, index) => (
            <div key={index} className="min-w-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                width={800}
                height={500}
                className="w-full min-h-[426px] object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute w-1/2 h-full flex left-2 top-1/2 -translate-y-1/2">
      </button>
      <button onClick={nextSlide} className="absolute w-1/2 h-full flex right-2 top-1/2 -translate-y-1/2">
      </button>

      {/* Indicator Buttons */}
      <div className="flex rounded-sm justify-center bg-neutral gap-2 mt-6 pb-2 px-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-6 h-6 transform border-transparent border-l-[12px] border-r-[12px] border-b-[16px] border-solid
              ${currentIndex === index ? 'border-b-accent' : 'border-b-primary'}`}
            style={{ borderRadius: '4px' }}
          ></button>
        ))}
      </div>
    </div>
  );
}
