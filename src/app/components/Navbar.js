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
    <nav className="responsive h-28 box-border py-4 px-16 flex items-center font-['aino']">
      <div className="w-full flex">
        <img src="/logo.svg" alt="HOKU3D Logo" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14" />
        <span className="flex items-center text-xl sm:text-2xl md:text-3xl pl-4 font-['ainohead']">HOKU3D</span>
      </div>
      {isMobile ? (
        <div className="dropdown dropdown-end">
          <div tabindex="0" role="button" className="btn m-1 bg-transparent hover:bg-transparent shadow-none border-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <ul tabindex="0" className="menu dropdown-content bg-nero rounded-md mr-1 text-xl">
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
          <a onClick={() => smoothScroll("home")} className="btn w-[100px] bg-transparent btn-xs border-transparent hover:border-transparent hover:bg-transparent shadow-transparent hover:text-tahiti-gold sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl cursor-pointer">
            Home
          </a>
          <a onClick={() => smoothScroll("about")} className="btn w-[100px] bg-transparent btn-xs border-transparent hover:border-transparent hover:bg-transparent shadow-transparent hover:text-tahiti-gold sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl cursor-pointer">
            About
          </a>
          <a
            onClick={() => smoothScroll("services")}
            className="btn w-[100px] bg-transparent btn-xs border-transparent hover:border-transparent hover:bg-transparent shadow-transparent hover:text-tahiti-gold sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl cursor-pointer"
          >
            Services
          </a>
          <a onClick={() => smoothScroll("contact")} className="btn w-[100px] bg-transparent btn-xs border-transparent hover:border-transparent shadow-transparent hover:text-tahiti-gold hover:bg-transparent sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl  cursor-pointer">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
