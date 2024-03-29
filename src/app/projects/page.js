"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import projects from "@/data/projectdata";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getDictionary } from "../dictionariees";
import { useLanguage } from "@/languageContext";

const Projects = () => {
  const { selectedLanguage} = useLanguage(); 

  const [projectheading, setprojectheading] = useState("")
  const [projectpara, setprojectpara] = useState("")
  const [heading1, setheading1] = useState("")
  const [heading2, setheading2] = useState("")
  const [heading3, setheading3] = useState("")
  const [heading4, setheading4] = useState("")
  const [heading5, setheading5] = useState("")
  const [heading6, setheading6] = useState("")

  

  


 // Assuming getDictionary returns a Promise
 useEffect( ()  => {
   const dictPromise =  getDictionary(selectedLanguage);
   dictPromise.then((dict) => {
    
   setprojectheading(dict?.projects?.heading)
   setprojectpara(dict?.projects?.paragraph)
   setheading1(dict?.projects?.heading1)
   setheading2(dict?.projects?.heading2)
   setheading3(dict?.projects?.heading3)
   setheading4(dict?.projects?.heading4)
   setheading5(dict?.projects?.heading5)
   setheading6(dict?.projects?.heading6)

  }).catch((error) => {
    console.error("Error fetching dictionary:", error);
  });

 }, [selectedLanguage])
 
  const categories = [
    heading1,
    heading2,
    heading3,
    heading4,
    heading5,
    heading6,
  ];

  

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [visibleProjects, setVisibleProjects] = useState(4);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleProjects(4); // Reset visible projects when category changes
  };
  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);


      const loadMore = () => {
        setVisibleProjects((prev) => prev + 4);
      };
  return (
    <div className=" bg-white m-3">
      <Navbar />
      <div className=" m-3 md:m-16">
        <div className={`flex flex-col ${selectedLanguage == "ar"?"items-end":"items-start"} gap-4`}>
          <h1 className="text-3xl md:text-4xl  2xl:text-6xl text-black font-[700]">{projectheading}</h1>
          <p>
         {projectpara}
          </p>
        </div>

        <div className="my-10">
          <div className="bg-[#C9F3CD] flex flex-col lg:flex-row gap-3 justify-around items-center p-5 rounded-xl">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-10 lg:px-4 py-3 lg:py-2 xl:px-10 xl:py-33  2xl:text-xl text-[#21AC77]  bg-[#DAF9D7] rounded-full ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-[#35D373] to-[#1C9E76] text-white"
                    : ""
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-5 lg:gap-10  justify-center items-center">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
              <Link href={`/project/${project.id}`} legacyBehavior>

              <div
                key={project.id}
                className="relative group flex items-center   justify-center"
              >
                <img
                  src={project.image}
                  alt={project.appName}
                  className=" lg:h-[30rem] 2xl:h-[40rem] h-96 rounded-lg"
                />

                <div className="hidden absolute group-hover:bg-black group-hover:bg-opacity-40 h-96 w-80 md:w-96 lg:w-[30rem] lg:h-[30rem] 2xl:w-[40rem] 2xl:h-[40rem] group-hover:block p-10 bottom-0">
                  <div>
                    <div className="flex items-center gap-3">
                      <h1 className="text-white font-[700] text-2xl">
                        {project.appName}
                      </h1>
                      <div className="bg-black p-3 rounded-full bg-gradient-to-r from-[#35D373] to-[#1C9E76]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-white foot-[400] hidden lg:block">
                      {project.description}
                    </p>
                  </div>
                </div>

              </div>
              </Link>

            ))}
          </div>
          {filteredProjects.length > visibleProjects && (
        <div className="flex justify-center mt-8">
          <button
            className="px-10 py-3 text-xl text-[#21AC77]  bg-[#DAF9D7] rounded-full"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}

        </div>

      </div>
      <Footer />

    </div>
  );
};

export default Projects;
