import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full bg-surface-2">
      <footer className="flex flex-col w-full mx-auto max-w-6xl py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center border-b-2 border-neutral pb-4 sm:pb-6 gap-4 sm:gap-6">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-thedusWLB text-accent text-center md:text-left">
            Täpsus ja kvaliteet igas detailis
          </h1>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <svg
              width="28"
              height="28"
              viewBox="0 0 35 35"
              className="fill-accent w-7 h-7 sm:w-8 sm:h-8"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.2957 24.0969H10.8207C9.9107 24.0969 9.1582 23.3444 9.1582 22.4344V12.4594C9.1582 11.5494 9.9107 10.7969 10.8207 10.7969H24.2957C25.2057 10.7969 25.9582 11.5494 25.9582 12.4594V22.4344C25.9582 23.3444 25.2057 24.0969 24.2957 24.0969ZM10.8207 11.4969C10.2957 11.4969 9.8582 11.9344 9.8582 12.4594V22.4344C9.8582 22.9594 10.2957 23.3969 10.8207 23.3969H24.2957C24.8207 23.3969 25.2582 22.9594 25.2582 22.4344V12.4594C25.2582 11.9344 24.8207 11.4969 24.2957 11.4969H10.8207Z"
              />
              <path
                d="M17.5577 19.6181C17.4702 19.6181 17.3827 19.5831 17.3127 19.5131L11.7827 13.9831C11.6427 13.8431 11.6427 13.6331 11.7827 13.4931C11.9227 13.3531 12.1327 13.3531 12.2727 13.4931L17.5577 18.7606L22.9477 13.3706C23.0877 13.2306 23.2977 13.2306 23.4377 13.3706C23.5777 13.5106 23.5777 13.7206 23.4377 13.8606L17.8027 19.5131C17.7327 19.5831 17.6452 19.6181 17.5577 19.6181Z"
              />
              <path
                d="M12.0805 21.385C11.993 21.385 11.9055 21.35 11.8355 21.28C11.6955 21.14 11.6955 20.93 11.8355 20.79L15.458 17.1675C15.598 17.0275 15.808 17.0275 15.948 17.1675C16.088 17.3075 16.088 17.5175 15.948 17.6575L12.343 21.28C12.273 21.35 12.168 21.385 12.0805 21.385ZM23.2105 21.385C23.123 21.385 23.0355 21.35 22.9655 21.28L19.343 17.6575C19.203 17.5175 19.203 17.3075 19.343 17.1675C19.483 17.0275 19.693 17.0275 19.833 17.1675L23.4555 20.79C23.5955 20.93 23.5955 21.14 23.4555 21.28C23.3855 21.35 23.298 21.385 23.2105 21.385Z"
              />
            </svg>
            <a className="text-xl sm:text-xl font-thedusCLR text-neutral">info@hoku3d.com</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between pb-2 items-center gap-4 sm:gap-6">
          <div className="flex gap-1 sm:gap-2 justify-center md:justify-start items-center py-4 sm:py-5 flex-wrap">
            <button className="px-3 sm:px-4 py-1 sm:py-2 font-thedusCLR text-sm sm:text-lg md:text-xl lg:text-2xl text-neutral transition hover:text-accent">
              Avaleht
            </button>
            <button className="px-3 sm:px-4 py-1 sm:py-2 font-thedusCLR text-sm sm:text-lg md:text-xl lg:text-2xl text-neutral transition hover:text-accent">
              Meist
            </button>
            <button className="px-3 sm:px-4 py-1 sm:py-2 font-thedusCLR text-sm sm:text-lg md:text-xl lg:text-2xl text-neutral transition hover:text-accent">
              Teenused
            </button>
            <button className="px-3 sm:px-4 py-1 sm:py-2 font-thedusCLR text-sm sm:text-lg md:text-xl lg:text-2xl text-neutral transition hover:text-accent">
              Kontakt
            </button>
          </div>
          <p className="flex items-center font-thedusCLR text-xs sm:text-sm md:text-lg text-neutral text-center md:text-right">
            © Hoku 3D. Kõik õigused kaitstud.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
