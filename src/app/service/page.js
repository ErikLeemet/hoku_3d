import React from "react";

const Service = () => {
    return (
        <div id="services" className="grid grid-cols-[1fr_1fr_1fr_auto_1fr_1fr_1fr] grid-rows-3 place-items-center items-center justify-center font-thedusCLR rounded-b-[30px] min-h-screen sm:min-h-[600px] md:min-h-[700px] lg:min-h-[860px] bg-surface px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
                <div className="col-start-2 row-start-1 bg-gray-300 p-4">
                    Item 1
                </div>

                <div className="col-start-6 row-start-2 bg-gray-300 p-4">
                    Item 2
                </div>

                <div className="col-start-2 row-start-3 bg-gray-300 p-4">
                    Item 3
                </div>
                {/* Decoration */}
                <div className="col-start-4 row-start-1 row-span-4 w-[6px] h-full bg-neutral"></div>
                <div className="col-start-3 row-start-1 bg-neutral w-full h-[6px]"></div>
                <div className="col-start-5 row-start-2 bg-neutral w-full h-[6px]"></div>
                <div className="col-start-3 row-start-3 bg-neutral w-full h-[6px]"></div>
        </div>
    );
};

export default Service;
