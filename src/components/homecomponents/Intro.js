import React from 'react'
import Navbar from '../Navbar'
import Link from 'next/link'

const Intro = () => {
  return (
    <div className='wavy-border bg-white m-3   pb-5  md:pb-28'>
    <Navbar />

    <div className='  md:mt-10 mt-2 px-4 p-2 md:px-16  flex'>

      <div className='flex flex-col justify-center items-center lg:items-start  lg:w-[55%] gap-5 md:gap-5'>

        <div className='font-inter text-black '>
          <h1 className='2xl:text-[48px] md:text-[40px] md:leading-[52px] 2xl:leading-[5rem]  font-[600] text-xl '><span className='font-[700] text-[#21AC77] text-xl md:text-[48px] 2xl:text-[64px]'>Build</span> Your Dream </h1>
          <h2 className='2xl:text-[48px] md:text-[40px] md:leading-[52px] 2xl:leading-[5rem] font-[600] text-xl  '>App & Website With</h2>
          <h3 className='font-[700] text-[#21AC77] text-xl md:leading-[52px] 2xl:leading-[5rem] md:text-[48px]   2xl:text-[64px]'>Elabd Technologies</h3>
        </div>

        <div>
          <p className=' text-sm text-center md:text-start md:text-lg 2xl:text-xl font-[400] text-[#7a7a7a]'> We specialize in crafting innovative apps and websites that amplify your digital presence. With cutting-edge technology and creative design, we bring your vision to life. Let's elevate your digital footprint together.</p>
        </div>

        <div className='flex gap-3'>

        
          <Link href={'/contact-us'}>

          <button className='bg-gradient-to-r px-10 py-2 rounded-3xl from-[#35D373] to-[#1C9E76]'>Hire us</button>
          </Link>

        </div>


        <div className='flex flex-col md:flex-row relative md:right-14 justify-start  items-center'>

           <div className='flex relative '>
           <img src="/images/person1.png"  alt="person1 img"  className="w-16 h-16  relative md:left-12 "/>
           <img src="/images/person2.png"  alt="person2 img"  className="w-16 h-16  relative md:left-6"/>
           <img src="/images/person3.png"  alt="person3 img"  className="w-16 h-16  relative "/>
           </div>

           <div>
            <p className='md:text-2xl  xl:text-[32px]  font-[500] text-black'>Trusted by 1000+ People</p>
           </div>

        </div>


      </div>
      <div className='hidden lg:block  w-[45%] '>
      <img src="/images/home-side-img.png"  alt="person1 img"  className="md:w-full md:h-full w-56 h-56  relative md:left-12 "/>

      </div>

    </div>
  </div>
  )
}

export default Intro