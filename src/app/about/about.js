import React from "react";

const About = () => {
  return (
      <div className="flex flex-col justify-center items-center w-full min-h-screen py-12 bg-primary">
              <div className="font-[thedusCLR] justify-center items-center text-lg text-secondary ">
          <div className="flex gap-4 justify-center items-center w-full p-6 pl-6 py-6">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-secondary"
            >
              <path d="M10.268 19.5C11.0378 20.8333 12.9623 20.8333 13.7321 19.5L23.2583 3C24.0281 1.66667 23.0659 0 21.5263 0H2.47372C0.934118 0 -0.0281308 1.66667 0.74167 3L10.268 19.5Z" />
            </svg>
            <h3 className="font-[thedusWLB] text-accent flex justify-center items-center w-full text-5xl">About us</h3>
          </div>
          
            <p className="flex items-center justify-center p-6 pl-6 py-6 text-2xl">Hoku3D is a small 3D printing service based in Saaremaa. We specialize in made-to-order prints using a limited selection of high-quality black and white filaments. Customers can also request custom colors and engraving for an extra cost. Whether you need a one-off item, a prototype, or something personal, we keep it simple, fast, and local.</p>
        </div>
        <div className="flex gap-4 justify-center items-center w-full p-6 pl-6 py-6">
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
            <h3 className="font-[thedusWLB] text-secondary justify-center flex items-center w-full text-5xl">The team</h3>
          </div>
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-10">
            
            <div className="flex w-[280px] h-[460px] xl:w-[22rem] xl:h-[28,75rem] space-y-8 items-start flex-col rounded-xl bg-base-100 p-6 xl:p-8">

                <h3 className="text-3xl font-[audiowide] min-w-full text-center py-5 text-secondary">Erik Leemet</h3>

                

            </div>
            <div className="flex w-[280px] h-[460px] xl:w-[22rem] xl:h-[28,75rem] çspace-y-8 items-start flex-col rounded-xl bg-base-100 p-6 xl:p-8">

                <h3 className="text-3xl font-[audiowide] min-w-full text-center py-5 text-secondary">Marcus Riisik</h3>

                
            </div>
        </div>
      
            <div className="flex flex-col items-center w-full py-12 bg-primary">
              <span className="font-[thedusCLB] text-5xl text-accent">
                Kill yourself
              </span>
              
            </div>
            
      </div>
    );
  };
  

export default About;
