/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

function Eyes() {
 const [rotate, setRotate] = useState(0);

 useEffect(() => {
   window.addEventListener("mousemove", (e) => {
     let mouseX = e.clientX;
     let mouseY = e.clientY;

     // Calculate the delta between the mouse position and center of the screen
     let deltaX = mouseX - window.innerWidth / 2;
     let deltaY = mouseY - window.innerHeight / 2;

     // Calculate the angle in degrees
     var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
     setRotate(angle-180);
   })

   // Add event listener for mouse movement
   

   // Clean up event listener on component unmount
   
 }, []);

 return (
   <div className='eyes w-full h-screen overflow-hidden flex items-center justify-center'> 
     {/* Background Image */}
     <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] flex items-center justify-center'>
       
       {/* Eye Container (using flex to center eyes horizontally) */}
       <div className='flex gap-16'>
         
         {/* Left Eye */}
         <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
           <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
             {/* Pupil movement */}
             <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 w-full h-10"></div>
             <div className='w-12 h-9 rounded-full bg-zinc-100'></div>
           </div>
         </div>
         
         {/* Right Eye */}
         <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
           <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
             {/* Pupil movement */}
             <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 w-full h-10"></div>
             <div className='w-14 h-10 rounded-full bg-zinc-100'></div>
           </div>
         </div>
         
       </div>
     </div>
   </div>
 )
}

export default Eyes
