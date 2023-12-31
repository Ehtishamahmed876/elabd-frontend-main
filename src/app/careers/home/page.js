import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Service from "@/components/homecomponents/Service";
import Link from "next/link";
import React from "react";

const Careers = () => {
  return (
    <div className="m-3 overflow-hidden">
      <div className="bg-white ">
        <Navbar />
        <div className="  md:mt-10 mt-2 px-4 p-2 py-10 md:py-20 md:px-16  flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col justify-center items-center lg:items-start  lg:w-[55%] gap-5 2xl:gap-10">
            <div className="font-inter text-black ">
              <h3 className="font-[700] text-[#21AC77] text-3xl md:leading-[3rem] 2xl:leading-[5rem] md:text-[48px]  2xl:text-[64px]">
                Work at Elabd
              </h3>
              <h2 className="md:text-[40px]   2xl:text-[48px] md:leading-[3rem] 2xl:leading-[5rem] font-[600] text-3xl  ">
                Join a team and
              </h2>
              <h1 className="md:text-[40px]  2xl:text-[48px] md:leading-[3rem] 2xl:leading-[5rem]  font-[600] text-3xl ">
                inspire the 
                <span className="font-[700] text-[#21AC77] ml-2 md:ml-5 text-3xl md:text-[40px] 2xl:text-[64px]">
                  work.
                </span>
              </h1>
            </div>

            <div>
              <p className=" text-sm text-center md:text-start md:text-xl font-[400] text-[#8b8b8b]">
              "Embrace the spirit of collaboration at Elabd as we join forces to create a dynamic and inspiring work environment. Together, we'll fuel innovation and elevate our collective potential, fostering a culture where every team member is empowered to contribute their unique talents. Let's inspire the work and shape a future of success at Elabd." 
              </p>
            </div>

            <div className="flex gap-3">
                <Link href={'https://dribbble.com/elabdtech'} target="_blank" >
                <img src="/images/Dribble.png" alt="dribble" />
                </Link>
                <Link href={'https://www.behance.net/elabdtechnol'} target="_blank" >
                <img src="/images/behance.png" alt="dribble" />
                </Link>
                <Link href={'https://www.pinterest.com/elabdtech/'} target="_blank" >
                <img src="/images/pinterest.png" alt="dribble" />
                </Link>
                <Link href={'https://www.linkedin.com/company/elabd-technologies'} target="_blank" >
                <img src="/images/linkden.png" alt="dribble" />
                </Link>

            </div>
          </div>
          <div className="mt-10   ">
            <img
              src="/images/career.png"
              alt="person1 img"
              className="md:w-[30rem] md:h-[30rem]  2xl:w-[40rem] 2xl:h-[40rem] w-56 h-56  relative md:left-12 "
            />
          </div>
        </div>
      </div>


      <div className="md:p-16 p-4 mt-10">
          <h1 className="text-black text-lg md:text-[40px] font-[700]">How we Work</h1>
          <p className=" text-2xl md:text-3xl 2xl:text-5xl font-[600] text-[#21AC77] 2xl:w-[50%] mt-5">Elabd most enduring design may be Elabd itself</p>
          <div className="flex flex-col lg:flex-row justify-between mt-10 gap-10 lg:gap-40">
          <p className="text-black text-sm 2xl:text-base">At Elabd, our work process for hiring an employee reflects our commitment to enduring design. We begin by meticulously crafting job descriptions that resonate with our core values and the specific needs of the role. Our recruitment process prioritizes a comprehensive evaluation, ensuring a seamless fit between the candidate's skills, experience, and our organizational culture. With an emphasis on collaboration and innovation, we engage in thorough interviews, assessments, and team interactions to build a workforce that not only enhances Elabd's enduring design but also contributes to its ongoing success.</p>
          <p className="text-black text-sm 2xl:text-base">At Elabd, our work process for hiring an employee reflects our commitment to enduring design. We begin by meticulously crafting job descriptions that resonate with our core values and the specific needs of the role. Our recruitment process prioritizes a comprehensive evaluation, ensuring a seamless fit between the candidate's skills, experience, and our organizational culture. With an emphasis on collaboration and innovation, we engage in thorough interviews, assessments, and team interactions to build a workforce that not only enhances Elabd's enduring design but also contributes to its ongoing success.</p>
          </div>
          <div className="flex  justify-center mt-10">
          <p className="text-2xl md:text-3xl 2xl:text-5xl font-[600] text-center text-[#21AC77] 2xl:w-[50%] mt-5">There is a Place here for every kind of brilliant</p>
          </div>
      </div>


      <div className='mt-10 py-10 lg:py-20 px-4 md:px-10 bg-white'>
        <div className="flex flex-col gap-2 justify-center items-center md:gap-5  ">
          <h1 className="text-xl md:text-[32px]  2xl:text-[48px] md:w-[70%] text-center md:leading-[3rem] text-black font-[700]">Explore a few to see which match your interest </h1>
          <p className="text-[#9E9E9E] text-sm md:text-xl 2xl:text-2xl md:w-[70%] text-center font-[400]">Submitting an application is more than just a formality – it's your first step towards joining a team that values individuality, fosters innovation, and shapes the future of enduring design. </p>
        </div>

        <div className="mt-10 grid grid-flow-row md:grid-cols-2 gap-10 m-5">
          <Service cardlink={"/careers/ui-ux"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  lg:w-10 lg:h-10 text-white group-hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
          </svg>} heading={"Ui & Ux Design"} paragraph={"Our approach focuses on creating visually appealing and easy-to-use digital environments that captivate users. We prioritize seamless experiences to ensure your audience remains engaged and satisfied."} />
          <Service cardlink={"/careers/flutter"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  lg:w-10 lg:h-10 text-white group-hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>} heading={"Flutter Development"} paragraph={" We specialize in blending performance and aesthetics, utilizing Flutter's capabilities to build standout applications. Our proficiency guarantees dynamic and feature-rich apps that offer an exceptional user experience."} />
          <Service cardlink={"/careers/web"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  lg:w-10 lg:h-10 text-white group-hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          } heading={"Web Design"} paragraph={"We specialize in creating websites that not only catch the eye but also ensure smooth and efficient functionality. Our expertise lies in building user-friendly design, ensuring an immersive experience for your audience.          "} />
          <Service cardlink={"/careers/animation"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  lg:w-10 lg:h-10 text-white group-hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
          </svg>
          } heading={"Animation Design"} paragraph={" We bring creativity to life by transforming static ideas into captivating and engaging animations. Our team excels in crafting dynamic visuals that convey your message effectively and leave a lasting impact on your audience."} />

        </div>
      </div>


      <div className="  md:mt-10 mt-2 flex-col-reverse lg:flex-row justify-center items-center px-4 p-2 py-10 md:py-20 md:px-16  flex">
          <div className="flex flex-col justify-center mt-5 items-center lg:items-start  lg:w-[55%] gap-5 md:gap-10">
            <div className="font-inter text-black ">
              <h3 className="font-[700] text-[#21AC77] text-xl 2xl:leading-[4rem] md:text-3xl  2xl:text-5xl">
              “We aren’t merely creating products. We’re creating something magical for the person who uses it.”
              </h3>
           
            </div>

            <div>
              <p className=" text-sm text-center md:text-start md:text-[16px] md:w-[70%] font-[400] text-[#31CB74]">
              "At Elabd, our mission goes beyond product creation; we are weaving enchantment for every individual who interacts with our offerings. Each endeavor is infused with a touch of magic, meticulously crafted to elevate experiences and evoke a sense of wonder. By merging innovation with a sprinkle of enchantment, we strive to go beyond expectations, leaving a lasting and magical impression on the lives of those who engage with our creations. Join us in the art of crafting not just products, but moments of pure magic for our users."              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. torquent per conubia nostra, 
              </p>
            </div>

     
          </div>
          <div className="  2xl:w-[45%] ">
            <img
              src="/images/career-home2.png"
              alt="person1 img"
              className="md:w-[30rem] md:h-[30rem] 2xl:w-[40rem] 2xl:h-[40rem] w-56 h-56  relative md:left-12 "
            />
          </div>
        </div>
        <Footer />
    </div>
  );
};

export default Careers;
