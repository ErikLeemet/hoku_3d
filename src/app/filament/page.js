import React from "react";

const Filament = () => {
  return (
    <div className="bg-main rounded-xl h-[1600px] xl:h-[900px] flex flex-col justify-end font-[aino]">
      <div className="relative responsive">
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="space-y-8 lg:grid md:grid-cols-3 lg:space-y-0 lg:gap-10">
            <div
                className=" mx-auto flex min-w-[18rem] space-y-8 items-start flex-col rounded-xl bg-background p-6 xl:p-8">

                <h3 className="text-5xl font-[audiowide] min-w-full text-center py-5">PLA</h3>

                <ul role="list" className="mb-8 space-y-4 text-left text-white">
                    <li className="flex items-center space-x-3">
                        <img className="h-6 w-6" src="check.svg" alt="check" />
                        <span>Eco-Friendly</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <img className="h-6 w-6" src="check.svg" alt="check" />
                        <span>Great detail</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <img className="h-6 w-6" src="check.svg" alt="check" />
                        <span>Good for prototypes</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <img className="h-6 w-6" src="check.svg" alt="check" />
                        <span>Good for decorative items</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <img className="h-6 w-6" src="x.svg" alt="x" />
                        <span>low heat resistance (softens at ~60°C)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <img className="h-6 w-6" src="x.svg" alt="x" />
                        <span>Brittle compared to other plastics</span>
                    </li>
                </ul>

            </div>
            <div
                className=" mx-auto flex min-w-[18rem] space-y-8 items-start flex-col rounded-xl bg-background p-6 xl:p-8">

                <h3 className="text-5xl font-[audiowide] min-w-full text-center py-5">ABS</h3>

                <ul role="list" className="mb-8 space-y-4 text-left text-white">
                    <li className="flex items-center space-x-3">
                        <img className="h-6 w-6" src="check.svg" alt="check" />
                        <span>Strong and durable</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <img className="h-6 w-6" src="check.svg" alt="check" />
                        <span>Higher heat resistance up to ~100°C</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <img className="h-6 w-6" src="check.svg" alt="check" />
                        <span>Good for functional part</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <img className="h-6 w-6" src="check.svg" alt="check" />
                        <span>Good for car components</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <img className="h-6 w-6" src="check.svg" alt="check" />
                        <span>good for stronger prototypes</span>
                    </li>
                </ul>

            </div><div
                className=" mx-auto flex min-w-[18rem] space-y-8 items-start flex-col rounded-xl bg-background p-6 xl:p-8">

                <h3 className="text-5xl font-[audiowide] min-w-full text-center py-5">PETG</h3>

                <ul role="list" className="mb-8 space-y-4 text-left text-white">
                    <li className="flex items-center space-x-3">
                        <img className="h-6 w-6" src="check.svg" alt="check" />
                        <span>Tough and flexible</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <img className="h-6 w-6" src="check.svg" alt="check" />
                        <span>Chemical resistance
                        (Withstands water and acids)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <img className="h-6 w-6" src="check.svg" alt="check" />
                        <span>Good for functional parts expose to stress, outdoor applications</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <img className="h-6 w-6" src="check.svg" alt="check" />
                        <span>Good for decorative items</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <img className="h-6 w-6" src="x.svg" alt="x" />
                        <span>low heat resistance (softens at ~60°C)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                    <img className="h-6 w-6" src="x.svg" alt="x" />
                        <span>Brittle compared to other plastics</span>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
    <img className="invisible xl:visible px-2 pb-2 pt-[60px]" src="bar.svg" alt="bar" />
    </div>
  );
};

export default Filament;
