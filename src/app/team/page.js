"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/languageContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getDictionary } from "../dictionariees";

const Teams = () => {


  const { selectedLanguage} = useLanguage(); 

 
  const [teamheading, setteamheading] = useState("")
  const [teampara, setteampara] = useState("")
  const [topheading, settopheading] = useState("")
  const [ceoname, setceoname] = useState("")
  const [ceodesi, setceodesi] = useState("")
  const [ceopara, setceopara] = useState("")
  const [lead1name, setlead1name] = useState("")
  const [lead1desi, setlead1desi] = useState("")
  const [lead1para, setlead1para] = useState("")
  const [lead2name, setlead2name] = useState("")
  const [lead2desi, setlead2desi] = useState("")
  const [lead2para, setlead2para] = useState("")
  const [topheading2, settopheading2] = useState("")
  const [member1name, setmember1name] = useState("")
  const [member1desi, setmember1desi] = useState("")
  const [member2name, setmember2name] = useState("")
  const [member2desi, setmember2desi] = useState("")
  const [member3name, setmember3name] = useState("")
  const [member3desi, setmember3desi] = useState("")
  const [member4name, setmember4name] = useState("")
  const [member4desi, setmember4desi] = useState("")
  const [member5name, setmember5name] = useState("")
  const [member5desi, setmember5desi] = useState("")
  const [member6name, setmember6name] = useState("")
  const [member6desi, setmember6desi] = useState("")
  const [member7name, setmember7name] = useState("")
  const [member7desi, setmember7desi] = useState("")




 

 // Assuming getDictionary returns a Promise
 useEffect( ()  => {
   const dictPromise =  getDictionary(selectedLanguage);
   dictPromise.then((dict) => {
    
   setteamheading(dict?.team?.teamheading)
   setteampara(dict?.team?.teamparagraph)
   settopheading(dict?.team?.topheading)
   setceoname(dict?.team?.ceoname)
   setceodesi(dict?.team?.ceodesi)
   setceopara(dict?.team?.ceopara)
   setlead1name(dict?.team?.lead1name)
   setlead1desi(dict?.team?.lead1desi)
   setlead1para(dict?.team?.lead1para)
   setlead2name(dict?.team?.lead2name)
   setlead2desi(dict?.team?.lead2desi)
   setlead2para(dict?.team?.lead2para)
   settopheading2(dict?.team?.topheading2)
   setmember1name(dict?.team?.member1name)
   setmember1desi(dict?.team?.member1desi)
   setmember2name(dict?.team?.member2name)
   setmember2desi(dict?.team?.member2desi)
   setmember3name(dict?.team?.member3name)
   setmember3desi(dict?.team?.member3desi)
   setmember4name(dict?.team?.member4name)
   setmember4desi(dict?.team?.member4desi)
   setmember5name(dict?.team?.member5name)
   setmember5desi(dict?.team?.member5desi)
   setmember6name(dict?.team?.member6name)
   setmember6desi(dict?.team?.member6desi)
   setmember7name(dict?.team?.member7name)
   setmember7desi(dict?.team?.member7desi)




  }).catch((error) => {
    console.error("Error fetching dictionary:", error);
  });

 }, [selectedLanguage])


  const teamMembers = [
    {
      id: 1,
      name: member1name,
      image: "/images/taimoor.png", // Image path

      position: member1desi,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      name: member2name,
      image: "/images/dinyal.jpeg", // Image path
      position: member2desi,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 4,
      name: member3name,
      image: "/images/ehtisham.jpeg", // Image path

      position: member3desi,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 5,
      name: member4name,
      image: "/images/sohaib.png", // Image path

      position: member4desi,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",

    },
    {
      id: 6,
      name: member5name,
      image: "/images/shahwaiz.png", // Image path

      position: member5desi,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 7,
      name: member6name,
      image: "/images/ali.png", // Image path
      position: member6desi,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    // {
    //     id: 8,
    //     name: 'Muhammad  Ayaz',
    //     image: '/images/dinyal.jpeg', // Image path

    //     position: 'Flutter Intern',
    //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    // },
    {
      id: 9,
      name: member7name,
      image: "/images/ulfat.png", // Image path

      position: member7desi,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },

    // Add more team members here
  ];
  return (
    <div className="bg-white m-3 font-inter overflow-hidden">
      <div className="bg-white   relative overflow-hidden">
        <div
          className={`relative md:bg-[url('/images/team-back.png')] md:h-[50rem] bg-no-repeat lg:bg-cover`}
        >
          <div className="relative z-10">
          <Navbar />
          </div>
          {/* Black Gradient Overlay */}
          <div className="hidden lg:block  absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent -z-1"></div>


          <div className={`p-4 lg:p-16 gap-5 flex flex-col ${selectedLanguage == "ar"?"items-end text-end":"items-start"} justify-end md:absolute bottom-0`}>
            <h1 className="md:text-[48px] 2xl:text-[64px] text-xl text-black md:text-white font-[600]">
              {teamheading}
            </h1>
            <p className="text-sm text-black md:text-base 2xl:text-[18px] lg:w-[50%] md:text-white font-[400]">
           {teampara}
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="p-4 lg:p-16 ">
          <h2 className="text-xl lg:text-[40px] mt-5 md:mt-28 text-center font-[700] text-black">
            {topheading}
          </h2>

          <div className="grid grid-cols-1  mt-10 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4">
              <div className="bg-white flex flex-col items-center g rounded-lg shadow-lg p-4">
                <img
                  src="/images/waqas.jpg"
                  alt={"hello"}
                  className="w-28 rounded-full h-auto"
                />
                <div className="p-4 flex gap-4 flex-col items-center">
                  <h2 className=" text-xl lg:text-2xl font-[700]">
                    {ceoname}
                  </h2>
                  <p className="text-[#21AC77] font-[600]">{ceodesi}</p>
                  <p className="text-sm  2xl:text-[16px] font-[500] text-center text-[#818181]">
                 {ceopara}
                  </p>
                  <div className="flex gap-3 ">
                    <Link href={"https://instagram.com/"} target="_blank">
                      <img src="/images/insta-green.png" alt="image" />
                    </Link>
                    <Link
                      href={"https://www.linkedin.com/in/waqas-ahmed-7b97211a/"}
                      target="_blank"
                    >
                      <img src="/images/linkden-green.png" alt="image" />
                    </Link>
                    <Link href={"https://www.twitter.com/"} target="_blank">
                      <img src="/images/twiter-green.png" alt="image" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white flex flex-col items-center g rounded-lg shadow-lg p-4">
                <img
                  src="/images/shakoor.png"
                  alt={"hello"}
                  className="w-28 rounded-full h-auto"
                />
                <div className="p-4 flex gap-4 flex-col items-center">
                  <h2 className=" text-xl lg:text-2xl font-[700]">
                    {lead1name}
                  </h2>
                  <p className="text-[#21AC77] font-[600]">
                   {lead1desi}
                  </p>
                  <p className="text-sm 2xl:text-[16px] text-center font-[500] text-[#818181]">
                  {lead1para}
                  </p>
                  <div className="flex gap-3 ">
                    <Link
                      href={"https://www.instagram.com/abdulshakoormcs/"}
                      target="_blank"
                    >
                      <img src="/images/insta-green.png" alt="image" />
                    </Link>
                    <Link
                      href={"https://www.linkedin.com/in/abdulshakoormcs/"}
                      target="_blank"
                    >
                      <img src="/images/linkden-green.png" alt="image" />
                    </Link>
                    <Link
                      href={"https://twitter.com/abdulshakoormcs"}
                      target="_blank"
                    >
                      <img src="/images/twiter-green.png" alt="image" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white flex flex-col items-center g rounded-lg shadow-lg p-4">
                <img
                  src="/images/abbas.png"
                  alt={"hello"}
                  className="w-28 rounded-full h-auto"
                />
                <div className="p-4 flex gap-4 flex-col items-center">
                  <h2 className=" text-xl lg:text-2xl font-[700]">
                    {lead2name}
                  </h2>
                  <p className="text-[#21AC77] font-[600]">
                    {lead2desi}
                  </p>
                  <p className="text-sm 2xl:text-[16px] text-center font-[500] text-[#818181]">
                   {lead2para}
                  </p>
                  <div className="flex gap-3 ">
                    <Link href={"https://github.com/abbasDD"} target="_blank">
                      <img src="/images/github.png" alt="image" />
                    </Link>
                    <Link
                      href={
                        "https://www.linkedin.com/in/ghulam-abbas-8440a0b5/"
                      }
                      target="_blank"
                    >
                      <img src="/images/linkden-green.png" alt="image" />
                    </Link>
                    <Link
                      href={"https://www.behance.net/abbasdd"}
                      target="_blank"
                    >
                      <img src="/images/BehanceLogo.png" alt="image" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-xl lg:text-[40px] mt-28 text-center font-[700] text-black">
            {topheading2}
          </h2>

          <div className="grid grid-cols-1  mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="p-4">
                <div className="bg-white rounded-lg shadow-lg p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full rounded-full h-auto"
                  />
                  <div className="p-4 flex gap-2 flex-col items-center">
                    <h2 className=" text-sm 2xl:text-2xl font-[700]">
                      {member.name}
                    </h2>
                    <p className="text-[#21AC77] text-sm font-[600]">
                      {member.position}
                    </p>
                    {/* <p className="mt-2">{member.description}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Teams;
