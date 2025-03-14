"use client"; // This is a client-side only component
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const smoothScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="responsive h-[1.5] box-border py-[0.5] px-[1.25rem] flex flex-none items-center font-['thedusCLR'] z-10">
      <div className="w-full flex">
        <img
          src="/Blogo.svg"
          alt="HOKU3D Logo"
          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14"
        />
        <span className="flex items-center invisible md:visible text-2xl md:text-3xl pl-4 font-['thedusWLR']">
          HOKU<span className="font-['thedusWLB'] text-accent">3D</span>
        </span>
      </div>
      {isMobile ? (
        <div className="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            className="btn p-0 m-1 bg-transparent hover:bg-transparent shadow-none border-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            className="menu dropdown-content bg-nero rounded-md mr-1 text-xl"
          >
            <li>
              <a onClick={() => smoothScroll("/")}>Home</a>
            </li>
            <li>
              <a onClick={() => smoothScroll("About")}>About</a>
            </li>
            <li>
              <a onClick={() => smoothScroll("Services")}>Services</a>
            </li>
            <li>
              <a onClick={() => smoothScroll("Contact")}>Contact</a>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex gap-2 justify-center items-center">
          <a
            onClick={() => smoothScroll("home")}
            className="btn w-[100px] bg-transparent btn-xs border-transparent hover:border-transparent hover:bg-transparent shadow-transparent hover:text-tahiti-gold sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => smoothScroll("about")}
            className="btn w-[100px] bg-transparent btn-xs border-transparent hover:border-transparent hover:bg-transparent shadow-transparent hover:text-tahiti-gold sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl cursor-pointer"
          >
            About
          </a>
          <a
            onClick={() => smoothScroll("services")}
            className="btn w-[100px] bg-transparent btn-xs border-transparent hover:border-transparent hover:bg-transparent shadow-transparent hover:text-tahiti-gold sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl cursor-pointer"
          >
            Services
          </a>
          <a
            onClick={() => smoothScroll("contact")}
            className="btn w-[100px] bg-transparent btn-xs border-transparent hover:border-transparent shadow-transparent hover:text-tahiti-gold hover:bg-transparent sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl  cursor-pointer"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
