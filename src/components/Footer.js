import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#2F2F2F]  w-[97%] md:w-[99%] mb-1  mx-auto mt-0 p-4 xl:p-16">
      <div className="xl:space-x-24 flex flex-col xl:flex-row ">
        <div className="xl:w-[20%] space-y-4 md:space-y-8 2xl:space-y-16">
          <div className="flex gap-2   items-center">
            <img
              src="/images/logo.svg"
              alt="Getwick Logo"
              className="w-10 h-10  2xl:w-16 2xl:h-16 "
            />
            <div className="z-20 flex flex-col">
              <p
                className={`text-white   font-[700] leading-none text-2xl  2xl:text-[32px]  `}
              >
                Elabd Tech<span className="text-[#35D373]">.</span>
              </p>
            </div>
          </div>
          <p className="text-sm 2xl:text-[16px]   font-[400] text-[#CFD3D7]">
            Working with client and community, We deliver masterpeices that
            create vibrant new design and ideas, attract people, and
            encourage. Specialized in UI/UX, iOS Apps, Android Apps, Content
            Writing, Animations and Website Development.
          </p>

          <div className="lg:mt-2 mt-5 flex gap-3">
            <Link href={'https://www.facebook.com/elabdtech'} target="_blank">
            <div className="bg-gradient-to-r  from-[#35D373] to-[#1C9E76] p-2 2xl:w-16 rounded-md">
              <img src="/images/fb.png" className="  w-8 h-8 2xl:w-16 2xl:h-12" />
            </div>
            </Link>
            <div className="bg-gradient-to-r  from-[#35D373] to-[#1C9E76] p-2 2xl:w-16 rounded-md">
              <img
                src="/images/twetr.png"
                className="  w-8 h-8 2xl:w-16 2xl:h-12"
              />
            </div>
            <div className="bg-gradient-to-r  from-[#35D373] to-[#1C9E76] p-2 2xl:w-16 rounded-md">
              <img
                src="/images/insta.png"
                className="  w-8 h-8 2xl:w-16 2xl:h-12"
              />
            </div>
          </div>
        </div>

        <div className="flex xl:w-[28%] justify-around">
          <div className="md:w-[30%] flex flex-col gap-4 2xl:gap-8 mt-10">
            <h1 className="font-[700] text-[16px] text-[#35D373] ">
              Useful Links
            </h1>
            <Link href={"/"}>
              <p className="font-[500] text-sm 2xl:text-[16px] text-[#CFD3D7]  ">Home</p>
            </Link>
            <Link href={"/services"}>
              <p className="font-[500] text-sm 2xl:text-[16px] text-[#CFD3D7]  ">
                Services
              </p>
            </Link>
            <Link href={"/projects"}>
              <p className="font-[500] text-sm 2xl:text-[16px] text-[#CFD3D7]  ">
                Projects
              </p>
            </Link>
            <Link href={"/clients"}>
              <p className="font-[500] text-sm 2xl:text-[16px] text-[#CFD3D7]  ">Clients</p>
            </Link>
            <Link href={"/reviews"}>
              <p className="font-[500] text-sm 2xl:text-[16px] text-[#c2d6eb]  ">Reviews</p>
            </Link>
            <Link href={"/team"}>
              <p className="font-[500] text-sm 2xl:text-[16px] text-[#CFD3D7]  ">
                Our Team
              </p>
            </Link>
            <Link href={"/careers/home"}>
              <p className="font-[500] text-sm 2xl:text-[16px] text-[#CFD3D7]  ">Careers</p>
            </Link>
          </div>

          <div className="lg:w-[40%] 2xl:w-[35%] flex flex-col gap-4 2xl:gap-8 mt-10 ">
            <h1 className="font-[700] text-[16px] text-[#35D373] ">About Us</h1>
            <Link href={"/privacy-policy"}>
              <p className="font-[500] text-sm 2xl:text-[16px] text-[#CFD3D7]  ">
                Privacy Policy
              </p>
            </Link>
            <Link href={"/terms"}>
              <p className="font-[500] text-sm 2xl:text-[16px] text-[#CFD3D7]  ">
                Terms & Condition
              </p>
            </Link>
            <Link href={"/about-us"}>
              <p className="font-[500] text-sm 2xl:text-[16px] text-[#CFD3D7]  ">
                About Us
              </p>
            </Link>
            <Link href={"/contact-us"}>
              <p className="font-[500] text-sm 2xl:text-[16px] text-[#CFD3D7]  ">
                Contact Us
              </p>
            </Link>
          </div>
        </div>

        <div className="lg:space-y-10 space-y-5 xl:w-[35%] mt-10">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13285.303280601507!2d73.04058!3d33.6487186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df953b03d7e80f%3A0x7337a5a7cf12fb07!2sElabd%20Technologies!5e0!3m2!1sen!2s!4v1700639619568!5m2!1sen!2s"   className="w-full h-48 lg:h-full"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </div>
      <div className="bg-[#21AC77] w-[95%] mt-10  md:mt-20 h-[1px]"></div>

      <div className="mt-10 w-[95%] flex flex-col-reverse xl:flex-row gap-5 md:gap-0 justify-between items-center">
        <p className="text-sm 2xl:text-[16px]   font-[400] text-[#CFD3D7]">
          Copyright @elabadtech 2020-2023
        </p>

        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20">
          <div className="flex gap-3 2xl:gap-5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#21AC77]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <p className=" text-sm 2xl:text-[16px]   font-[400] text-[#CFD3D7]">
              Office No 02, Munawar Plaza, I-10 Islmabad
            </p>
          </div>
          <div className="flex gap-3 2xl:gap-5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#21AC77]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <p className="text-sm  2xl:text-[16px]   font-[400] text-[#CFD3D7]">
              elabdtech@gmail.com
            </p>
          </div>
          <div className="flex gap-3 2xl:gap-5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#21AC77]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>

            <p className="text-sm 2xl:text-[16px]   font-[400] text-[#CFD3D7]">
              +92 332 0661463
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
