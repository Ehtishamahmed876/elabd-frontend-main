"use client";

import { getDictionary } from "@/app/dictionariees";
import { useLanguage } from "@/languageContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
  // Add more languages as needed
]
const Navbar = () => {
  const { selectedLanguage, changeLanguage } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const [showNavLinks, setShowNavLinks] = useState(false);

  const toggleNav = () => {
    setShowNavLinks(!showNavLinks);
  };

  const handleLanguageChange = (languageCode) => {
    changeLanguage(languageCode);
    setIsDropdownOpen(false);
  };

  const [link1, setLink1] = useState("")
  const [link2, setLink2] = useState("")
  const [link3, setLink3] = useState("")
  const [link4, setLink4] = useState("")
  const [link5, setLink5] = useState("")
  const [link6, setLink6] = useState("")
  const [buttontext, setbuttontext] = useState("")


  useEffect(() => {
    const dictPromise =  getDictionary(selectedLanguage);
    dictPromise.then((dict) => {
     
    setLink1(dict?.navbar?.link1)
    setLink2(dict?.navbar?.link2)
    setLink3(dict?.navbar?.link3)
    setLink4(dict?.navbar?.link4)
    setLink5(dict?.navbar?.link5)
    setLink6(dict?.navbar?.link6)
    setbuttontext(dict?.navbar?.buttonText)

   }).catch((error) => {
     console.error("Error fetching dictionary:", error);
   });
  }, [selectedLanguage]);
  return (
    <nav className={` px-6  py-6 md:px-10 xl:px-16 bg-black bg-opacity-10  font-inter flex ${selectedLanguage == 'ar'?'flex-row-reverse':'flex-row'} justify-between  items-center `}>
      {/* Left side */}
      <Link href={"/"}>

      <div className="flex gap-2   items-center">
          <img
            src="/images/logo.png"
            alt="Elabd Logo"
            className="w-28  lg:w-40"
          />

        {/* <div className="z-20 flex flex-col">
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
        </div> */}

      </div>
      </Link>


      {/* Links */}
      <div className="hidden xl:block bg-white px-5 xl:px-10 rounded-full">
        <ul className={`flex ${selectedLanguage == 'ar'?'flex-row-reverse ':'flex-row'} text-2xl lg:text-4xl space-x-3 lg:space-x-10 mb-3`}>
          <li>
            <Link href={"/services"} legacyBehavior>
              <a href="#" className={`text-black font-[500] text-sm 2xl:text-[16px]  `}>
                {link1}
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/projects"} legacyBehavior>
              <a href="#" className={`text-black font-[500] text-sm 2xl:text-[16px]   `}>
                {link2}
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/clients"} legacyBehavior>
              <a href="#" className={`text-black font-[500] text-sm 2xl:text-[16px]   `}>
                {link3}
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/reviews"} legacyBehavior>
              <a href="#" className={`text-black font-[500] text-sm 2xl:text-[16px]   `}>
                {link4}
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/team"} legacyBehavior>
              <a href="#" className={`text-black font-[500] text-sm 2xl:text-[16px]   `}>
               {link5}
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/contact-us"} legacyBehavior>
              <a href="#" className={`text-black font-[500] text-sm 2xl:text-[16px]   `}>
               {link6}
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

      <div className="hidden xl:block space-y-2 ">
        <Link href={"/careers/home"}>
          <div className="bg-black flex justify-center items-center px-10 py-3   rounded-full">
            <p className="text-sm  2xl:text-[16px] text-white font-[500]">{buttontext} </p>
          </div>
        </Link>

        <div className='  relative  text-left'>
                  <div>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      type='button'
                      className='inline-flex justify-center items-center w-full rounded-md   px-4 py-2 bg-white text-sm font-medium text-gray-700 '
                    >
                      {languages.find((lang) => lang.code === selectedLanguage).flag} {selectedLanguage}
                      <svg
                        className='-mr-1 ml-2 h-5 w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          fillRule='evenodd'
                          d='M9.293 10.707a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0-1.414-1.414L10 8.586 7.707 6.293a1 1 0 1 0-1.414 1.414l3 3z'
                        />
                      </svg>
                    </button>
                  </div>

                  {isDropdownOpen && (
                    <div
                      className='origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                      <div className='py-1'>
                        {languages.map((language) => (
                          <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code)}
                            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                          >
                            {language.flag} {language.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
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
