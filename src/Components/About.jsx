import React, { useRef } from 'react'
import { FaArrowUp } from "react-icons/fa6";

function About() { 

   const arrow1 = useRef(null)

  const changecolor = () => {
    if(arrow1.current){
      arrow1.current.style.fontSize = "28px"
      arrow1.current.style.color = "white"
      arrow1.current.style.rotate = "45deg"
    }
 }

 const color = () => {
    if(arrow1.current){
      arrow1.current.style.fontSize = "1px"
      arrow1.current.style.rotate = "45deg"
      arrow1.current.style.color = "white"
    }
}


  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-full z-[999] bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["NeueMontreal"] text-5xl p-20 w-[90%]'>Ochi is a strategic presentation agency for forward-thinking
            businesses that need to raise funds, sell prod­ucts, 
            ex­plain com­plex ideas, and hire great peo­ple.
        </h1>

        <div className='w-full relative font-["NeueMontreal"] bg-[#CDEA68] text-black border-t-[1px] border-[#00000072] flex px-20 py-5'>
         <h1 className='w-[50%]'>What you can expect:</h1>
         <div className='para flex items-center flex-col gap-10'>
         <p className='w-[30%]'>We create tailored presentations to help you persuade your colleagues,
            clients, or investors. Whether it’s live or digital, delivered for
            one or a hundred people.
        </p>
        <p className='w-[30%]'>We believe the mix of strategy and design (with a bit of coffee)
           is what makes your message clear, convincing, and captivating.
        </p>
         </div>
         <div className='socialmedias absolute top-[50%] left-[85%]'>
            <h2 className='text-2xl'>S:</h2>
          {["Instagram", "Behance", "Facebook", "Linkedin"].map((item,i) => {
            return <div key={i} className='social m-1'>
              <a className='flex items-center justify-center flex-col'>{item}</a>
            </div>
          })}
         </div>
        </div>

        <div className='imgcont w-full h-[130vh] flex gap-5 p-20 border-t-[1px] border-[#0000007d] bg-[#CDEA68] mt-6'>
            <div className='approach w-1/2 font-["NeueMontreal"]'>
            <h1 className='text-[4vw]'>Our approach:</h1>
            <button className='btn1 px-9 py-4 mt-3 bg-[#212121] text-white'>
              <h1 className='head z-[9]'>READ MORE</h1> 
              <span ref={arrow1} className='circle z-[9] flex items-center justify-center rounded-full'>
                 <i className="ri-arrow-up-line"></i>
               </span>
            </button>
            </div>

            <div className='w-1/2 h-[70vh] rounded-lg bg-[#bde629] bg-cover bg-center bg-[url("./Homepage.jpg")]'>
            </div>
        </div>
    </div>
  )
}

export default About