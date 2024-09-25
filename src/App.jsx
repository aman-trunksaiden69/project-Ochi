import React from 'react';
import Navbar from './Components/Navbar';
import Landingpage from './Components/Landingpage';
import Marquee from './Components/Marquee';
import About from './Components/About';
import Goggly from './Components/Goggly';
import Featured from './Components/Featured';
import Client from './Components/Client';
import Threecards from './Components/Threecards';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';


function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='relative w-full min-h-screen bg-[#F1F1F1] text-[#212121]'>
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Goggly />
      <Featured />
      <Client /> 
      <Threecards />
      <Projects />
      <Footer />
    </div>

  )
}

export default App