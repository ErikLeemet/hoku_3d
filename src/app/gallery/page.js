import React from "react";
import ImageSlider from "../components/Image-slider.js";

const Gallery = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen py-12 bg-primary">
      <div className="flex flex-col mx-6">
        <div className="w-full mx-auto max-w-4xl">
          <div className="flex justify-center items-center gap-[1rem] pb-6">
            <div className="flex gap-[0.5rem]">
              <div className="w-[8px] h-[40px] bg-secondary"></div>
              <div className="w-[8px] h-[40px] bg-secondary"></div>
              <div className="w-[8px] h-[40px] bg-secondary"></div>
            </div>
            <span className="font-[thedusWLB] text-xl text-accent">
              galerii
            </span>
            <div className="flex gap-[0.5rem]">
              <div className="w-[8px] h-[40px] bg-secondary"></div>
              <div className="w-[8px] h-[40px] bg-secondary"></div>
              <div className="w-[8px] h-[40px] bg-secondary"></div>
            </div>
          </div>
            {/*text*/}
            <div className="font-[thedusCLR] text-lg text-secondary p-6 bg-base-100 rounded-md mb-4">
                <p>These images showcase just a few examples of what can be 3D printed. From detailed prototypes to practical tools and artistic designs.</p>
            </div>
        </div>
        <ImageSlider />
      </div>
    </div>
  );
};

export default Gallery;
