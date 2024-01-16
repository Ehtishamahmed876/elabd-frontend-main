"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/languageContext";

import React, { useEffect, useState } from "react";
import { getDictionary } from "../dictionariees";

const Privacy = () => {
  const { selectedLanguage} = useLanguage(); 

  const [heading, setheading] = useState("")
  const [point1, setpoint1] = useState("")
  const [point2, setpoint2] = useState("")
  const [point3, setpoint3] = useState("")
  const [point4, setpoint4] = useState("")
  const [point5, setpoint5] = useState("")
  const [point6, setpoint6] = useState("")
  const [point7, setpoint7] = useState("")
  const [point8, setpoint8] = useState("")
  const [point9, setpoint9] = useState("")
  const [point10, setpoint10] = useState("")
  const [point11, setpoint11] = useState("")


  

  


 // Assuming getDictionary returns a Promise
 useEffect( ()  => {
   const dictPromise =  getDictionary(selectedLanguage);
   dictPromise.then((dict) => {
    
   setheading(dict?.policies?.heading)
   setpoint1(dict?.policies?.point1)
   setpoint2(dict?.policies?.point2)
   setpoint3(dict?.policies?.point3)
   setpoint4(dict?.policies?.point4)
   setpoint5(dict?.policies?.point5)
   setpoint6(dict?.policies?.point6)
   setpoint7(dict?.policies?.point7)
   setpoint8(dict?.policies?.point8)
   setpoint9(dict?.policies?.point9)
   setpoint10(dict?.policies?.point10)
   setpoint11(dict?.policies?.point11)



  }).catch((error) => {
    console.error("Error fetching dictionary:", error);
  });

 }, [selectedLanguage])
 
  const guidelines = [
    point1,
    point2,
    point3,
    point4,
    point5,
    point6,
    point7,
    point8,
    point9,
    point10,
    point11
  ];

  return (
    <div className="m-3">
      <div className="bg-white">
        <Navbar />
        <div className="bg-[#F6F6F6] p-4 m-3 lg:p-16 lg:m-10">
          <h1 className={`text-[#21AC77] ${selectedLanguage == "ar"?"text-end":""} text-[36px] font-[700]`}>
            {heading}
          </h1>
          <div className={`p-4 flex flex-col ${selectedLanguage == 'ar'?"items-end text-end":""} gap-10`}>
            
          <ul className={` pl-4 ${selectedLanguage === 'ar' ? '' : ''}`}>

              {guidelines.map((guideline, index) => (
                <li key={index} className="mb-2">
                  {guideline}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
