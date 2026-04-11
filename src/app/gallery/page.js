import React from "react";
import ImageSlider from "../components/Image-slider.js";

const Gallery = () => {
  return (
    <div id="gallery" className="w-full min-h-screen flex flex-col justify-between items-center">
    <div className="flex justify-center items-center w-full bg-accent py-3 sm:py-4 mb-8 sm:mb-12">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-3 py-2">
            <div className="font-thedusCLB text-3xl sm:text-4xl text-secondary">V4</div>
            <div className="h-[40px] w-1 rounded-full bg-secondary"></div>
          </div>
          <span className="font-thedusCLB text-2xl sm:text-3xl text-neutral">Galerii</span>
        </div>
      </div>
    <div className="flex flex-col justify-center items-center w-full pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-surface-2">
      <div className="flex flex-col w-full max-w-6xl gap-6 sm:gap-8 px-4 sm:px-0">
        <div className="w-full mx-auto max-w-5xl">
          <div className="text-base text-neutral p-4 sm:p-6 bg-secondary rounded-[10px] mb-4">
            <p>Need pildid näitavad vaid mõningaid näiteid sellest, mida on võimalik 3D-printida. Alates detailsetest prototüüpidest kuni praktiliste tööriistade ja kunstiliste disainideni.</p>
          </div>
        </div>
        <div className="w-full mx-auto overflow-hidden">
          <ImageSlider />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
