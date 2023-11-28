import Navbar from '@/components/Navbar'
import Service from '@/components/homecomponents/Service'
import Footer from '@/components/Footer'
import Link from 'next/link'
import React from 'react'

const Services = () => {
    return (
        <div className='overflow-hidden font-inter'>
            <div className='relative  z-20 '>
                <svg
                    className="hidden md:block absolute -bottom-10 left-0 w-full h-28 z-10 px-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#55C595"
                        d="M0 30 q150 -60 300 0 t300 0 t300 0 t300 0 t300 0 v70 H0 v-60 Z"
                    ></path>
                </svg>
                <div className='bg-gradient-to-r from-[#001F13]  to-[#55C595] relative   m-3' >
                    <div className='absolute w-full'>
                        <Navbar />
                    </div>

                    <div className='flex  justify-between items-center p-5 md:p-0'>
                        <div className='hidden md:block flex-1'>
                            <img src='/images/service-left-img.png' alt='image' />
                        </div>
                        <div className='flex-1'>
                            <img src='/images/service-right-img.png' alt='image' />
                            <div className='flex flex-col gap-3 items-center'>
                                <div className='bg-white rounded-xl p-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-black ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                    </svg>
                                </div>
                                <h1 className='text-3xl text-white font-[700]'>Ui & Ux Design</h1>
                                <p className='text-white md:w-[30rem] text-center font-[300]'> Discover a new level of user interaction with Us' superior UI and UX design services. Our approach focuses on creating visually appealing and easy-to-use digital environments that captivate users. We prioritize seamless experiences to ensure your audience remains engaged and satisfied. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='md:mt-40 mt-10 relative md:px-20 px-4 mb-10'>
                <div className='flex flex-col  lg:flex-row gap-10 md:gap-20'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='font-[700] text-3xl md:text-[48px] text-black'>Services We Offer</h1>
                        <p className='font-[400] text-[16px] text-[#808080]'>We provide a diverse array of solutions meticulously crafted to suit your distinct requirements. Our services span strategic consulting, seamless app and website development, and expertly designed UI/UX solutions, animations, and desktop software. Our dedicated team is committed to delivering nothing short of excellence, offering you a world of possibilities to elevate your digital journey.</p>
                        <div className='hidden lg:block absolute  bottom-48 right-24'>
                           <img src='/images/bg-service.png' alt='bg-image' className='w-full' />
                        </div>
                    </div>

                    <div>

                        <div className='flex flex-col gap-10 border-b-2 relative border-black p-8 md:px-16 border-t-2' >
                            <p className='text-black text-[16px] font-[700] absolute left-1 top-5 '>01/</p>
                            <div className='flex flex-col md:flex-row items-center md:gap-8'>
                                <h1 className='font-[700] text-[48px] text-black'>Ui/Ux Design</h1>
                                <p className='font-[400] text-[16px] text-[#808080]'>Discover a new level of user interaction with Us' superior UI and UX design services. Our approach focuses on creating visually appealing and easy-to-use digital environments that captivate users. We prioritize seamless experiences to ensure your audience remains engaged and satisfied.</p>
                            </div>
                            <div className='flex justify-between'>
                                <button className="bg-black p-3 text-white w-40 rounded-3xl">Explore</button>
                                <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-10 border-b-2 relative border-black p-8 md:px-16 ' >
                            <p className='text-black text-[16px] font-[700] absolute left-1 top-5 '>01/</p>
                            <div className='flex flex-col md:flex-row items-center md:gap-8'>
                                <h1 className='font-[700] text-[48px] text-black'>Flutter Development</h1>
                                <p className='font-[400] text-[16px] text-[#808080]'>Experience the pinnacle of cross-platform development through Our' expert Flutter services. We specialize in blending performance and aesthetics, utilizing Flutter's capabilities to build standout applications. Our proficiency guarantees dynamic and feature-rich apps that offer an exceptional user experience.</p>
                            </div>
                            <div className='flex justify-between'>
                                <button className="bg-black p-3 text-white w-40 rounded-3xl">Explore</button>
                                <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10 border-b-2 relative border-black p-8 md:px-16 ' >
                            <p className='text-black text-[16px] font-[700] absolute left-1 top-5 '>01/</p>
                            <div className='flex flex-col md:flex-row items-center md:gap-8'>
                                <h1 className='font-[700] text-[48px] text-black'>Web Design</h1>
                                <p className='font-[400] text-[16px] text-[#808080]'>Elevate your online presence with Us' custom web design services. We specialize in creating visually stunning websites that not only catch the eye but also ensure smooth and efficient functionality. Our expertise lies in blending aesthetics with user-friendly design, ensuring an immersive experience for your audience.</p>
                            </div>
                            <div className='flex justify-between'>
                                <button className="bg-black p-3 text-white w-40 rounded-3xl">Explore</button>
                                <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10  relative  p-8 md:px-16 ' >
                            <p className='text-black text-[16px] font-[700] absolute left-1 top-5 '>01/</p>
                            <div className='flex flex-col md:flex-row items-center md:gap-8'>
                                <h1 className='font-[700] text-[48px] text-black'>Animation Making</h1>
                                <p className='font-[400] text-[16px] text-[#808080]'>Experience the power of storytelling through Our' animation design services. We bring creativity to life by transforming static ideas into captivating and engaging animations. Our team excels in crafting dynamic visuals that convey your message effectively and leave a lasting impact on your audience.</p>
                            </div>
                            <div className='flex justify-between'>
                                <button className="bg-black p-3 text-white w-40 rounded-3xl">Explore</button>
                                <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>










            {/* Our Latest Projects  */}



            <div className='bg-white md:mt-20 p-4 pt-8 md:p-16'>
                <div className='flex flex-col gap-5 items-center'>
                    <h1 className=' text-3xl md:text-[48px] font-[700] text-black '>Our lastest Projects</h1>
                    <p className='text-[20px] md:w-[35rem] text-center font-[400] text-[#808080]'>Explore innovation and excellence with Elabd Technologies through our recent projects </p>
                </div>
                <div className='mt-20'>

                    <div className='flex flex-col justify-center lg:flex-row items-center '>

                        <div>
                            <div className='relative group'> 
                              <Link href={"https://www.google.com/"} target='_blank' >
                                <img src='/images/tab1.png' alt='img' />
                                <div className='hidden absolute group-hover:block p-10 top-0' >
                                    <div className=''>

                                        <div className='flex  items-center gap-3'>
                                            <h1 className='text-black font-[700] text-2xl'>App Name</h1>
                                            <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>

                                        </div>
                                        <p className='text-black foot-[400] hidden lg:block'>
                                            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                                        </p>
                                    </div>

                                </div>
                                </Link>
                            </div>
                            <div className='relative group'> 
                              <Link href={"https://www.google.com/"} target='_blank' >
                                <img src='/images/tab2.png' alt='img' />
                                <div className='hidden absolute group-hover:block p-10 top-0' >
                                    <div className=''>

                                        <div className='flex  items-center gap-3'>
                                            <h1 className='text-black font-[700] text-2xl'>App Name</h1>
                                            <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>

                                        </div>
                                        <p className='text-black foot-[400] hidden lg:block'>
                                            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                                        </p>
                                    </div>

                                </div>
                                </Link>
                            </div>

                            <div className='relative group'> 
                              <Link href={"https://www.google.com/"} target='_blank' >
                                <img src='/images/tab3.png' alt='img' />
                                <div className='hidden absolute group-hover:block p-10 top-0' >
                                    <div className=''>

                                        <div className='flex  items-center gap-3'>
                                            <h1 className='text-black font-[700] text-2xl'>App Name</h1>
                                            <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>

                                        </div>
                                        <p className='text-black foot-[400] hidden lg:block'>
                                            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                                        </p>
                                    </div>

                                </div>
                                </Link>
                            </div>

                        </div>
                        <div>
                        <div className='relative group'> 
                              <Link href={"https://www.google.com/"} target='_blank' >
                                <img src='/images/tab4.png' alt='img' />
                                <div className='hidden absolute group-hover:block p-10 top-0' >
                                    <div className=''>

                                        <div className='flex  items-center gap-3'>
                                            <h1 className='text-black font-[700] text-2xl'>App Name</h1>
                                            <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>

                                        </div>
                                        <p className='text-black foot-[400] hidden lg:block'>
                                            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                                        </p>
                                    </div>

                                </div>
                                </Link>
                            </div>
                            <div className='relative group'> 
                              <Link href={"https://www.google.com/"} target='_blank' >
                                <img src='/images/tab5.png' alt='img' />
                                <div className='hidden absolute group-hover:block p-10 top-0' >
                                    <div className=''>

                                        <div className='flex  items-center gap-3'>
                                            <h1 className='text-black font-[700] text-2xl'>App Name</h1>
                                            <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>

                                        </div>
                                        <p className='text-black foot-[400] hidden lg:block'>
                                            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                                        </p>
                                    </div>

                                </div>
                                </Link>
                            </div>


                        </div>
                        <div>
                        <div className='relative group'> 
                              <Link href={"https://www.google.com/"} target='_blank' >
                                <img src='/images/tab6.png' alt='img' />
                                <div className='hidden absolute group-hover:block p-10 top-0' >
                                    <div className=''>

                                        <div className='flex  items-center gap-3'>
                                            <h1 className='text-black font-[700] text-2xl'>App Name</h1>
                                            <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>

                                        </div>
                                        <p className='text-black foot-[400] hidden lg:block'>
                                            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                                        </p>
                                    </div>

                                </div>
                                </Link>
                            </div>
                            <div className='relative group'> 
                              <Link href={"https://www.google.com/"} target='_blank' >
                                <img src='/images/tab7.png' alt='img' />
                                <div className='hidden absolute group-hover:block p-10 top-0' >
                                    <div className=''>

                                        <div className='flex  items-center gap-3'>
                                            <h1 className='text-black font-[700] text-2xl'>App Name</h1>
                                            <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>

                                        </div>
                                        <p className='text-black foot-[400] hidden lg:block'>
                                            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                                        </p>
                                    </div>

                                </div>
                                </Link>
                            </div>
                            <div className='relative group'> 
                              <Link href={"https://www.google.com/"} target='_blank' >
                                <img src='/images/tab8.png' alt='img' />
                                <div className='hidden absolute group-hover:block p-10 top-0' >
                                    <div className=''>

                                        <div className='flex  items-center gap-3'>
                                            <h1 className='text-black font-[700] text-2xl'>App Name</h1>
                                            <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>

                                        </div>
                                        <p className='text-black foot-[400] hidden lg:block'>
                                            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                                        </p>
                                    </div>

                                </div>
                                </Link>
                            </div>

                        </div>

                        <div>
                        <div className='relative group'> 
                              <Link href={"https://www.google.com/"} target='_blank' >
                                <img src='/images/tab4.png' alt='img' />
                                <div className='hidden absolute group-hover:block p-10 top-0' >
                                    <div className=''>

                                        <div className='flex  items-center gap-3'>
                                            <h1 className='text-black font-[700] text-2xl'>App Name</h1>
                                            <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>

                                        </div>
                                        <p className='text-black foot-[400] hidden lg:block'>
                                            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                                        </p>
                                    </div>

                                </div>
                                </Link>
                            </div>
                            <div className='relative group'> 
                              <Link href={"https://www.google.com/"} target='_blank' >
                                <img src='/images/tab5.png' alt='img' />
                                <div className='hidden absolute group-hover:block p-10 top-0' >
                                    <div className=''>

                                        <div className='flex  items-center gap-3'>
                                            <h1 className='text-black font-[700] text-2xl'>App Name</h1>
                                            <div className='bg-black p-3 rounded-full  bg-gradient-to-r  from-[#35D373] to-[#1C9E76]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </div>

                                        </div>
                                        <p className='text-black foot-[400] hidden lg:block'>
                                            Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                                        </p>
                                    </div>

                                </div>
                                </Link>
                            </div>


                        </div>

                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Services