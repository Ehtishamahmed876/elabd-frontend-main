"use client"

import { getDictionary } from '@/app/dictionariees';
import { useLanguage } from '@/languageContext';
import React, { useEffect, useState } from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Creation = () => {
    const { selectedLanguage} = useLanguage(); 
  const [subheading, setSubheading] = useState("")
  const [heading, setheading] = useState("")
  const [buttontext, setbuttontext] = useState("")
  const [uiheading, setUiheadig] = useState("")
  const [appsheading, setAppsheading] = useState("")
  const [webheading, setWebheadig] = useState("")
  const [animationheading, setAnimationheadig] = useState("")


   // Assuming getDictionary returns a Promise
 useEffect( ()  => {
    const dictPromise =  getDictionary(selectedLanguage);
    dictPromise.then((dict) => {
     
    setSubheading(dict?.home?.creations?.subheading)
    setheading(dict?.home?.creations?.heading)
    setbuttontext(dict?.home?.creations?.buttontext)
    setUiheadig(dict?.home?.creations?.uiheading)
    setAppsheading(dict?.home?.creations?.appsheading)
    setWebheadig(dict?.home?.creations?.webheading)
    setAnimationheadig(dict?.home?.creations?.animationheading)

   }).catch((error) => {
     console.error("Error fetching dictionary:", error);
   });
 
  }, [selectedLanguage])
    const categories = [
        {
            name: uiheading,
            apps: [
                { appName: 'Ui & Ux Design 1', description: 'Description for App 1', lightimage: '/images/lightmode.png', darkimage: '/images/darkmode.png' },
                { appName: 'Ui & Ux Design 2', description: 'Description for App 2', lightimage: '/images/lightmode.png', darkimage: '/images/darkmode.png' },
                // Add more apps as needed
            ],
        },
        {
            name: appsheading,
            apps: [
                { appName: 'Apps 3', description: 'Description for Apps 3', lightimage: '/images/lightmode.png', darkimage: '/images/darkmode.png' },
                { appName: 'Apps 4', description: 'Description for Apps 4', lightimage: '/images/lightmode.png', darkimage: '/images/darkmode.png' },
                // Add more apps as needed
            ],
        },
        {
            name: webheading,
            apps: [
                { appName: 'Global Enterprises', description: 'Description for Apps 3', lightimage: '/images/global.jpeg', darkimage: '/images/global.jpeg' },
                { appName: 'Mallahi Enterprses', description: 'Description for Apps 4', lightimage: '/images/mallahi.jpeg', darkimage: '/images/mallahi.jpeg' },
                { appName: 'Zia UL Huda', description: 'Description for Apps 3', lightimage: '/images/zia-ul-huda.jpeg', darkimage: '/images/zia-ul-huda.jpeg' },
                // Add more apps as needed
            ],
        },
        {
            name: animationheading,
            apps: [
                { appName: 'Animation 3', description: 'Description for Apps 3', lightimage: '/images/lightmode.png', darkimage: '/images/darkmode.png' },
                { appName: 'Animation 4', description: 'Description for Apps 4', lightimage: '/images/lightmode.png', darkimage: '/images/darkmode.png' },
                // Add more apps as needed
            ],
        }
        // Add more categories as needed
    ];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };
    return (
        <div className="px-4 pt-20 md:pt-0 md:px-16 bg-white">
            
            <div className="bg-[#2F2F2F] p-5 py-8  md:p-10 rounded-2xl">
            <div className={`flex ${selectedLanguage == 'ar'?'flex-row-reverse':'flex-row'} justify-between gap-3 items-center`}>
            <div className={`${selectedLanguage == 'ar'?'text-end':'text-start'}`}>
              <h1 className="lg:text-[40px] text-[12px] font-[700] text-white ">{heading} </h1>
              <p className="lg:text-[32px] text-[14px] font-[700] text-[#55C595]">{subheading}</p>
            </div>
            <div className="bg-white rounded-3xl flex gap-2 h-14">
              <div className=" rounded-full p-3 m-1 bg-[#2F2F2F]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <button className="text-sm md:text-xl font-[500] p-3 rounded-3xl text-white bg-gradient-to-r  from-[#35D373] to-[#1C9E76] h-full">{buttontext}</button>
            </div>
          </div>
                {/* ... your other content ... */}
                <div className="mt-10 flex flex-wrap gap-3 justify-center items-center md:items-start md:gap-4 md:justify-around">
                    {/* Category Buttons */}
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={`text-xl font-[500] bg-[#2F2F2F] text-white p-3 w-64 border border-dashed rounded-3xl ${selectedCategory.name == category.name ? "bg-green-400": "" }`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="mt-5 w-full">
                    <Carousel
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                        showArrows={true}
                    >
                        {/* Slider Content based on selected category */}
                        {selectedCategory.apps.map((app, index) => (
                            <div key={index}>

                                <div className={`flex gap-2 md:gap-20 lg:gap-10 w-full h-full relative lg:left-12 `}>
                                    <div className={`bg-black flex lg:w-[45%]  lg:h-[50rem]   rounded-3xl flex-col justify-center items-center `}>
                                        <div>
                                            <img src={app.lightimage} className="lg:h-[40rem] object-fill" alt={`${app.appName} - ${selectedCategory.name}`} />
                                        </div>
                                    </div>
                                    <div className={`bg-white flex lg:w-[45%]  lg:h-[50rem] flex-col  rounded-3xl justify-center items-center`}>
                                        <div>
                                            <img src={app.darkimage} className="lg:h-[40rem]" alt={`${app.appName} - ${selectedCategory.name}`} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 flex flex-col  justify-center items-center">
                                    <div className="flex justify-center gap-2 items-center">
                                        <h1 className="text-white font-[600] text-xl md:text-[36px]">{app.appName}</h1>
                                        <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="p-5 md:w-[80%]  flex  justify-center items-center ">
                                        <p className="text-white font-[500] text-20px text-center ">{app.description}</p>

                                    </div>

                                </div>
                            </div>

                        ))}
                    </Carousel>
                </div>

                {/* ... rest of your content ... */}
            </div>
        </div>
    )
}

export default Creation