import Service from "./service/page.js";
import Gallery from "./gallery/page.js";
import Navbar from "./components/Navbar.js";
import Filament from "./filament/page.js";

export default function Home() {
  return (
    <div className="main-container responsive relative overflow-hidden mx-auto my-0">
      <div className="relative responsive h-screen box-border flex flex-col mt-0 mr-0 mb-0 ml-0 inline-[0px] items-center justify-center">
        <Navbar />
        <div className="hero bg-base-100 flex-1 max-w-[260px]">
          <div className="hero-content p-0">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold font-['thedusWLB'] text-accent">Täpsus ja kvaliteet igas detailis</h1>
              <p className="py-6 font-['thedusCLR'] text-secondary">
                3D-printimine ja graveerimine sinu ideede elluviimiseks. Kujunda detaile, kohanda esemeid ja loo midagi ainulaadset.
              </p>
              <div className="gap-5 w-full flex justify-center">
                <button className="btn btn-secondary min-w-[120px] min-h-[50px] flex-auto border-0 text-primary font-['thedusCLR'] duration-300 ease-in-out hover:bg-primary hover:text-secondary hover:border-2 hover:border-secondary">teenused</button>
                <button className="btn btn-secondary min-w-[120px] min-h-[50px] flex-auto border-0 text-primary font-['thedusCLR'] duration-300 ease-in-out hover:bg-primary hover:text-secondary hover:border-2 hover:border-secondary">kontakt</button>
              </div>
              <img src="v1_WAVE.svg" alt="wave" className="absolute top-0 right-5 z-[-10] opacity-75"/>
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
