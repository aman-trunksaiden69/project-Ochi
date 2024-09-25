import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FaArrowUp } from "react-icons/fa6";



function Landingpage() {

  const [bgcolor, setbgcolor] = useState('')
  const [textcolor, settextcolor] = useState("")

  const arrow = useRef();


  const changecolor = () => {
     setbgcolor('#212121') ;
     settextcolor('#f1f1f1');
     
     if(arrow.current){
      arrow.current.style.backgroundColor = '#212121'
      arrow.current.style.color = "#f1f1f1"
      arrow.current.style.scale = "1.4"
      arrow.current.style.rotate = "190deg"
      arrow.current.style.opacity = "100%"
     }
  }

  const color = () => {
    setbgcolor('')  
    settextcolor('')

    if(arrow.current){
      arrow.current.style.backgroundColor = ''
      arrow.current.style.color = ""
      arrow.current.style.scale = ""
      arrow.current.style.rotate = "0deg"
      arrow.current.style.opacity = "50%"
     }
 }

  return (

    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full h-screen bg-[#F1F1F1] pt-1'>
        <div className='textstructure mt-[16vw] px-20'>
          {["We Create", "Eye-Opening", "Presentations"].map((item, index)=>{
            return (
            <div key={index} className='masker'>
            <div className="w-fit flex items-center">
              {index === 1 && (
                <motion.div 
                initial={{width: 0}} 
                animate={{width: "9vw"}} 
                transition={{ease: [0.76, 0, 0.24, 1], duration: 1.2}} 
                className='w-[8.5vw] m-2 h-[6vw] mt-5 rounded-md bg-red-600 bg-cover bg-center bg-[url(./content-image01.jpg)]'></motion.div>
              )}              
            <h1 className="uppercase text-[9vw] leading-[5.5vw] font-['Founders'] font-semibold">
            {item}
            </h1>
            </div>
            </div>
            )

          })}
        </div>

        <div className='border-t-[1px] border-zinc-800 mt-[4vw] flex justify-between items-center py-5 px-20'>
          {["For public and privates companies", "From the first pitch to IPO"].map((item, index)=>(
             <p key={index} className='text-md font-medium tracking-tight leading-none font-["NeueMontreal"]'>
              {item}
            </p>
          ))}

          <div className='start flex items-center gap-2'>    
              <button onMouseEnter={changecolor} onMouseLeave={color} style={{backgroundColor: bgcolor, color: textcolor}} className='butt px-4 py-1 text-[#212121] border-[1px] border-zinc-800 font-semibold text-md uppercase rounded-full font-["NeueMontreal"]'>
                start the project
              </button>

            <div ref={arrow} style={{backgroundColor: bgcolor, color: textcolor,}} className='arrow flex p-[2px] items-center justify-center border-[1px] border-zinc-800 rounded-full opacity-50'>
              <span className='rotate-[40deg]'> 
              <FaArrowUp/>
              </span>         
            </div>
          </div>

        </div>
    </div>
  
  )
}

export default Landingpage