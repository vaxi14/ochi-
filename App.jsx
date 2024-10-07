/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Make sure to import CSS for LocomotiveScroll


function App() {
  const scrollRef = useRef(null); // Reference for the scroll container

  useEffect(() => {
    // Initialize LocomotiveScroll when the component is mounted
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current, // Attach LocomotiveScroll to the scroll container
      smooth: true,
    });

    return () => {
      // Clean up the LocomotiveScroll instance when the component unmounts
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} className='w-full h-screen bg-[#F1F1F1] text-[#212121]'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
