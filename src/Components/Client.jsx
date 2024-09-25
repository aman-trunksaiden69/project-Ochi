import React, { useRef, useState } from 'react';
import { FaArrowUp } from "react-icons/fa6";


function Client() {

  const [bgcolor, setbgcolor] = useState('')
  const [textcolor, settextcolor] = useState("")
  const [bgcolorsecond, setbgcolorsecond] = useState('')
  const [textcolorsecond, settextcolorsecond] = useState("")

  const arrow = useRef();
  const arrowsecond = useRef();


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


 const changecolorsecond = () => {
  setbgcolorsecond('#212121') ;
  settextcolorsecond('#f1f1f1');
  
  if(arrowsecond.current){
   arrowsecond.current.style.backgroundColor = '#212121'
   arrowsecond.current.style.color = "#f1f1f1"
   arrowsecond.current.style.scale = "1.4"
   arrowsecond.current.style.rotate = "190deg"
   arrowsecond.current.style.opacity = "100%"
  }
}

const colorsecond = () => {
 setbgcolorsecond('')  
 settextcolorsecond('')

 if(arrowsecond.current){
   arrowsecond.current.style.backgroundColor = ''
   arrowsecond.current.style.color = ""
   arrowsecond.current.style.scale = ""
   arrowsecond.current.style.rotate = "0deg"
   arrowsecond.current.style.opacity = "50%"
  }
}


  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-600 pb-8'>
        <h1 className='text-[4.2vw] font-["NeueMontreal"] tracking-normal'>Client's reviews</h1>
      </div>

      <div className='reviews w-full px-20 py-4 flex gap-48'>
        <a href='#' className='font-["NeueMontreal"] text-md'>Karman Ventures</a>
        <h2 className='font-["NeueMontreal"] text-md'>Services:</h2>
        <h2 className='font-["NeueMontreal"] text-md'>William Barnes</h2>
      </div>

      <div className='w-full flex justify-end gap-10 mr-32 mt-12'>

        <div className='btndiv absolute right-[52%] w-[20%] flex flex-col items-start gap-2'>
          <div className='flex items-center gap-5'>
          <button 
            onMouseEnter={changecolor} 
            onMouseLeave={color} 
            style={{backgroundColor: bgcolor, color: textcolor}} 
            className='butt px-4 py-1 text-[#212121] border-[1px] border-zinc-800 font-semibold text-md uppercase rounded-full font-["NeueMontreal"]'>
          investor deck
          </button>

        <div 
            ref={arrow} 
            style={{backgroundColor: bgcolor, color: textcolor,}} 
            className='arrow h-5 w-5 flex p-[2px] items-center justify-center border-[1px] border-zinc-800 rounded-full opacity-50'>
              <span className='rotate-[40deg]'> 
              <FaArrowUp/>
              </span>         
        </div>
          </div>  

          <div className='flex items-center gap-5'>
          <button 
            onMouseEnter={changecolorsecond} 
            onMouseLeave={colorsecond} 
            style={{backgroundColor: bgcolorsecond, color: textcolorsecond}} 
            className='butt px-4 py-1 text-[#212121] border-[1px] border-zinc-800 font-semibold text-md uppercase rounded-full font-["NeueMontreal"]'>
          sales deck
        </button>

        <div 
            ref={arrowsecond} 
            style={{backgroundColor: bgcolorsecond, color: textcolorsecond,}} 
            className='arrow h-5 w-5 flex p-[2px] items-center justify-center border-[1px] border-zinc-800 rounded-full opacity-50'>
              <span className='rotate-[40deg]'> 
              <FaArrowUp/>
              </span>         
        </div>
          </div>    
        </div>

        <div className='imgdiv w-[50%] h-[25vw] flex flex-col gap-5 px-10'>
        <img className='w-[17%] bg-cover rounded-md' src="./William.jpg" alt="" />
             <p className='w-[80%] font-["NeueMontreal"] text-md'>They were transparent about the time and the stages of the project. 
                The end product is high quality, and I feel confident about how 
                they were handholding the client through the process. I feel 
                like I can introduce them to someone who needs to put a 
                sales deck together from scratch, and they would be 
                able to handhold the client experience from 0 to 100
                very effectively from story to design. 5/5</p>
        </div>

      </div>
      
      </div>

  )
}

export default Client