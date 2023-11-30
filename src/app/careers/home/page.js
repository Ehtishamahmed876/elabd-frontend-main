import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Service from "@/components/homecomponents/Service";
import React from "react";

const Careers = () => {
  return (
    <div className="m-3 overflow-hidden">
      <div className="bg-white ">
        <Navbar />
        <div className="  md:mt-10 mt-2 px-4 p-2 py-10 md:py-20 md:px-16  flex flex-col md:flex-row justify-between items-center">
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
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. torquent per conubia nostra, 
              </p>
            </div>

            <div className="flex gap-3">
                <img src="/images/Dribble.png" alt="dribble" />
                <img src="/images/behance.png" alt="dribble" />
                <img src="/images/pinterest.png" alt="dribble" />
                <img src="/images/linkden.png" alt="dribble" />

            </div>
          </div>
          <div className="mt-10   ">
            <img
              src="/images/career.png"
              alt="person1 img"
              className="md:w-[35rem] md:h-[35rem]  2xl:w-[40rem] 2xl:h-[40rem] w-56 h-56  relative md:left-12 "
            />
          </div>
        </div>
      </div>


      <div className="md:p-16 p-4 mt-10">
          <h1 className="text-black text-lg md:text-[40px] font-[700]">How we Work</h1>
          <p className=" text-2xl md:text-3xl 2xl:text-5xl font-[600] text-[#21AC77] 2xl:w-[50%] mt-5">Elabd most enduring design may be Elabd itself</p>
          <div className="flex flex-col lg:flex-row justify-between mt-10 gap-10 lg:gap-40">
          <p className="text-black text-sm 2xl:text-base">Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
          <p className="text-black text-sm 2xl:text-base">Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
          </div>
          <div className="flex  justify-center mt-10">
          <p className="text-2xl md:text-3xl 2xl:text-5xl font-[600] text-center text-[#21AC77] 2xl:w-[50%] mt-5">There is a Place here for every kind of brilliant</p>
          </div>
      </div>


      <div className='mt-10 py-10 lg:py-20 px-4 md:px-10 bg-white'>
        <div className="flex flex-col gap-2 justify-center items-center md:gap-5  ">
          <h1 className="text-xl md:text-[32px]  2xl:text-[48px] md:w-[60%] text-center md:leading-[3rem] text-black font-[700]">Explore a few to see which match your interest </h1>
          <p className="text-[#9E9E9E] text-sm md:text-xl 2xl:text-2xl md:w-[70%] text-center font-[400]">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
        </div>

        <div className="mt-10  grid grid-flow-row md:grid-cols-2 gap-10 m-5 ">
          <Service icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  lg:w-10 lg:h-10 text-white group-hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
          </svg>} heading={"Ui & Ux Design"} paragraph={"Elevate your user experience with Elabd Technologies' cutting-edge UI and UX design services. Immerse your audience in a visually stunning and intuitively crafted digital environment."} />
          <Service icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  lg:w-10 lg:h-10 text-white group-hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>} heading={"Flutter Development"} paragraph={"Unlock the power of cross-platform excellence with Elabd Technologies' Flutter development services. Seamlessly blend performance and aesthetics as we harness the capabilities of Flutter to create dynamic and feature-rich applications."} />
          <Service icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  lg:w-10 lg:h-10 text-white group-hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          } heading={"Web Design"} paragraph={"Immerse your audience in a visually captivating online experience with Elabd Technologies' bespoke web design services. We understand the art of crafting websites that not only stand out aesthetically but also deliver seamless functionality."} />
          <Service icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  lg:w-10 lg:h-10 text-white group-hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
          </svg>
          } heading={"Animation Design"} paragraph={"Embark on a journey of dynamic storytelling with Elabd Technologies' animation design services. We breathe life into ideas, turning static concepts into engaging and visually captivating animations. "} />

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
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. torquent per conubia nostra, 
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. torquent per conubia nostra, 
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
