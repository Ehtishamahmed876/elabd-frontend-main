import React from 'react'

const Service = ({icon, heading, paragraph}) => {
  return (
<div className='bg-white flex gap-2 shadow-2xl flex-col justify-center group hover:bg-gradient-to-r from-[#35D373] to-[#1C9E76] rounded-2xl p-3 items-center md:p-10'>
<div className='bg-gradient-to-r p-3 rounded-3xl from-[#35D373] to-[#1C9E76] cursor-pointer  group-hover:bg-gradient-to-r group-hover:from-[white] group-hover:to-[white]'>
   {icon}
</div>

  <h1 className='text-lg 2xl:text-[24px] font-[700] text-black group-hover:text-white'>
    {heading}
  </h1>
  <p className='text-[16px] 2xl:text-lg  font-[400] text-[#8b8b8b] group-hover:text-white w-full xl:w-[30rem] 2xl:w-[36rem] text-center'>
   {paragraph}
  </p>
</div>

  )
}

export default Service