import React from "react";
import ImageSlider from "../components/Image-slider.js";

const Gallery = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen py-12 bg-primary">
        <div className="flex justify-center items-center w-full bg-accent py-4 mb-12">
          <div className="flex justify-center items-center gap-2">
            <div className="flex">
                <div className="font-[thedusCLB] text-4xl text-secondary -rotate-90">V4</div>
                <div className="w-[4px] h-[40px] bg-secondary"></div>
            </div>
            <span className="font-[thedusCLB] text-2xl text-primary">
              Gallary
            </span>
          </div>
          </div>
      <div className="flex flex-col mx-6">
        <div className="w-full mx-auto max-w-4xl">
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
