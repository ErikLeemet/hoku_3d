import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full">
      <footer className="flex flex-col w-full mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between md:px-6 items-center border-b-2 border-neutral pb-6">
          <h1 className="text-2xl md:text-3xl font-['thedusWLB'] text-accent">
            We can print em all
          </h1>
          <div className="flex items-center gap-2">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              className="fill-accent"
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
            <a className="text-xl font-light ">info@hoku3d.com</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:px-6 items-center">
          <div className="flex gap-2 justify-center items-center py-6">
            <a className="btn w-[70px] md:w-[100px] font-['thedusCLR'] bg-transparent btn-xs text-2xl border-transparent hover:border-transparent hover:bg-transparent shadow-transparent hover:text-tahiti-gold cursor-pointer">
              Home
            </a>
            <a className="btn w-[70px] md:w-[100px] font-['thedusCLR'] bg-transparent btn-xs text-2xl border-transparent hover:border-transparent hover:bg-transparent shadow-transparent hover:text-tahiti-gold cursor-pointer">
              About
            </a>
            <a className="btn w-[70px] md:w-[100px] font-['thedusCLR'] bg-transparent btn-xs text-2xl border-transparent hover:border-transparent hover:bg-transparent shadow-transparent hover:text-tahiti-gold cursor-pointer">
              Services
            </a>
            <a className="btn w-[70px] md:w-[100px] font-['thedusCLR'] bg-transparent btn-xs text-2xl border-transparent hover:border-transparent shadow-transparent hover:text-tahiti-gold hover:bg-transparent cursor-pointer">
              Contact
            </a>
          </div>
          <p className="flex items-center font-['thedusCLR'] text-2xl text-neutral-600">
            © {new Date().getFullYear()} Hoku 3D. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
