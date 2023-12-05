import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const UxuiPage = () => {
  return (
    <div className='m-3 overflow-hidden'>
        <div className='bg-white '>
              <Navbar />
              <div className='md:px-16 p-8 flex flex-col xl:flex-row justify-center items-center'>
                   <div className='flex flex-col  gap-5'>
                        <h1 className=' text-2xl  md:text-[32px] 2xl:text-[40px] font-[500] text-black'>UI/UX Design</h1>
                        <p className='text-3xl md:text-[48px] md:w-[30rem]  2xl:text-[64px] md:leading-[4rem] font-[600] 2xl:w-[45rem] text-[#21AC77]'>Make the result beautiful. And the effort invisible</p>
                        <p className='2xl:text-xl font-[400] lg:w-[40rem] text-[#6b6b6b]'>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. torquent per conubia nostra, </p>
                        <div>
                        <button className='bg-gradient-to-r from-[#35D373] to-[#1C9E76] px-8 py-3 rounded-full text-white'>Apply Now</button>
                        </div>
                   </div>
                   <div>
                      <img src='/images/uiux-image.png' alt='side image' />
                   </div>
              </div>
        </div>


        <div className='p-8 md:p-16'>
            <h1 className='text-2xl md:text-[40px] md:leading-[3rem] 2xl:text-[48px] lg:w-[60%] font-[600] text-[#21AC77]'>“Our team works closely with the hardware and software designers to optimize the user experience.”</h1>
            <div className='mt-10 flex flex-col md:flex-row gap-10 items-center md:gap-20 2xl:gap-40'>
                <div className='flex  flex-col gap-10'>
                    <p className=' text-sm 2xl:text-lg font-[400] text-black'>Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risuenim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                    <p className=' text-sm 2xl:text-lg font-[400] text-black'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac</p>
                    <p className=' text-sm 2xl:text-lg font-[400] text-black'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringi</p>
                </div>
                <div>
                    <p className=' text-sm 2xl:text-lg font-[400] 2xl:w-[45rem]  text-black'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                </div>
            </div>
        </div>

        <div className='bg-white p-8 md:p-16 flex flex-col justify-center items-center gap-5'>
            <h1 className='text-2xl md:text-[40px] font-[600] text-black'>Find a team and begin your ownstory here.</h1>
            <p className='text-[#3b3b3b]  md:text-xl md:w-[40rem] text-center'>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <div>
            <button className='bg-black mt-5 text-white px-10 py-5 rounded-3xl'>Get Started</button>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default UxuiPage
