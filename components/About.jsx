/* eslint-disable no-unused-vars */
import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4vw]">Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className="w-full border-t-[1px] pt-10 mt-20 border-[#a0b35a] flex gap-5">
        <div className="w-1/2 ">
            <h1 className="text-7xl ">Our Approach</h1>
            <button className="flex gap-6 items-center px-8 py-4 bg-zinc-900 rounded-full text-white mt-9">READ MORE
                <div className="w-3 h-3  bg-zinc-100 rounded-full"></div>
            </button>
        </div>
            <div className="w-1/2 h-[80vh] rounded-3xl ">
            <img className='h-[80vh]' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
      </div>
    </div>
  )
}

export default About
