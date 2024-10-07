/* eslint-disable no-unused-vars */
import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-[#F1F1F1] flex items-center  gap-3 px-32'>
      <div className='cardcontainer h-[50vh] w-1/2 '>
            <div className='card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center '>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-3 py-1 rounded-full text-white border-2 left-8 bottom-7  '>&copy; 2019-2022</button>
            </div>
      </div>
      <div className='cardcontainer h-[50vh] gap-4 flex w-1/2 '>
      <div className='card relative w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center '>
        <img  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        <button className='absolute px-3 py-1 rounded-full text-white border-2 left-6 bottom-7  '>RATING 5.0 ON CLUTCH</button>
      </div>
      <div className='card relative w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center '>
      <img className='w-20' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
      <button className='absolute px-3 py-1 rounded-full text-white border-2 left-6 bottom-7  '>BUSINESS BOOTCAMP ALUMNI</button>
      </div>
      
      </div>
    </div>
  )
}

export default Cards
