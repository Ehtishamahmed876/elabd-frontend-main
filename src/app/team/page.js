
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Link from 'next/link';
import React from 'react'

const Teams = () => {

    const teamMembers = [
        {
            id: 1,
            name: 'Syed Taimoor shah',
            image: '/images/taimoor.png', // Image path

            position: 'Senior Flutter  Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
            id: 2,
            name: 'Daniyal Ahmed',
            image: '/images/dinyal.jpeg', // Image path
            position: 'UI/UX Densigner',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
            id: 3,
            name: 'Muhammad Zohaib',
            image: '/images/zohaib.png', // Image path

            position: 'Flutter Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
            id: 4,
            name: 'Ehtisham Ahmed',
            image: '/images/ehtisham.jpeg', // Image path

            position: 'MERN Stack Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
            id: 5,
            name: 'Muhammad Shahwaiz',
            image: '/images/shahwaiz.png', // Image path

            position: 'Flutter Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
            id: 6,
            name: 'Muhammad Sohaib',
            image: '/images/sohaib.png', // Image path

            position: 'Flutter Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
        {
            id: 7,
            name: 'Ali Hussain',
            image: '/images/ali.png', // Image path
            position: 'Flutter Intern',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
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
            name: 'Muhammad  Ulfat',
            image: '/images/ulfat.png', // Image path

            position: 'Supporting Staff',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        },
       
        // Add more team members here
    ];
    return (
        <div className='bg-white m-3 font-inter overflow-hidden'>
            <div className='bg-white  relative overflow-hidden'>
                <div className={` md:bg-[url('/images/team-back.png')]  md:h-[50rem] bg-no-repeat  lg:bg-cover  `}>
                <Navbar />
                  <div className='p-4 lg:p-16 gap-5 flex flex-col justify-end md:absolute bottom-0'>
                      <h1 className='lg:text-[64px] text-xl text-black  md:text-white font-[600]'>Meet Our Team</h1>
                      <p className='text-sm text-black  lg:text-[18px] lg:w-[50%] md:text-white font-[400]'>Meet our exceptional team, a diverse and dynamic group of individuals united by a passion for excellence and a drive for innovation. Each member brings a unique set of skills, experiences, and perspectives to the table, creating a rich tapestry of talent that defines our collaborative spirit. We thrive on creativity, problem-solving, and a shared commitment to achieving success. Our team is not just a collection of individuals; we are a tight-knit community that values communication, mutual support, and continuous learning. Together, we embark on a journey where challenges are opportunities, and success is a collective achievement. Get to know the faces behind the innovation, as we work hand in hand to make a lasting impact in our respective fields</p>
                  </div>
                </div>
               
            </div>

            <div>

                <div className='p-4 lg:p-16 '>

                <h2 className='text-xl lg:text-[40px] mt-5 md:mt-28 text-center font-[700] text-black'>Higher Authorties</h2>
                    
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
                  <p className="lg:text-[16px] font-[500] text-center text-[#818181]">
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
                  <p className=' lg:text-[16px] text-center font-[500] text-[#818181]'>Abdul Shakoor brings a multifaceted skill set to the fore, excelling as a Project Manager, Mobile Apps Developer, and esteemed Team Lead. With a passion for delivering excellence in every facet of app development, Abdul adeptly navigates complex projects, leveraging his leadership finesse to inspire collaboration and drive innovation. His unwavering commitment to quality ensures that our team consistently delivers bespoke mobile solutions that resonate with users and exceed client expectations.</p>
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
                  <p className="lg:text-[16px] text-center font-[500] text-[#818181]">
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


                    <h2 className='text-xl lg:text-[40px] mt-28 text-center font-[700] text-black'>Team Members</h2>


                    <div className="grid grid-cols-1  mt-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="p-4">
                                <div className="bg-white rounded-lg shadow-lg p-4">
                                    <img src={member.image} alt={member.name} className="w-full rounded-full h-auto" />
                                    <div className="p-4 flex gap-2 flex-col items-center">
                                        <h2 className=" text-xl lg:text-2xl font-[700]">{member.name}</h2>
                                        <p className="text-[#21AC77] font-[600]">{member.position}</p>
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
    )
}

export default Teams