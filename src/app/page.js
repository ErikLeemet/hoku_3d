import Service from "./service/page.js";
import Gallery from "./gallery/page.js";
import Navbar from "./components/Navbar.js";
import Filament from "./filament/page.js";

export default function Home() {
  return (
    <div className="main-container responsive relative overflow-hidden mx-auto my-0">
      <div className="responsive h-screen box-border flex flex-col bg-[url(/thewave.png)] bg-no-repeat bg-cover mt-0 mr-0 mb-0 ml-0 inline-[0px]">
        <Navbar />
        <div className="responsive h-full px-4 md:px-16 pb-[90px] box-border flex flex-col items-center md:items-start">
          <span className="font-['audiowide'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-left my-auto py-8 box-border tracking-wide">
            START <br />
            3D PRINTING
            <br />
            TODAY
          </span>
          <div className="w-full h-12 mt-4 flex itmes-center justify-center md:justify-between">
            <button class="btn btn-outline w-64 text-xl tracking-wider ">
              Services
            </button>
            <div className="h-12 w-42  hidden md:block">
              <img src="/wave.svg" alt="wave" />
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Gallery />
      <Filament />
    </div>
  );
}
