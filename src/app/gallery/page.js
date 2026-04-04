import React from "react";
import ImageSlider from "../components/Image-slider.js";

const Gallery = () => {
  return (
    <div id="gallery" className="flex flex-col justify-center items-center w-full min-h-screen py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-surface-2">
      <div className="flex justify-center items-center w-full bg-panel/95 py-3 sm:py-4 mb-8 sm:mb-12 shadow-sm border-b border-panel">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-3 rounded-full bg-panel px-4 py-2 shadow-sm border border-panel">
            <div className="font-[thedusCLB] text-3xl sm:text-4xl text-accent">V4</div>
            <div className="h-[40px] w-1 rounded-full bg-accent"></div>
          </div>
          <span className="font-[thedusCLB] text-2xl sm:text-3xl text-body">Galerii</span>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-6xl gap-6 sm:gap-8 px-4 sm:px-0">
        <div className="w-full mx-auto">
          <div className="font-[thedusCLR] text-base sm:text-lg text-muted p-4 sm:p-6 bg-panel shadow-lg rounded-[2rem] border border-panel mb-4">
            <p>Need pildid näitavad vaid mõningaid näiteid sellest, mida on võimalik 3D-printida. Alates detailsetest prototüüpidest kuni praktiliste tööriistade ja kunstiliste disainideni.</p>
          </div>
        </div>
        <div className="w-full mx-auto rounded-[2rem] overflow-hidden bg-panel shadow-xl border border-panel/80">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
