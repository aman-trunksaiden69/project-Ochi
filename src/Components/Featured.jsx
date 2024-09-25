import { motion, useAnimation} from 'framer-motion';
import React from 'react';

function Featured() {

    const cards = [useAnimation(), useAnimation()];

  const handlehover = (index) => {
     cards[index].start({y: "0"})
  }

  const handlehoverEnd = (index) => {
    cards[index].start({y: "100%"})
 }

  return (
    <div className='w-full py-20 text-[#212121]'>

      <div className='w-full px-20 border-b-[1px] border-zinc-600 pb-8'>
            <h1 className='text-[4.2vw] font-["NeueMontreal"] tracking-normal'>Featured projects</h1>
      </div>

      <div className='allcards flex flex-col gap-20 px-20 mt-12'>
        
        <div className='cards flex gap-4'>
            <div className='textimg1 w-full transition-[all ease 0.5s]'>
                <div className='txt flex items-center gap-2'>
                <div className='circle w-4 h-4 rounded-full bg-zinc-100'></div>
                <h2 className='font-["NeueMontreal"] text-sm uppercase'>Cardboard Spaceship</h2>
                </div>

                <motion.div onHoverStart={()=> handlehover(0)} onHoverEnd={()=> handlehoverEnd(0)} className='cardcontainer relative  w-full h-[80vh] mt-5'>
                <h1 className='absolute overflow-hidden flex w-[130%] text-[#CDEA68] top-1/2 right-0 translate-x-1/2 -translate-y-1/2 z-[9] leading-none text-8xl font-["Founders"] uppercase'>
                    {"Cardboard Spaceship".split('').map((item, index) => 
                    <motion.span 
                    key={index}
                    initial={{y: "100%"}} 
                    animate={cards[0]} 
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02, duration: 0.2}} 
                    className='inline-block'>
                        {item}
                    </motion.span>)}
                </h1> 

                    <div className='cardimg w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="./website1.jpg" alt="#" />
                    </div>

                    <div className='buttons mt-5 flex gap-2'>
                    <button className='btn2 font-["NeueMontreal"] px-2 py-1 uppercase border-[1px] border-zinc-600 rounded-full text-sm'>
                        <h2>branded template</h2>
                    </button>
                    <button className='btn2 font-["NeueMontreal"] px-2 py-1 uppercase border-[1px] border-zinc-600 rounded-full text-sm'>
                        <h2>sales deck</h2>
                    </button>
                    <button className='btn2 font-["NeueMontreal"] px-2 py-1 uppercase border-[1px] border-zinc-600 rounded-full text-sm'>
                       <h2>social media template</h2>
                    </button>
                    </div>
                </motion.div>

            </div>

            <div className='textimg2 w-full'>
                <div className='txt flex items-center gap-2'>
                <div className='circle w-4 h-4 rounded-full bg-zinc-100'></div>
                <h2 className='font-["NeueMontreal"] text-sm uppercase'>AH2 & Matt Horn</h2>
                </div>

                <motion.div onHoverStart={()=> handlehover(1)} onHoverEnd={()=> handlehoverEnd(1)} className='relative cardcontainer w-full h-[80vh] mt-5'>

                    <div className='card2 w-full h-full rounded-xl overflow-hidden'>
                    <h1 className='absolute flex overflow-hidden w-[100%] text-[#CDEA68] top-1/2 left-[10%] -translate-x-1/2 -translate-y-1/2 z-[8] leading-none text-8xl font-["Founders"] uppercase'>
                    {"AH2 & Matt Horn".split('').map((item, index) => 
                    <motion.span 
                    key={index}
                    initial={{y: "100%"}} 
                    animate={cards[1]} 
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02, duration: 0.2}} 
                    className='inline-block'>
                        {item}
                    </motion.span>)}
                    </h1>
                    <div className='cardimg w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="./website2.jpg" alt="#" />
                    </div>
                    </div>
                </motion.div>

                <div className='buttons mt-5'>
                    <button className='btn2 font-["NeueMontreal"] px-2 py-1 uppercase border-[1px] border-zinc-600 rounded-full text-sm'>
                        <h2>pitch deck</h2>
                    </button>
                </div>
            </div>
              
        </div>

        <div className='cards flex gap-4'>
            <div className='textimg1 w-full'>
                <div className='txt flex items-center gap-2'>
                <div className='circle w-4 h-4 rounded-full bg-zinc-100'></div>
                <h2 className='font-["NeueMontreal"] text-sm uppercase'>Fyde</h2>
                </div>

                <motion.div onHoverStart={()=> handlehover(0)} onHoverEnd={()=> handlehoverEnd(0)} className='relative cardcontainer w-full h-[80vh] mt-5'>
                    <h1 className='absolute flex overflow-hidden w-[60%] text-[#CDEA68] top-1/2 left-[60%] translate-x-1/2 -translate-y-1/2 z-[9] leading-none text-8xl font-["Founders"] uppercase'>
                    {"Fyde".split('').map((item, index) => 
                    <motion.span 
                    key={index}
                    initial={{y: "100%"}} 
                    animate={cards[0]} 
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02, duration: 0.2}} 
                    className='inline-block'>
                        {item}
                    </motion.span>)}
                    </h1>

                    <div className='cardimg w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="./fyde.jpg" alt="#" />
                    </div>

                    <div className='buttons mt-5 flex gap-2'>
                    <button className='btn2 font-["NeueMontreal"] px-2 py-1 uppercase border-[1px] border-zinc-600 rounded-full text-sm'>
                        <h2>audit</h2>
                    </button>
                    <button className='btn2 font-["NeueMontreal"] px-2 py-1 uppercase border-[1px] border-zinc-600 rounded-full text-sm'>
                        <h2>copywriting</h2>
                    </button>
                    <button className='btn2 font-["NeueMontreal"] px-2 py-1 uppercase border-[1px] border-zinc-600 rounded-full text-sm'>
                        <h2>sales desk</h2>
                    </button>
                    <button className='btn2 font-["NeueMontreal"] px-2 py-1 uppercase border-[1px] border-zinc-600 rounded-full text-sm'>
                        <h2>slides desk</h2>
                    </button>
                    </div>
                </motion.div>
            </div>

            <div className='textimg2 w-full'>
                <div className='txt flex items-center gap-2'>
                <div className='circle w-4 h-4 rounded-full bg-zinc-100'></div>
                <h2 className='font-["NeueMontreal"] text-sm uppercase'>Vise</h2>
                </div>

                <motion.div onHoverStart={()=> handlehover(1)} onHoverEnd={()=> handlehoverEnd(1)} className='relative cardcontainer w-full h-[80vh] mt-5'>

                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <h1 className='absolute flex overflow-hidden w-[60%] text-[#CDEA68] top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 z-[9] leading-none text-8xl font-["Founders"] uppercase'>
                    {"Vise".split('').map((item, index) => 
                    <motion.span 
                    key={index}
                    initial={{y: "100%"}} 
                    animate={cards[1]} 
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02, duration: 0.2}} 
                    className='inline-block'>
                        {item}
                    </motion.span>)}
                    </h1>
                    <div className='cardimg w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="./Vise.jpg" alt="#" />
                    </div>
                    </div>
                </motion.div>

                <div className='buttons mt-5 flex gap-2'>
                    <button className='btn2 font-["NeueMontreal"] px-2 py-1 uppercase border-[1px] border-zinc-600 rounded-full text-sm'>
                        <h2>agency</h2>
                    </button>
                    <button className='btn2 font-["NeueMontreal"] px-2 py-1 uppercase border-[1px] border-zinc-600 rounded-full text-sm'>
                        <h2>company presentation</h2>
                    </button>
                </div>
            </div>
              
        </div>

        <div className='cards flex gap-4'>
            <div className='textimg1 w-full'>
                <div className='txt flex items-center gap-2'>
                <div className='circle w-4 h-4 rounded-full bg-zinc-100'></div>
                <h2 className='font-["NeueMontreal"] text-sm uppercase'>Trawa</h2>
                </div>

                <motion.div onHoverStart={()=> handlehover(0)} onHoverEnd={()=> handlehoverEnd(0)} className='relative cardcontainer w-full h-[80vh] mt-5'>
                    <h1 className='absolute flex overflow-hidden w-[60%] text-[#CDEA68] top-1/2 left-[50%] translate-x-1/2 -translate-y-1/2 z-[9] leading-none text-8xl font-["Founders"] uppercase'>
                    {"Trawa".split('').map((item, index) => 
                    <motion.span
                    key={index} 
                    initial={{y: "100%"}} 
                    animate={cards[0]} 
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02, duration: 0.2}} 
                    className='inline-block'>
                        {item}
                    </motion.span>)}
                    </h1>

                    <div className='cardimg w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="./trawa.jpg" alt="#" />
                    </div>

                    <div className='buttons mt-5 flex gap-2'>
                    <button className='btn2 font-["NeueMontreal"] px-2 py-1 uppercase border-[1px] border-zinc-600 rounded-full text-sm'>
                        <h2>brand identity</h2>
                    </button>
                    <button className='btn2 font-["NeueMontreal"] px-2 py-1 uppercase border-[1px] border-zinc-600 rounded-full text-sm'>
                        <h2>design research</h2>
                    </button>
                    <button className='btn2 font-["NeueMontreal"] px-2 py-1 uppercase border-[1px] border-zinc-600 rounded-full text-sm'>
                        <h2>investor deck</h2>
                    </button>
                    </div>
                </motion.div>
            </div>

            <div className='textimg2 w-full'>
                <div className='txt flex items-center gap-2'>
                <div className='circle w-4 h-4 rounded-full bg-zinc-100'></div>
                <h2 className='font-["NeueMontreal"] text-sm uppercase'>Premium Blend</h2>
                </div>

                <motion.div onHoverStart={()=> handlehover(1)} onHoverEnd={()=> handlehoverEnd(1)} className='relative cardcontainer w-full h-[80vh] mt-5'>

                    <div className='card w-full h-full rounded-xl overflow-hidden'>
                    <h1 className='absolute flex overflow-hidden w-[100%] text-[#CDEA68] top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-[9] leading-none text-8xl font-["Founders"] uppercase'>
                    {"Premium Blend".split('').map((item, index) => 
                    <motion.span 
                    key={index}
                    initial={{y: "100%"}} 
                    animate={cards[1]} 
                    transition={{ease: [0.22, 1, 0.36, 1], delay: index*.02, duration: 0.2}} 
                    className='inline-block'>
                        {item}
                    </motion.span>)}
                    </h1>
                    <div className='cardimg w-full h-full rounded-xl overflow-hidden'>
                        <img className='w-full h-full bg-cover' src="./premium.jpg" alt="#" />
                    </div>
                    </div>
                </motion.div>

                <div className='buttons mt-5'>
                    <button className='btn2 font-["NeueMontreal"] px-2 py-1 uppercase border-[1px] border-zinc-600 rounded-full text-sm'>
                        <h2>branded template</h2>
                    </button>
                </div>
            </div>
              
        </div>

      </div>

      <div className='buttondiv relative w-full pt-28 mt-8'>
            <button className='btn3 absolute top-[85%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex gap-5 items-center text-[1.1vw] font-medium font-["NeueMontreal"] px-6 rounded-full py-4 tracking-normal uppercase bg-[#212121] text-[#F1F1F1]'>
                <h2 className='z-[9]'>view all case studies</h2>
                <div className='circle w-2 h-2 rounded-full flex items-center justify-center bg-white'>
                  <i className="ri-arrow-up-line"></i>
                </div>
            </button>
      </div>

    </div>
  )
}

export default Featured