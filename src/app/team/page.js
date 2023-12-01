import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const Teams = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Syed Taimoor shah",
      image: "/images/taimoor.png", // Image path

      position: "Senior Flutter  Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 2,
      name: "Daniyal Ahmed",
      image: "/images/dinyal.jpeg", // Image path
      position: "UI/UX Densigner",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 4,
      name: "Ehtisham Ahmed",
      image: "/images/ehtisham.jpeg", // Image path

      position: "MERN Stack Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 5,
      name: "Muhammad Shahwaiz",
      image: "/images/shahwaiz.png", // Image path

      position: "Flutter Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 6,
      name: "Muhammad Sohaib",
      image: "/images/sohaib.png", // Image path

      position: "Flutter Developer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    },
    {
      id: 7,
      name: "Ali Hussain",
      image: "/images/ali.png", // Image path
      position: "Flutter Intern",
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
      name: "Muhammad  Ulfat",
      image: "/images/ulfat.png", // Image path

      position: "Supporting Staff",
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


          <div className="p-4 lg:p-16 gap-5 flex flex-col justify-end md:absolute bottom-0">
            <h1 className="md:text-[48px] 2xl:text-[64px] text-xl text-black md:text-white font-[600]">
              Meet Our Team
            </h1>
            <p className="text-sm text-black md:text-base 2xl:text-[18px] lg:w-[50%] md:text-white font-[400]">
              Meet our exceptional team, a diverse and dynamic group of
              individuals united by a passion for excellence and a drive for
              innovation. Each member brings a unique set of skills,
              experiences, and perspectives to the table, creating a rich
              tapestry of talent that defines our collaborative spirit. Our team
              is not just a collection of individuals; we are a tight-knit
              community that values communication, mutual support, and
              continuous learning.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="p-4 lg:p-16 ">
          <h2 className="text-xl lg:text-[40px] mt-5 md:mt-28 text-center font-[700] text-black">
            Higher Authorties
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
                    Waqas Ahmed
                  </h2>
                  <p className="text-[#21AC77] font-[600]">CEO & Founder</p>
                  <p className="text-sm  2xl:text-[16px] font-[500] text-center text-[#818181]">
                    Waqas, the visionary CEO and Founder of Elabd, brings
                    a wealth of expertise in management and sales to the helm of
                    our organization. With a keen understanding of strategic
                    leadership, Waqas has successfully navigated the
                    complexities of the business landscape, steering Elabd
                    towards innovation and growth. Under his guidance, Elabd
                    thrives as a testament to his commitment to excellence,
                    leadership, and the pursuit of transformative success.
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
                    Abdul Shakoor
                  </h2>
                  <p className="text-[#21AC77] font-[600]">
                    TEAM LEAD / FLUTTER DEVELOPER
                  </p>
                  <p className="text-sm 2xl:text-[16px] text-center font-[500] text-[#818181]">
                    Abdul Shakoor, a versatile professional, serves as a Project
                    Manager, Mobile Apps Developer, and accomplished Team Lead.
                    Excelling in his role, Abdul effectively leads complex
                    projects, fostering collaboration and driving innovation.
                    His passion for excellence in mobile apps development, coupled with
                    leadership finesse, ensures our team consistently delivers
                    high-quality, tailored mobile solutions that surpass client
                    expectations.
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
                    Ghulam Abbas
                  </h2>
                  <p className="text-[#21AC77] font-[600]">
                    TEAM LEAD / WEB DEVELOPER
                  </p>
                  <p className="text-sm 2xl:text-[16px] text-center font-[500] text-[#818181]">
                    Ghulam Abbas, a Web Developer and adept Team Lead, leverages
                    a deep understanding of web development intricacies. With a
                    proven track record of steering successful web projects, he
                    empowers his team through visionary guidance, fostering a
                    culture of creativity and precision. Dedicated to delivering
                    cutting-edge web solutions and harnessing the latest
                    technologies, Ghulam ensures our team consistently creates
                    impactful digital experiences.
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
            Team Members
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
