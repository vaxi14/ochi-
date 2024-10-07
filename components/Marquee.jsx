/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div className='w-full py-10 bg-[#004D43] overflow-hidden'>
      <div className='text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap'>
        {/* First set of repeated text */}
        <motion.div
          className='flex'
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
        >
          <h1 className='text-[12vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-1 -mb-[1vw] font-semibold'>
            we are ochi
          </h1>
          <div className="ml-[20vw]"></div> {/* Spacer to avoid overlap */}
          <h1 className='text-[12vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-1 -mb-[1vw] font-semibold'>
            we are ochi
          </h1>
        </motion.div>

        {/* Second set of repeated text */}
        <motion.div
          className='flex'
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10, delay: 5 }}
        >
          <h1 className='text-[12vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-1 -mb-[1vw] font-semibold'>
            we are ochi
          </h1>
          <div className="ml-[20vw]"></div> {/* Spacer to avoid overlap */}
          <h1 className='text-[12vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-1 -mb-[1vw] font-semibold'>
            we are ochi
          </h1>
        </motion.div>

        <motion.div
          className='flex'
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10, delay: 5 }}
        >
          <h1 className='text-[12vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-1 -mb-[1vw] font-semibold'>
            we are ochi
          </h1>
          <div className="ml-[20vw]"></div> {/* Spacer to avoid overlap */}
          <h1 className='text-[12vw] leading-none font-["Founders_Grotesk_X-Condensed"] uppercase pt-1 -mb-[1vw] font-semibold'>
            we are ochi
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
