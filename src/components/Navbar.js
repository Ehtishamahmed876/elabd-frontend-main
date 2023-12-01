"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNav = () => {
    setShowNavLinks(!showNavLinks);
  };
  return (
    <nav className=" px-6  py-6 md:px-10 xl:px-16 bg-black bg-opacity-10  font-inter flex justify-between  items-center ">
      {/* Left side */}
      <Link href={"/"}>

      <div className="flex gap-2   items-center">
          <img
            src="/images/logo.svg"
            alt="Getwick Logo"
            className="2xl:w-16 2xl:h-16 w-10 h-10"
          />

        <div className="z-20 flex flex-col">
          <p
            className={`text-black   font-[700] leading-none md:text-2xl  2xl:text-[32px]  `}
          >
            Elabd Tech<span className="text-[#35D373]">.</span>
          </p>
          <p
            className={`text-[#35D373]  leading-none text-sm 2xl:text-[16px] lg:font-[500]`}
          >
            Serving the World
          </p>
        </div>

      </div>
      </Link>


      {/* Links */}
      <div className="hidden xl:block bg-white px-5 xl:px-10 rounded-full">
        <ul className="flex text-2xl lg:text-4xl space-x-3 lg:space-x-10 mb-3">
          <li>
            <Link href={"/services"} legacyBehavior>
              <a href="#" className={`text-black font-[500] text-sm 2xl:text-[16px]  `}>
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/projects"} legacyBehavior>
              <a href="#" className={`text-black font-[500] text-sm 2xl:text-[16px]   `}>
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/clients"} legacyBehavior>
              <a href="#" className={`text-black font-[500] text-sm 2xl:text-[16px]   `}>
                Clients
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/reviews"} legacyBehavior>
              <a href="#" className={`text-black font-[500] text-sm 2xl:text-[16px]   `}>
                Reviews
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/team"} legacyBehavior>
              <a href="#" className={`text-black font-[500] text-sm 2xl:text-[16px]   `}>
                Our Team
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/contact-us"} legacyBehavior>
              <a href="#" className={`text-black font-[500] text-sm 2xl:text-[16px]   `}>
                Contact Us
              </a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Right side */}
      <div className="xl:hidden">
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div className="hidden xl:block ">
        <Link href={"/careers/home"}>
          <div className="bg-black flex justify-center items-center px-10 py-3   rounded-full">
            <p className="text-sm  2xl:text-[16px] text-white font-[500]">Careers </p>
          </div>
        </Link>
      </div>

      {showNavLinks && (
        <div className="px-2 flex items-center justify-around pt-2 pb-4 space-y-2 z-10 h-48   w-[94%] md:w-[93%] absolute bg-[#35D373] top-[6rem] right-3  md:top-[7rem] md:left-8  xl:hidden">
          <div className=" p-5 ">
            <li>
              <Link href={"/services"} legacyBehavior>
                <a href="#" className={`text-white font-[500] text-[13px]  `}>
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/projects"} legacyBehavior>
                <a href="#" className={`text-white font-[500] text-[13px]   `}>
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/clients"} legacyBehavior>
                <a href="#" className={`text-white font-[500] text-[13px]   `}>
                  Clients
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/reviews"} legacyBehavior>
                <a href="#" className={`text-white font-[500] text-[13px]   `}>
                  Reviews
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/team"} legacyBehavior>
                <a href="#" className={`text-white font-[500] text-[13px]   `}>
                  Our Team
                </a>
              </Link>
            </li>
            <li>
              <Link href={"/contact-us"} legacyBehavior>
                <a href="#" className={`text-white font-[500] text-[13px]   `}>
                  Contact Us
                </a>
              </Link>
            </li>
          </div>
          <div className=" flex flex-col gap-2 items-start ">
            <Link href={"/careers/home"}>
              <div className="bg-black flex justify-center items-center w-24 h-8 rounded-3xl">
                <p className="text-[13px] text-white font-[500]">Careers </p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
