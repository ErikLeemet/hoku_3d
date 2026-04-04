import React from "react";

const Service = () => {
  return (
    <div id="services" className="flex relative flex-col items-center justify-center font-thedusCLR rounded-b-[30px] min-h-screen sm:min-h-[600px] md:min-h-[700px] lg:min-h-[860px] bg-surface px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex w-full max-w-7xl mx-auto items-center justify-center">
        <div className="py-6 sm:py-8 lg:py-16 w-full">
          <div className="space-y-6 sm:space-y-8 lg:grid md:grid-cols-3 lg:space-y-0 lg:gap-6 xl:gap-8">
            <div className="flex max-w-lg space-y-6 sm:space-y-8 items-start flex-col rounded-3xl bg-panel p-6 sm:p-7 lg:p-8">
              <div className="my-4 sm:my-6 lg:my-8 flex w-full items-baseline justify-center">
                <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-thedusWLB text-body text-center">
                  3D PRINTIMINE
                </span>
              </div>

              <p className="w-full text-sm sm:text-base lg:text-lg text-muted">
                Protsess, mille käigus luuakse digitaalfaili põhjal kiht-kiht haaval kolmemõõtmelisi objekte, kasutades selleks materjale nagu plast, vaik või metall.
              </p>
            </div>
            <div className="flex max-w-lg space-y-6 sm:space-y-8 items-start flex-col rounded-3xl bg-panel p-6 sm:p-7 lg:p-8">
              <div className="my-4 sm:my-6 lg:my-8 flex w-full items-baseline justify-center">
                <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-thedusWLB text-body text-center">
                  GRAVEERIMINE
                </span>
              </div>

              <p className="w-full text-sm sm:text-base lg:text-lg text-muted">
                Motiivide, teksti või mustrite graveerimine sellistele pindadele nagu metall, puit või klaas.
              </p>
            </div>
            <div className="flex max-w-lg space-y-6 sm:space-y-8 items-start flex-col rounded-3xl bg-panel p-6 sm:p-7 lg:p-8">
              <div className="my-4 sm:my-6 lg:my-8 flex w-full items-baseline justify-center">
                <span className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-thedusWLB text-body text-center">
                  3D-modelleerimine
                </span>
              </div>

              <p className="w-full text-2xl sm:text-base lg:text-2xl text-muted text-center">
                VARSTI TULEKUL!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5 sm:w-3/4 md:w-1/2 h-[40px] sm:h-[50px] lg:h-[60px] bottom-0 absolute rounded-t-[30px] bg-surface-2">
      </div>
    </div>
  );
};

export default Service;
