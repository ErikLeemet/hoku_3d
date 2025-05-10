import React from "react";
import Servicecard from "../components/Servicecard.js";

const Service = () => {
  return (
    <div id="services" className="h-[1600px] xl:h-[800px] py-12 flex relative flex-col items-center justify-center bg-base-100">
      <div className="flex max-w-screen-xl mx-auto items-center justify-center px-4 py-8 lg:px-6 lg:py-16 ">
          <div className="space-y-8 gap-[10px] xl:gap-8 xl:grid lg:grid-cols-3 xl:space-y-0">
          <Servicecard
        title={"3D PRINTING"}
        text={
          "A process of creating three-dimensional objects from a digital file, layer by layer, using materials like plastic, resin, or metal."
        }
      />
      <Servicecard
        title={"ENGRAVING"}
        text={
          "The process of carving designs, text, or patterns onto surfaces like metal, wood, or glass."
        }
      />
      <Servicecard title={"3D MODELING"} text={""}>
        <div className="flex justify-center items-center flex-col min-h-16 w-full rounded-lg bg-base-200 font-['thedusWLR'] text-secondary text-2xl">
          <span className="text-secondary text-2xl border-b-2 border-secondary relative before:absolute before:-inset-1 before:bg-secondary before:h-2 before:w-2 before:rounded-full before:top-[28px]">COMING SOON</span>
        </div>
      </Servicecard>
          </div>
      </div>
      <div className="w-44 h-[30px] md:w-[400px] md:h-[60px] bottom-0 absolute rounded-t-[30px] bg-primary">
        <div className="relative before:absolute before:top-[5px] before:md:top-[20px] before:rounded-br-[30px] before:left-[-34px] before:md:left-[-40px] before:bg-base-100 before:h-[25px] before:md:h-[40px] before:w-[40px] before:shadow-[3px_15px_0px_1px] after:absolute after:top-[5px] after:md:top-[20px] after:rounded-bl-[30px] after:right-[-34px] after:md:right-[-40px] after:bg-base-100 after:h-[25px] after:md:h-[40px] after:w-[40px] after:shadow-[-3px_15px_0px_1px] after:shadow-primary before:shadow-primary"></div>
      </div>
    </div>
  );
};
export default Service;
