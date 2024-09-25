import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".1" className='w-full z-[99] py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text leading-[17vw] border-t-[1px] border-b-[1px] border-zinc-300 overflow-hidden flex whitespace-nowrap text-[#FFFFFF]'>
            <motion.h1 
            initial={{x: "0"}}
            animate={{x: "-100%"}}
            transition={{repeat: Infinity, ease: "linear", duration: 10}}  
             className='text-[28vw] font-["Founders"] font-medium uppercase pb-10 pr-20'>We Are Ochi</motion.h1>
            <motion.h1 
            initial={{x: "0"}}
            animate={{x: "-100%"}}
            transition={{repeat: Infinity, ease: "linear", duration: 10}}  
             className='text-[28vw] font-["Founders"] font-medium uppercase pb-10 pr-20'>We Are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee