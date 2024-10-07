/* eslint-disable no-unused-vars */
import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  // Handle hover start
  const handleHoverStart = (index) => {
    cards[index].start({ y: "0%" }); // Animate text into view on hover
  };

  // Handle hover end (reset to initial state)
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" }); // Animate text back out of view when hover ends
  };

  return (
    <div className='w-full py-20 bg-[#F1F1F1]'>
      <div className='w-full px-20 border-b-2 pb-20'>
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
      </div>
      <div className='px-10'>
        <div className="cards w-full flex gap-12 pt-20">
          {/* First Card - FYDE */}
          <motion.div 
            onHoverStart={() => handleHoverStart(0)} 
            onHoverEnd={() => handleHoverEnd(0)} 
            className='cardcontainer relative w-1/2 h-[70vh] '
          >
            <h1 className="absolute text-blue-400 flex tracking-tighter overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl">
              {"FYDE".split('').map((item, index) => (
                <motion.span 
                  initial={{ y: "100%" }} 
                  animate={cards[0]} 
                  transition={{ ease: [], delay: index * 0.2 }} 
                  className='inline-block ' 
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="FYDE Project" />
            </div>
          </motion.div>

          {/* Second Card - VISE */}
          <motion.div 
           onHoverStart={() => handleHoverStart(1)} 
           onHoverEnd={() => handleHoverEnd(1)}
            className='cardcontainer relative w-1/2 h-[70vh] '
          >
            <h1 className="absolute text-blue-400 tracking-tighter right-full flex overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-8xl">
              {"VISE".split('').map((item, index) => (
                <motion.span 
                initial={{ y: "100%" }} 
                animate={cards[1]} 
                transition={{ ease: [], delay: index * 0.2 }} 
                className='inline-block ' 
                key={index}
              >
                {item}
              </motion.span>
              ))}
            </h1>
            <div className='w-full h-full rounded-xl overflow-hidden'>
              <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="VISE Project" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
