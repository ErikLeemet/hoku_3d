import ProsConsItem from "../components/ProsConsItem.js";
import React from "react";

const Plastic = () => {
  return (
    <div className="flex items-center flex-col w-full h-full bg-primary">
        <div className="mx-6 max-w-4xl xl:max-w-5xl flex flex-col">
      {/*title*/}
      <div className="flex gap-[1rem] items-center justify-center pt-10 pb-10 lg:pb-0">
        <div className="flex gap-[0.5rem]">
          <div className="w-[8px] h-[40px] bg-secondary"></div>
          <div className="w-[8px] h-[40px] bg-secondary"></div>
          <div className="w-[8px] h-[40px] bg-secondary"></div>
        </div>
        <span className="font-[thedusCLB] text-3xl text-accent">Plastics</span>
        <div className="flex gap-[0.5rem]">
          <div className="w-[8px] h-[40px] bg-secondary"></div>
          <div className="w-[8px] h-[40px] bg-secondary"></div>
          <div className="w-[8px] h-[40px] bg-secondary"></div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center">
        <div className="flex justify-center gap-4">
          {/*PLA*/}
          <div className="relative">
            <span className="font-[thedusWLB] text-secondary text-xs md:text-lg absolute inset-0 flex items-center justify-center pt-4 md:pt-6">
              PLA
            </span>
            <svg
              viewBox="0 0 62 56"
              fill="none"
              className="stroke-secondary stroke-2 w-[82px] h-[76px] md:w-[112px] md:h-[106px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.0311 3.75L60.0119 48.75C61.359 51.0833 59.6751 54 56.9808 54H5.01924C2.32494 54 0.640998 51.0833 1.98815 48.75L27.9689 3.75C29.3161 1.41667 32.6839 1.41667 34.0311 3.75Z"
              />
            </svg>
          </div>
          {/*ABS*/}
          <div className="relative">
            <span className="font-[thedusWLB] text-secondary text-xs md:text-lg absolute inset-0 flex items-center justify-center pt-4 md:pt-6">
              ABS
            </span>
            <svg
              viewBox="0 0 62 56"
              fill="none"
              className="stroke-secondary stroke-2 w-[82px] h-[76px] md:w-[112px] md:h-[106px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.0311 3.75L60.0119 48.75C61.359 51.0833 59.6751 54 56.9808 54H5.01924C2.32494 54 0.640998 51.0833 1.98815 48.75L27.9689 3.75C29.3161 1.41667 32.6839 1.41667 34.0311 3.75Z"
              />
            </svg>
          </div>
          {/*PETG*/}
          <div className="relative">
            <span className="font-[thedusWLB] text-secondary text-xs md:text-lg absolute inset-0 flex items-center justify-center pt-4 md:pt-6">
              PETG
            </span>
            <svg
              viewBox="0 0 62 56"
              fill="none"
              className="stroke-secondary stroke-2 w-[82px] h-[76px] md:w-[112px] md:h-[106px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.0311 3.75L60.0119 48.75C61.359 51.0833 59.6751 54 56.9808 54H5.01924C2.32494 54 0.640998 51.0833 1.98815 48.75L27.9689 3.75C29.3161 1.41667 32.6839 1.41667 34.0311 3.75Z"
              />
            </svg>
          </div>
        </div>
        <div className="font-[thedusCLR] text-lg text-secondary p-6 pl-0">
          <div className="flex gap-4 items-center py-6">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-accent"
            >
              <path d="M10.268 19.5C11.0378 20.8333 12.9623 20.8333 13.7321 19.5L23.2583 3C24.0281 1.66667 23.0659 0 21.5263 0H2.47372C0.934118 0 -0.0281308 1.66667 0.74167 3L10.268 19.5Z" />
            </svg>
            <h3 className="font-[thedusWLB] text-lg">filaments</h3>
          </div>
            <p>At Hoku3D, we offer three standard filament types and maintain a basic color selection of black and white. Any additional color requests will need to be specified by the customer and will incur extra charges.</p>
        </div>
        </div>


        {/*PROS AND CONS*/}


        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-10">
            <div className="flex w-[280px] h-[460px] xl:w-[22rem] xl:h-[28,75rem] space-y-8 items-start flex-col rounded-xl bg-base-100 p-6 xl:p-8">

                <h3 className="text-5xl font-[audiowide] min-w-full text-center py-5 text-secondary">PLA</h3>

                <ul role="list" className="mb-8 space-y-4 text-left text-secondary">
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Eco-Friendly"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Great detail"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Good for prototypes"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Good for decorative item"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="con" text="low heat resistance (softens at ~60°C)"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="con" text="Brittle compared to other plastics"/>
                    </li>
                </ul>

            </div>
            <div className="flex w-[280px] h-[460px] xl:w-[22rem] xl:h-[28,75rem] space-y-8 items-start flex-col rounded-xl bg-base-100 p-6 xl:p-8">

                <h3 className="text-5xl font-[audiowide] min-w-full text-center py-5 text-secondary">ABS</h3>

                <ul role="list" className="mb-8 space-y-4 text-left text-secondary">
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Strong and durable"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Higher heat resistance up to ~100°C"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Good for functional parts"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Good for car components"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="good for stronger prototypes"/>
                    </li>
                </ul>

            </div>
            <div className="flex w-[280px] h-[460px] xl:w-[22rem] xl:h-[28,75rem] çspace-y-8 items-start flex-col rounded-xl bg-base-100 p-6 xl:p-8">

                <h3 className="text-5xl font-[audiowide] min-w-full text-center py-5 text-secondary">PETG</h3>

                <ul role="list" className="mb-8 space-y-4 text-left text-secondary">
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Tough and flexible"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Chemical resistance (Withstands water and acids)"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Good for functional parts expose to stress, outdoor applications"/>
                    </li>
                    <li className="flex items-center space-x-3">
                        <ProsConsItem type="pro" text="Good for decorative items"/>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Plastic;
