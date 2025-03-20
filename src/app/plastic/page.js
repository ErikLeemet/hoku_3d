import React from "react";

const Plastic = () => {
  return (
    <div className="flex items-center flex-col w-full h-screen bg-primary">
        <div className="mx-6 max-w-4xl flex flex-col">
      {/*title*/}
      <div className="flex gap-[1rem] items-center justify-center py-10">
        <div className="flex gap-[0.5rem]">
          <div className="w-[8px] h-[40px] bg-secondary"></div>
          <div className="w-[8px] h-[40px] bg-secondary"></div>
          <div className="w-[8px] h-[40px] bg-secondary"></div>
        </div>
        <span className="font-[thedusWLB] text-xl text-accent">Plastikud</span>
        <div className="flex gap-[0.5rem]">
          <div className="w-[8px] h-[40px] bg-secondary"></div>
          <div className="w-[8px] h-[40px] bg-secondary"></div>
          <div className="w-[8px] h-[40px] bg-secondary"></div>
        </div>
      </div>
        <div className="flex justify-center gap-4">
          {/*PLA*/}
          <div className="relative">
            <span className="font-[thedusWLB] text-secondary text-xs absolute inset-0 flex items-center justify-center pt-4">
              PLA
            </span>
            <svg
              width="62"
              height="56"
              viewBox="0 0 62 56"
              fill="none"
              className="stroke-secondary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.0311 3.75L60.0119 48.75C61.359 51.0833 59.6751 54 56.9808 54H5.01924C2.32494 54 0.640998 51.0833 1.98815 48.75L27.9689 3.75C29.3161 1.41667 32.6839 1.41667 34.0311 3.75Z"
                stroke-width="3"
              />
            </svg>
          </div>
          {/*ABS*/}
          <div className="relative">
            <span className="font-[thedusWLB] text-secondary text-xs absolute inset-0 flex items-center justify-center pt-4">
              ABS
            </span>
            <svg
              width="62"
              height="56"
              viewBox="0 0 62 56"
              fill="none"
              className="stroke-secondary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.0311 3.75L60.0119 48.75C61.359 51.0833 59.6751 54 56.9808 54H5.01924C2.32494 54 0.640998 51.0833 1.98815 48.75L27.9689 3.75C29.3161 1.41667 32.6839 1.41667 34.0311 3.75Z"
                stroke-width="3"
              />
            </svg>
          </div>
          {/*PETG*/}
          <div className="relative">
            <span className="font-[thedusWLB] text-secondary text-xs absolute inset-0 flex items-center justify-center pt-4">
              PETG
            </span>
            <svg
              width="62"
              height="56"
              viewBox="0 0 62 56"
              fill="none"
              className="stroke-secondary"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.0311 3.75L60.0119 48.75C61.359 51.0833 59.6751 54 56.9808 54H5.01924C2.32494 54 0.640998 51.0833 1.98815 48.75L27.9689 3.75C29.3161 1.41667 32.6839 1.41667 34.0311 3.75Z"
                stroke-width="3"
              />
            </svg>
          </div>
        </div>
        <div className="font-[thedusCLR] text-lg text-secondary p-6">
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
    </div>
  );
};

export default Plastic;
