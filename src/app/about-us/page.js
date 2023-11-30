import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import projects from "@/data/projectdata";
import Link from "next/link";
import React from "react";

const About = () => {
  const selectedProjects = projects.slice(0, 3);
  return (
    <div className="m-3 overflow-hidden">
      <div className="bg-white">
        <div className={`bg-[url('/images/about-back-img.png')]  `}>
          <div className="bg-white bg-opacity-75 ">
            <Navbar />
            <div className="p-4 lg:p-20 pb-10 lg:pb-60 flex flex-col gap-5 lg:gap-10 justify-center items-center">
              <div>
                <img src="/images/logo.svg" alt="hello " className="lg:w-40" />
              </div>
              <h1 className="text-xl lg:text-[48px] font-[600] text-black">
                ABOUT ELABD TECHNOLOGIES
              </h1>
              <p className="lg:text-xl text-center font-[500] text-gray-600">
              We specialize in crafting innovative apps and websites that amplify your digital presence. With cutting-edge technology and creative design, we bring your vision to life. Partner with us to transform your ideas into impactful solutions that leave a lasting mark. Let's elevate your digital footprint together.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-5 p-4 py-10  lg:p-40">
          <div className="flex-1">
            <h1 className="text-black text-xl text-center lg:text-start lg:text-[40px] font-[600] ">
              Company Vision
            </h1>
            <p className="lg:text-[24px] lg:mt-5 font-[400] text-black text-center lg:text-start text-opacity-40">
            Our vision is to be a trailblazer in delivering innovative solutions that redefine the digital landscape. Strive for excellence in harnessing cutting-edge technologies to provide top-tier solutions.Put our clients at the forefront, understanding their unique needs and exceeding their expectations. Foster a culture of creativity and innovation to bring imaginative and impactful ideas to life. Foster a culture of creativity and innovation to bring imaginative and impactful ideas to life.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="/images/about-video-img.png"
              alt="video images"
              className="w-[30rem]"
            />
          </div>
        </div>

        <div className="p-4 lg:p-16">
          <div className="flex flex-col justify-center items-center gap-5">
            <h1 className="font-[700] text-3xl md:text-[48px] text-black">
              Services We Offer
            </h1>
            <p className="font-[400] text-center text-[16px] text-[#808080]">
              We provide a diverse array of solutions meticulously crafted to
              suit your distinct requirements. Our services span strategic
              consulting, seamless app and website development, and expertly
              designed UI/UX solutions, animations, and desktop software. Our
              dedicated team is committed to delivering nothing short of
              excellence, offering you a world of possibilities to elevate your
              digital journey.
            </p>
          </div>

          <div className="grid 2xl:grid-cols-2 mt-20 lg:gap-8">
            <div className="flex flex-col gap-10 lg:border-b-2 relative border-black p-8 md:px-16 border-t-2">
              <p className="text-black text-[16px] font-[700] absolute left-1 top-5 ">
                01/
              </p>
              <div className="flex flex-col md:flex-row p-4 items-center md:gap-8">
                <h1 className="font-[700] text-xl md:text-3xl 2xl:text-[48px] lg:leading-[4rem] text-black">
                  Ui/Ux Design
                </h1>
                <p className="font-[400] text-[16px] text-[#808080]">
                  Discover a new level of user interaction with Us' superior UI
                  and UX design services. Our approach focuses on creating
                  visually appealing and easy-to-use digital environments that
                  captivate users. We prioritize seamless experiences to ensure
                  your audience remains engaged and satisfied.
                </p>
              </div>
              <div className="flex justify-between ">
                <Link href={"/projects"}>
                <button className="bg-black p-3 text-white w-40 rounded-3xl">
                  Explore
                </button>
                </Link>
                <Link href={"/projects"}>
                <div className="bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-10 border-b-2 border-t-2 relative border-black p-8 md:px-16 ">
              <p className="text-black text-[16px] font-[700] absolute left-1 top-5 ">
                02/
              </p>
              <div className="flex flex-col md:flex-row items-center md:gap-8">
                <h1 className="font-[700] text-xl md:text-3xl 2xl:text-[48px] lg:leading-[4rem] text-black">
                  Flutter Development
                </h1>
                <p className="font-[400] text-[16px] text-[#808080]">
                  Experience the pinnacle of cross-platform development through
                  Our' expert Flutter services. We specialize in blending
                  performance and aesthetics, utilizing Flutter's capabilities
                  to build standout applications. Our proficiency guarantees
                  dynamic and feature-rich apps that offer an exceptional user
                  experience.
                </p>
              </div>
              <div className="flex justify-between">
              <Link href={"/projects"}>
                <button className="bg-black p-3 text-white w-40 rounded-3xl">
                  Explore
                </button>
              </Link>
              <Link href={"/projects"}>
                <div className="bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </Link>
              </div>
            </div>
            <div className="flex flex-col gap-10 border-b-2 relative border-black p-8 md:px-16 ">
              <p className="text-black text-[16px] font-[700] absolute left-1 top-5 ">
                03/
              </p>
              <div className="flex flex-col md:flex-row items-center md:gap-8">
                <h1 className="font-[700] text-xl md:text-3xl 2xl:text-[48px] lg:leading-[4rem] text-black">
                  Web Design
                </h1>
                <p className="font-[400] text-[16px] text-[#808080]">
                  Elevate your online presence with Us' custom web design
                  services. We specialize in creating visually stunning websites
                  that not only catch the eye but also ensure smooth and
                  efficient functionality. Our expertise lies in blending
                  aesthetics with user-friendly design, ensuring an immersive
                  experience for your audience.
                </p>
              </div>
              <div className="flex justify-between">
              <Link href={"/projects"}>
                <button className="bg-black p-3 text-white w-40 rounded-3xl">
                  Explore
                </button>
              </Link>
              <Link href={"/projects"}>
                <div className="bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col border-b-2 border-black gap-10  relative  p-8 md:px-16 ">
              <p className="text-black text-[16px] font-[700] absolute left-1 top-5 ">
                04/
              </p>
              <div className="flex flex-col md:flex-row items-center md:gap-8">
                <h1 className="font-[700] text-xl md:text-3xl 2xl:text-[48px] lg:leading-[4rem] text-black">
                  Animation Making
                </h1>
                <p className="font-[400] text-[16px] text-[#808080]">
                  Experience the power of storytelling through Our' animation
                  design services. We bring creativity to life by transforming
                  static ideas into captivating and engaging animations. Our
                  team excels in crafting dynamic visuals that convey your
                  message effectively and leave a lasting impact on your
                  audience.
                </p>
              </div>
              <div className="flex justify-between">
              <Link href={"/projects"}>
                <button className="bg-black p-3 text-white w-40 rounded-3xl">
                  Explore
                </button>
              </Link>
              <Link href={"/projects"}>
                <div className="bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black p-4 py-10 lg:p-20 flex flex-col gap-10 justify-center text-center items-center">
          <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="text-white text-xl lg:text-[48px] font-[600]">
              Facts and stats
            </h1>
            <p className="text-white  text-[16px] w-[80%] font-[400]">
            We've made a mark globally, contributing to the success of businesses across diverse industries. A significant percentage of our projects have achieved remarkable success, demonstrating the effectiveness of our solutions.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-center justify-center text-center">
            <div>
              <h1 className="text-white text-[40px] font-[600]">Millions</h1>
              <p className="text-white text-[16px] font-[500]">
                OF CUSTOMERS WORLDWIDE
              </p>
            </div>
            <div className="w-1 bg-white  h-8"></div>
            <div>
              <h1 className="text-white text-[40px] font-[600]">100+</h1>
              <p className="text-white text-[16px] font-[500]">CLIENTS</p>
            </div>

            <div className="w-1 bg-white  h-8"></div>
            <div>
              <h1 className="text-white text-[40px] font-[600]">10+ </h1>
              <p className="text-white text-[16px] font-[500]">
                EMPLOYEE
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 lg:p-16 py-10 bg-[#BBE4C8]">
          <div className="flex flex-col gap-5  items-start">
            <h1 className="lg:text-[48px] text-xl font-[600] text-black">Our Project</h1>
            <p className="text-[16px] font-[400] lg:w-[40%] text-black">
            Welcome to the diverse world of Elabd Technologies, where innovation meets excellence. Explore our portfolio showcasing a spectrum of services and solutions

            </p>
            <Link href={"/projects"}>
              <div className="bg-white rounded-3xl flex gap-2 h-14">
                <div className=" rounded-full p-3 m-1 bg-[#2F2F2F]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
                <button className="text-sm md:text-xl font-[500] px-10 rounded-3xl text-white bg-gradient-to-r  from-[#35D373] to-[#1C9E76] h-full">
                  Explore
                </button>
              </div>
            </Link>
          </div>
          <div className="mt-10 grid lg:grid-cols-3 gap-5 lg:gap-10  justify-center items-center">
            {selectedProjects.map((project) => (
              <Link href={`/project/${project.id}`} legacyBehavior>
                <div
                  key={project.id}
                  className="relative group flex items-center   justify-center"
                >
                  <img
                    src={project.image}
                    alt={project.appName}
                    className=" rounded-lg"
                  />

                  <div className="hidden absolute group-hover:bg-black group-hover:bg-opacity-40  group-hover:block p-10 bottom-0">
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
        </div>

        <div className="lg:p-16 p-4 py-10">
          <div className="flex flex-col gap-5 items-center ">
            <h1 className="text-xl lg:text-[48px] font-[600] text-black">Our Team</h1>
            <p className="text-[16px] text-center font-[400]llg:w-[40%] text-black">
              Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus
            </p>
          </div>

          <div className="grid grid-cols-1  mt-10 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4">
              <div className="bg-white flex flex-col items-center g rounded-lg shadow-lg p-4">
                <img
                  src="/images/waqas.jpg"
                  alt={"hello"}
                  className="w-28 rounded-full h-auto"
                />
                <div className="p-4 flex gap-2 flex-col items-center">
                  <h2 className=" text-xl lg:text-2xl font-[700]">
                    Waqas Ahmed
                  </h2>
                  <p className="text-[#21AC77] font-[600]">CEO & Founder</p>
                  <p className="lg:text-[16px] font-[500] text-[#818181]">
                    Waqas Ahmed assumes the pivotal roles of Web Developer and
                    astute Team Lead, wielding a profound understanding of web
                    development intricacies. With a proven track record in
                    steering web projects to success, Waqas empowers his team
                    through visionary guidance, fostering a culture of
                    creativity and precision. His dedication to delivering
                    cutting-edge web solutions, coupled with a knack for
                    harnessing the latest technologies, ensures our team
                    consistently delivers impactful digital experiences.
                  </p>
                  <div className="flex gap-3 ">
                    <Link href={"https://github.com/abbasDD"} target="_blank">
                      <img src="/images/insta-green.png" alt="image" />
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
                <div className="p-4 flex gap-2 flex-col items-center">
                  <h2 className=" text-xl lg:text-2xl font-[700]">
                  Abdul Shakoor
                  </h2>
                  <p className="text-[#21AC77] font-[600]">TEAM LEAD / MOBILE APPS DEVELOPER</p>
                  <p className=' lg:text-[16px] font-[500] text-[#818181]'>Abdul Shakoor brings a multifaceted skill set to the fore, excelling as a Project Manager, Mobile Apps Developer, and esteemed Team Lead. With a passion for delivering excellence in every facet of app development, Abdul adeptly navigates complex projects, leveraging his leadership finesse to inspire collaboration and drive innovation. His unwavering commitment to quality ensures that our team consistently delivers bespoke mobile solutions that resonate with users and exceed client expectations.</p>
                            <div className='flex gap-3 '>
                                <Link href={'https://www.instagram.com/abdulshakoormcs/'} target='_blank'>
                                <img src='/images/insta-green.png' alt='image' />
                                </Link>
                                <Link href={'https://www.linkedin.com/in/abdulshakoormcs/'} target='_blank'>
                                <img src='/images/linkden-green.png' alt='image' />
                                </Link>
                                <Link href={'https://twitter.com/abdulshakoormcs'} target='_blank'>
                                <img src='/images/twiter-green.png' alt='image' />
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
                <div className="p-4 flex gap-2 flex-col items-center">
                  <h2 className=" text-xl lg:text-2xl font-[700]">
                  Ghulam Abbas
                  </h2>
                  <p className="text-[#21AC77] font-[600]">TEAM LEAD / WEB DEVELOPER</p>
                  <p className="lg:text-[16px] font-[500] text-[#818181]">
                  Ghulam Abbas assumes the pivotal roles of Web Developer and
                    astute Team Lead, wielding a profound understanding of web
                    development intricacies. With a proven track record in
                    steering web projects to success, Ghulam Abbas empowers his team
                    through visionary guidance, fostering a culture of
                    creativity and precision. His dedication to delivering
                    cutting-edge web solutions, coupled with a knack for
                    harnessing the latest technologies, ensures our team
                    consistently delivers impactful digital experiences.
                  </p>
                  <div className="flex gap-3 ">
                    <Link href={"https://github.com/abbasDD"} target="_blank">
                      <img src="/images/insta-green.png" alt="image" />
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
                      <img src="/images/twiter-green.png" alt="image" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         <div className="bg-gradient-to-r mb-10 flex flex-col items-center justify-center gap-5  from-[#35D373] to-[#1C9E76] lg:p-16 p-4 py-10">
                      <h1 className="text-xl lg:text-[48px] font-[600] text-white">Contact Us</h1>
                      <p className="text-white text-[16px] lg:w-[60%] text-center font-[400]">Have a question or ready to take your next step? Contact us today, and let's explore how we can collaborate to meet your needs and exceed your expectations</p>
                      <Link href={'/contact-us'}>
                      <button className="bg-black px-6 py-2 text-white rounded-lg ">Contact Us</button>
                      </Link>
         </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
