import Service from "./service/page.js";
import Gallery from "./gallery/page.js";
import Navbar from "./components/Navbar.js";

export default function Home() {
  return (
    <div className="main-container w-[360px] sm:w-[560px] md:w-[1000px] lg:w-[1440px] bg-[#1e1e1e] relative overflow-hidden mx-auto my-0">
      <div className="w-[360px] sm:w-[560px] md:w-[1000px] lg:w-[1440px] h-screen box-border flex flex-col bg-the-wave-dark bg-no-repeat bg-cover mt-0 mr-0 mb-0 ml-0 inline-[0px]">
        <Navbar />
        <div className="w-[360px] sm:w-[560px] md:w-[1000px] lg:w-[1440px] h-full px-4 md:px-16 pb-[90px] box-border flex flex-col items-center md:items-start">
          <span className="font-['audiowide'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#fff] text-left my-auto py-8 box-border">
            START <br />
            3D PRINTING
            <br />
            TODAY
          </span>
          <div className="w-full h-12 mt-4 flex itmes-center justify-center md:justify-between">
            <button className="w-40 md:w-52 h-10 lg:w-72 relative">
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded-lg bg-black"></span>
              <span className="fold-bold relative inline-block h-full w-full rounded-lg border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-tahiti-gold hover:text-white">
                Services
              </span>
            </button>
            <div className="h-12 w-42  hidden md:block">
              <img src="/wave.svg" alt="wave"/>
            </div>
          </div>
        </div>
      </div>
      <Service />
    </div>
  );
}
