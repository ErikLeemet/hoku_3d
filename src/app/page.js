import Service from "./service/page.js";
import Gallery from "./gallery/page.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Plastic from "./plastic/page.js";
import Contact from "./contact/page.js";
import About from "./about/about.js";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Navbar />
      <div id="home" className="relative responsive h-screen box-border flex flex-col mt-0 mr-0 mb-0 ml-0 inline-[0px] items-center justify-center">
        <div className="hero bg-base-100 flex-1 max-w-[260px] lg:max-w-[1000px]">
          <div className="hero-content p-0">
            <div className="max-w-md lg:max-w-[1000px] flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold font-['thedusWLB'] text-accent lg:text-5xl lg:whitespace-nowrap">Täpsus ja kvaliteet igas detailis</h1>
              <p className="py-6 font-['thedusCLR'] text-secondary lg:text-2xl lg:text-center lg:max-w-[550px]">
                3D-printimine ja graveerimine sinu ideede elluviimiseks. Kujunda detaile, kohanda esemeid ja loo midagi ainulaadset.
              </p>
              <div className="gap-5 w-full flex justify-center">
                <button className="btn btn-secondary min-w-[7.5rem] text-xl pb-2 lg:max-w-[11.25rem] min-h-[50px] flex-auto border-0 text-primary font-['thedusCLR'] duration-300 ease-in-out hover:bg-primary hover:text-secondary hover:border-2 hover:border-secondary">teenused</button>
                <button className="btn btn-secondary min-w-[7.5rem] text-xl pb-2 lg:max-w-[11.25rem] min-h-[50px] flex-auto border-0 text-primary font-['thedusCLR'] duration-300 ease-in-out hover:bg-primary hover:text-secondary hover:border-2 hover:border-secondary">kontakt</button>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="195"
                height="886"
                viewBox="0 0 195 886"
                fill="currentColor"
                className="absolute top-0 right-5 z-[-10] fill-accent opacity-75"
                  >
                <path
                opacity="0.5"
                fillRule="evenodd"
                clipRule="evenodd"
                  d="M0 837.474L0 886H76.098H76.3186V885.779L194.633 767.465L194.057 766.89L194.099 766.89L194.121 687.58L150.288 687.568L150.274 739.035L51.8353 837.474H0ZM0 211.127L0 162.601H74.9952V56.6418H119.11L119.11 205.613L149.99 236.493V-35.9993H194.105V280.608L194.633 281.136L194.056 281.712H194.099L194.112 329.147L150.279 329.159L150.274 309.566L51.8353 211.127H0ZM0 -35.9993L0 153.694H44.1148V-35.9993H0ZM132.344 567.355V450.366L76.3186 506.392V506.613H76.098H0L0 458.086H51.8353L150.274 359.648L150.279 339.02L194.112 339.032L194.099 387.502H194.056L194.633 388.078L154.402 428.309V589.412L194.633 629.643L194.057 630.219L194.099 630.219L194.113 682.503L150.28 682.515L150.274 658.073L51.8352 559.635H0L0 511.108H76.098H76.3186V511.329L132.344 567.355ZM149.99 736.01H17.6459L17.6459 687.483H149.99V736.01Z"
                  />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Service />
      <Plastic />
      <Gallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
