/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowTurnUp } from "react-icons/fa6";

function LandingPage() {
    
  return (
    <div className='w-full h-screen bg-[#F1F1F1] pt-1 '>
        <div className="textstructure  mt-52 px-20  ]">
        {["we create", "eye-opening", "presentation"].map((item, index) => {
    return (
        <div key={index} className="masker">
            <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                    <motion.div
                    initial={{ width: 0 }} // Initial width is 0
                    animate={{ width: '7vw' }} // Animates to full width
                    transition={{ duration: 1, ease: 'easeInOut' }} // Add transition to control speed and easing
                    className="mr-[1.5vw] w-[7vw] h-[5.8vw] top-[1.1vw] relative "
                  >
                    <img src="https://library.elementor.com/digital-marketing-studio/wp-content/uploads/sites/179/2022/03/Post_Omi_Img_2.png" alt="" />
                  </motion.div>
                    )}
            <h1 className="-mb-[0.9vw] uppercase text-[6vw] leading-[6vw]  font-['Founders_Grotesk_X-Condensed'] font-bold">
                {item}
            </h1>
            </div>
            
        </div>
    );
})}

            
            
        </div>
      <div className="border-t-[1px] border-zinc-600 mt-20 flex justify-between items-center py-4 px-20">
      {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
    return (
        <p key={index} className="text-md font-light tracking-tight leading-none">
            {item}
        </p>
    );
})}
    <div className="start flex items-center gap-1">
        <div className="px-4 py-2 border-[2px] border-red-500 rounded-full cursor-pointer">start the project</div>
        <div className="w-3=10 h-10 flex items-center justify-center rounded-full border-[2px] border-red-500">
            <span className="rotate-[45deg]">
            <FaArrowTurnUp/>
            </span>
            
        </div>
    </div>

      </div>
    </div>
  )
}

export default LandingPage
