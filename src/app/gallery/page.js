import React from "react";
import ImageSlider from "../components/Image-slider.js";

const Gallery = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full h-screen bg-primary">
        <div className="w-[336px] text-center mb-4 font-['thedusWLB'] text-accent text-2xl">
            <span><span className="text-secondary"> </span>Gallery<span className="text-secondary"> </span></span>
        </div>
        <ImageSlider/>
    </div>
  );
};

export default Gallery;
