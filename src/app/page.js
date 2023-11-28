"use Client"



import Intro from "@/components/homecomponents/Intro"
import "../app/style.css"

import Service from "@/components/homecomponents/Service"
import ReviewSlider from "@/components/homecomponents/ReviewSlider"
import Footer from "@/components/Footer"
import ProgramSlider from "@/components/homecomponents/ProgramSlider"
import Creation from "@/components/homecomponents/Creation"


export default function Home() {
  return (
    <div className='bg-[#DCFFDB] font-inter     '>

      {/* Home page components  start here */}

      <Intro />

      {/* Services components */}
      <div className='mt-10 lg:py-20 px-10'>
        <div className="flex flex-col gap-2 justify-center items-center md:gap-10  ">
          <h1 className="text-xl  md:text-[48px] text-black font-[700]">Our Services</h1>
          <p className="text-[#9E9E9E] text-sm md:text-xl lg:text-xl md:w-[70%] text-center font-[400]">We provide a diverse array of solutions meticulously crafted to suit your distinct requirements. Our services span strategic consulting, seamless app and website development, and expertly designed UI/UX solutions, animations, and desktop software. Our dedicated team is committed to delivering nothing short of excellence, offering you a world of possibilities to elevate your digital journey.</p>
        </div>

        <div className="mt-10 grid grid-flow-row md:grid-cols-2 gap-10 m-5">
          <Service icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  lg:w-10 lg:h-10 text-white group-hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
          </svg>} heading={"Ui & Ux Design"} paragraph={"Discover a new level of user interaction with Us' superior UI and UX design services. Our approach focuses on creating visually appealing and easy-to-use digital environments that captivate users. We prioritize seamless experiences to ensure your audience remains engaged and satisfied."} />
          <Service icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  lg:w-10 lg:h-10 text-white group-hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>} heading={"Flutter Development"} paragraph={"Experience the pinnacle of cross-platform development through Our' expert Flutter services. We specialize in blending performance and aesthetics, utilizing Flutter's capabilities to build standout applications. Our proficiency guarantees dynamic and feature-rich apps that offer an exceptional user experience."} />
          <Service icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  lg:w-10 lg:h-10 text-white group-hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
          </svg>
          } heading={"Web Design"} paragraph={"Elevate your online presence with Us' custom web design services. We specialize in creating visually stunning websites that not only catch the eye but also ensure smooth and efficient functionality. Our expertise lies in blending aesthetics with user-friendly design, ensuring an immersive experience for your audience.          "} />
          <Service icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  lg:w-10 lg:h-10 text-white group-hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
          </svg>
          } heading={"Animation Design"} paragraph={"Experience the power of storytelling through Our' animation design services. We bring creativity to life by transforming static ideas into captivating and engaging animations. Our team excels in crafting dynamic visuals that convey your message effectively and leave a lasting impact on your audience."} />

        </div>
      </div>



      {/* Other_Programs */}

      <div className="md:mt-32 mt-16 flex flex-col justify-between xl:flex-row gap-4 md:gap-20 2xl:gap-60 font-inter p-2 px-4  md:p-16">
        <div className="flex flex-col flex-1 justify-center items-center xl:items-start gap-5 px-4  md:gap-10">
          <h1 className="text-2xl  md:text-[48px] xl:text-[60px] font-[700] text-black">Other Programs</h1>
          <p className="md:text-[16px] xl:text-2xl font-[400] text-[#B4B4B4] md:w-[24rem] lg:w-[36rem]">Discover a wide range of programs customized to fit your unique needs. Whether you're looking for innovative solutions, strategic advice, or the latest technology, we've got you covered. Our dedication to top-notch quality extends across various offerings aimed at enhancing your digital experience. Come join us on a journey where creativity meets practicality, and let's shape the future together.</p>
          <div className="flex bg-black w-36 md:w-56 justify-end items-center rounded-[30px] gap-8  p-4">
            <h1 className="md:text-2xl font-[500]  text-white">Explore</h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 w-6   md:w-8 md:h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>

          </div>
        </div>
        <div className="w-full flex-1  overflow-hidden">
          <div>

            <ProgramSlider />

          </div>



        </div>

      </div>





      {/* Choose Us */}


      <div className="mt-20 md:p-16 bg-white">
        <div className="flex flex-col  xl:flex-row md:justify-between ">
          <div className=" relative mt-5 px-4">
            <div className="bg-[#31CA74] h-80 w-80 m-1 md:h-[35rem] md:w-[35rem] absolute  rounded-full opacity-[18%]">

            </div>
            <img src="/images/flyman.png" alt="person1 img" className="w-full h-full   relative md:left-20 bottom-8" />

          </div>
          <div className="p-3 px-4  md:p-10 xl:mt-40">
            <h1 className=" text-xl text-center xl:text-start  md:text-[36px] font-[700]">Why Should Choose us?</h1>
            <div className="flex justify-center items-center xl:justify-start xl:items-start gap-3 mt-10">
              <div className='bg-gradient-to-r p-3 rounded-3xl from-[black] to-[black] cursor-pointer hover:bg-gradient-to-r  hover:from-[#35D373] hover:to-[#1C9E76]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>

              </div>
              <div>
                <h1 className="text-2xl font-[700] text-black">Advance Designs</h1>
                <p className="text-[16px] font-[400] text-[#A8A8A8] md:w-96">Elevate your projects with our cutting-edge design solutions tailored to push boundaries and set new standards. Our innovative approach ensures visually stunning and functionally advanced designs that captivate audiences</p>
              </div>
            </div>

            <div className="flex justify-center items-center xl:justify-start xl:items-start gap-3 mt-5">
              <div className='bg-gradient-to-r p-3 rounded-3xl from-[black] to-[black] cursor-pointer   hover:bg-gradient-to-r hover:from-[#35D373] hover:to-[#1C9E76]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-[700] text-black">Creative Team</h1>
                <p className="text-[16px] font-[400] text-[#A8A8A8] md:w-96">Meet our dynamic team of visionary minds dedicated to transforming ideas into impactful realities. With a blend of creativity and expertise, we craft solutions that resonate with innovation and excellence.</p>
              </div>
            </div>

            <div className="flex justify-center items-center xl:justify-start xl:items-start gap-3 mt-5">
              <div className='bg-gradient-to-r p-3 rounded-3xl from-[black] to-[black] cursor-pointer  hover:bg-gradient-to-r hover:from-[#35D373] hover:to-[#1C9E76]'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>


              </div>
              <div>
                <h1 className="text-2xl font-[700] text-black">Quick Support</h1>
                <p className="text-[16px] font-[400] text-[#A8A8A8] md:w-96">Experience prompt and reliable assistance every step of the way. Our responsive support team is committed to swiftly addressing your queries and ensuring a seamless experience. Your satisfaction is our priority.</p>
              </div>
            </div>

          </div>

        </div>

      </div>







      {/* Our Creations */}

      <div className="">
        <Creation />
      </div>

     




      {/* Customer Reviws  */}

      <div className="bg-white  w-full p-6 lg:pt-24 md:p-16">

        <div className="flex flex-col gap-3 justify-center items-center">
          <h1 className="text-xl  md:text-[40px] font-[700] text-black">Customer’s Reviews  </h1>
          <p className="text-[16px] font-[400] text-[#999999] md:w-[50rem] text-center">Discover what our clients are saying about Elabd Technologies</p>
        </div>

        <div className="md:mt-28  mt-5 flex p-2 mx-auto xl:w-[70%]  overflow-hidden justify-center items-center   ">

          <ReviewSlider />
          {/* <ReviewSlider imgsrc={"/images/review1.png"} heading={"John Wick"} subheading={"condimentum"}  para={"Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl."} /> */}

        </div>
      </div>






      {/* Footer */}
      <div className="">
        <Footer />
      </div>

    </div>
  )
}








