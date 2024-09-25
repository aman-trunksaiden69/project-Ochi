import React, { useEffect, useState } from 'react'

function Goggly() {

  const [rotate, setrotate] = useState(0);

  useEffect(() => {
   window.addEventListener("mousemove", function(e){
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    let deltaX = mouseX-window.innerWidth/2;
    let deltaY = mouseY-window.innerHeight/2;

    var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
    setrotate(angle-180);
        
   }) 
  });
  

  return (
    <div className='eyes w-full h-screen overflow-hidden bg-[#E9E9E9]'>
        <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-red-700 bg-cover bg-center bg-[url("./Top-View.ochi.jpg")]'>
         <div className='flex items-center justify-center gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
          <div data-scroll data-scroll-speed=".1" className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
          <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-950'>
          <h3 className='text-white absolute font-["NeueMontreal"] text-lg top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>PLAY</h3>
          <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
          <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
          </div>
          </div>
          </div>

          <div data-scroll data-scroll-speed=".1" className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
          <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-950'>
          <h3 className='text-white absolute font-["NeueMontreal"] text-lg top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>PLAY</h3>
          <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
          <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
          </div>
          </div> 
          </div>
         </div>
        </div>
    </div>
  )
}

export default Goggly