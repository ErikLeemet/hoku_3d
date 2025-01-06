import React from "react";

const Service = () => {
  return (
    <div className="flex relative flex-col items-center justify-center font-[aino] rounded-b-[30px] h-[828px] bg-tahiti-gold">
      <div className="flex max-w-screen-xl mx-auto items-center justify-center">
        <div className=" px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto mb-8 max-w-screen-md lg:mb-12 text-center">
            <h2 className="mb-10 font-['audiowide'] text-4xl tracking-tight text-white">
              SERVICES
            </h2>
          </div>
          <div className="space-y-8  lg:grid md:grid-cols-3 lg:space-y-0 lg:gap-10">
            <div className="mx-auto  flex max-w-lg space-y-8 items-start flex-col rounded-3xl bg-nero p-6 xl:p-8">
              <div className="my-8 flex min-w-full items-baseline justify-center">
                <span className="mr-2 text-4xl font-[audiowide]">
                  3D PRINTING
                </span>
              </div>

              <p className="min-w-full xl:text-xl">
                A process of creating three-dimensional objects from a digital
                file, layer by layer, using materials like plastic, resin, or
                metal.
              </p>
            </div>
            <div className="mx-auto  flex max-w-lg space-y-8 items-start flex-col rounded-3xl bg-nero p-6 xl:p-8">
              <div className="my-8 flex min-w-full items-baseline justify-center">
                <span className="mr-2 text-4xl font-[audiowide]">
                  3D PRINTING
                </span>
              </div>

              <p className="min-w-full xl:text-xl">
                A process of creating three-dimensional objects from a digital
                file, layer by layer, using materials like plastic, resin, or
                metal.
              </p>
            </div>
            <div className="mx-auto  flex max-w-lg space-y-8 items-start flex-col rounded-3xl bg-nero p-6 xl:p-8">
              <div className="my-8 flex min-w-full items-baseline justify-center">
                <span className="mr-2 text-4xl font-[audiowide]">
                  3D PRINTING
                </span>
              </div>

              <p className="min-w-full xl:text-xl">
                A process of creating three-dimensional objects from a digital
                file, layer by layer, using materials like plastic, resin, or
                metal.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[500px] h-[60px] bottom-0 absolute rounded-t-[30px] bg-nero">
        <div className="relative before:absolute before:top-[20px] before:rounded-br-[30px] before:left-[-40px] before:bg-tahiti-gold before:h-[40px] before:w-[40px] before:shadow-[3px_15px_0px_1px_rgba(30,_30,_30,_1)] after:absolute after:top-[20px] after:rounded-bl-[30px] after:right-[-40px] after:bg-tahiti-gold after:h-[40px] after:w-[40px] after:shadow-[-3px_15px_0px_1px_rgba(30,_30,_30,_1)]"></div>
      </div>
    </div>
  );
};

export default Service;
