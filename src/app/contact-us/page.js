"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/languageContext";

import React, { useEffect, useState } from "react";
import { getDictionary } from "../dictionariees";

const page = () => {
  const { selectedLanguage } = useLanguage();

  const [heading, setheading] = useState("");
  const [subheading, setsubheading] = useState("");
  const [emailheading, setemailheading] = useState("");
  const [subjectheading, setsubjectheading] = useState("");
  const [commentheading, setcommentheading] = useState("");
  const [btntext, setbtntext] = useState("");
  const [phoneheading, setphoneheading] = useState("");
  const [addressheading, setaddressheading] = useState("");

  // Assuming getDictionary returns a Promise
  useEffect(() => {
    const dictPromise = getDictionary(selectedLanguage);
    dictPromise
      .then((dict) => {
        setheading(dict?.contact?.heading);
        setsubheading(dict?.contact?.subheading);
        setemailheading(dict?.contact?.emailheading);
        setsubjectheading(dict?.contact?.subjectheading);
        setcommentheading(dict?.contact?.commentheading);
        setbtntext(dict?.contact?.btntext);
        setphoneheading(dict?.contact?.phoneheading);
        setaddressheading(dict?.contact?.addressheading);
      })
      .catch((error) => {
        console.error("Error fetching dictionary:", error);
      });
  }, [selectedLanguage]);

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");

  const sendEmail = () => {
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=elabdtech@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(comment)}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <div className="m-3">
      <div className="bg-white ">
        <Navbar />
        <div className={`p-4 py-10 lg:p-16 flex flex-col  ${selectedLanguage== "ar"?"lg:flex-row-reverse":"lg:flex-row"} justify-around`}>
          <form
            onSubmit={sendEmail}
            className={`p-4 lg:p-10 rounded-xl flex flex-col ${selectedLanguage == 'ar'?"items-end text-end lg:w-[26rem]":"item-start text-start"} gap-5 bg-[#383838]`}
          >
            <h1 className="text-[30px] text-[#21AC77] font-[600]">{heading}</h1>
            <p className="text-[18px] text-white font-[400]">{subheading}</p>

            <div className="mt-5 w-full">
              <p className="text-[16px] text-white font-[500]">
                {emailheading}
              </p>
              <input
                type="text"
                id="user_email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-[#C5C5C5] border-opacity-20 text-white bg-[#383838] p-3 rounded-lg outline-none"
              />
            </div>
            <div className="mt-5 w-full">
              <p className="text-[16px] text-white font-[500]">
                {subjectheading}
              </p>
              <input
                type="text"
                id="user_subject"
                value={subject}
                required
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border border-[#C5C5C5] border-opacity-20 text-white bg-[#383838] p-3 rounded-lg outline-none"
              />
            </div>
            <div className="mt-5 w-full">
              <p className="text-[16px] text-white font-[500]">
                {commentheading}
              </p>
              <textarea
                id="user_comment"
                rows={5}
                value={comment}
                required
                onChange={(e) => setComment(e.target.value)}
                className="w-full border border-[#C5C5C5] border-opacity-20 text-white bg-[#383838] p-3 rounded-lg outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r py-3 w-48 rounded-full text-white from-[#35D373] to-[#1C9E76]"
            >
              {btntext}
            </button>
          </form>
          <div className="flex flex-col items-center">
            <img src="/images/contact-img.png" alt="contect image" />
            <div className="flex  gap-3">
              <div className="flex flex-col bg-[#F5F5F5] justify-between rounded-3xl gap-3 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#1FA25D]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#1FA25D]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-[#1FA25D]"
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
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <h1 className="font-popins font-[500] text-[16px] text-black">
                    {phoneheading}
                  </h1>
                  <li className="text-secondary font-popins text-[16px] font-[400]">
                    +92 332 0661463
                  </li>
                </div>
                <div>
                  <h1 className="font-popins font-[500] text-[16px] text-black">
                    {emailheading}
                  </h1>
                  <li className="text-secondary font-popins text-[16px] font-[400]">
                    elabdtech@gmail.com
                  </li>
                </div>
                <div>
                  <h1 className="font-popins font-[500] text-[16px] text-black">
                    {addressheading}
                  </h1>
                  <li className="text-secondary font-popins text-[16px] font-[400]">
                    Office No 02, Munawar Plaza, I-10 Islmabad
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
