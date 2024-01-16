"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Link from 'next/link'
import { useLanguage } from '@/languageContext';
import { getDictionary } from '@/app/dictionariees';

const Intro =  () => {
  const { selectedLanguage} = useLanguage(); 
  const [para, setpara] = useState("")
  const [heading, setheading] = useState("")
  const [buttontext, setbuttontext] = useState("")
  const [turestedtext, setturestedtext] = useState("")

 // Assuming getDictionary returns a Promise
 useEffect( ()  => {
   const dictPromise =  getDictionary(selectedLanguage);
   dictPromise.then((dict) => {
    
   setpara(dict?.home?.intro?.paragraph)
   setheading(dict?.home?.intro?.heading)
   setbuttontext(dict?.home?.intro?.buttonText)
   setturestedtext(dict?.home?.intro?.turestedText)
  }).catch((error) => {
    console.error("Error fetching dictionary:", error);
  });

 }, [selectedLanguage])

  return (
    <div className='wavy-border bg-white m-3   pb-5  md:pb-28'>
    <Navbar />

    <div className={`md:mt-10 mt-2 px-4 p-2 md:px-16  flex ${selectedLanguage == 'ar'?'flex-row-reverse':'flex-row'}`}>

      <div className={`flex flex-col justify-center items-center lg:items-start ${selectedLanguage == 'ar'?'lg:items-end ':''}  lg:w-[55%] gap-5 md:gap-5`}>

        <div className={`font-inter text-black w-full  flex ${selectedLanguage == 'ar'?'justify-end text-end':'justify-start text-start'} `}>
          {/* <h1 className='2xl:text-[48px] md:text-[40px] md:leading-[52px] 2xl:leading-[5rem]  font-[600] text-xl '><span className='font-[700] text-[#21AC77] text-xl md:text-[48px] 2xl:text-[64px]'>Build</span> Your Dream </h1> */}
          <h2 className='2xl:text-[48px] md:text-[40px]  md:leading-[52px] 2xl:leading-[5rem] lg:w-[70%] font-[600] text-xl  '>{heading}</h2>
          {/* <h3 className='font-[700] text-[#21AC77] text-xl md:leading-[52px] 2xl:leading-[5rem] md:text-[48px]   2xl:text-[64px]'>Elabd Technologies</h3> */}
        </div>

        <div className={`${selectedLanguage == 'ar'?'justify-end text-end':'justify-start text-start'}`}>
          <p className=' text-sm text-center md:text-start md:text-lg 2xl:text-xl font-[400] text-[#7a7a7a]'>  {para}</p>
        </div>

        <div className='flex gap-3'>

        
          <Link href={'/contact-us'}>

          <button className='bg-gradient-to-r px-10 py-2 rounded-3xl from-[#35D373] to-[#1C9E76]'>{buttontext}</button>
          </Link>

        </div>


        <div className={`flex flex-col md:flex-row relative md:right-14 ${selectedLanguage == 'ar'?'md:right-0':''} justify-start  items-center`}>

           <div className='flex relative '>
           <img src="/images/person1.png"  alt="person1 img"  className="w-16 h-16  relative md:left-12 "/>
           <img src="/images/person2.png"  alt="person2 img"  className="w-16 h-16  relative md:left-6"/>
           <img src="/images/person3.png"  alt="person3 img"  className="w-16 h-16  relative "/>
           </div>

           <div>
            <p className='md:text-2xl  xl:text-[32px]  font-[500] text-black'>{turestedtext}</p>
           </div>

        </div>


      </div>
      <div className='hidden lg:block  w-[45%] '>
      <img src="/images/home-side-img.png"  alt="person1 img"  className="md:w-full md:h-full w-56 h-56  relative md:left-12 "/>

      </div>

    </div>
  </div>
  )
}

export default Intro