import React from "react";
import Servicecard from "../components/Servicecard.js";

const Service = () => {
  return (
    <div className="h-[1200px] xl:h-[800px] flex relative flex-col items-center justify-center font-[aino] rounded-b-xl bg-main">
      <div className="flex max-w-screen-xl mx-auto items-center justify-center px-4 py-8 lg:px-6 lg:py-16">
          <div className="space-y-8 gap-10 xl:gap-4 xl:grid lg:grid-cols-3 xl:space-y-0">
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
        <div className="flex justify-center items-center flex-col min-h-16 w-full rounded-lg bg-white font-[audiowide] text-nero text-2xl">
          <span className="text-black text-2xl border-b-2 border-black relative before:absolute before:-inset-1 before:bg-black before:h-2 before:w-2 before:rounded-full before:top-[28px]">COMING SOON</span>
        </div>
      </Servicecard>
          </div>
      </div>
      <div className="invisible xl:visible w-44 md:w-[400px] h-[60px] bottom-0 absolute rounded-t-[30px] bg-nero">
        <div className="relative before:absolute before:top-[20px] before:rounded-br-[30px] before:left-[-40px] before:bg-main before:h-[40px] before:w-[40px] before:shadow-[3px_15px_0px_1px_rgba(30,_30,_30,_1)] after:absolute after:top-[20px] after:rounded-bl-[30px] after:right-[-40px] after:bg-main after:h-[40px] after:w-[40px] after:shadow-[-3px_15px_0px_1px_rgba(30,_30,_30,_1)]"></div>
      </div>
    </div>
  );
};
export default Service;
