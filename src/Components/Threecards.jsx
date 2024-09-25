import React from 'react'

function Threecards() {
  return (
    <div className='w-full h-screen flex gap-4 px-20'>
        <div className='flex gap-4 w-full h-full'>
        <div className='cardcontainer h-[60vh] w-1/2'>
          <div className='card relative w-full h-full rounded-xl bg-[#004D43] flex items-center justify-center'>
            <img className='w-32 bg-cover' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute left-5 bottom-4 px-2 font-semibold py-1 text-sm font-["NeueMontreal"] border-[1px] border-[#CDEA68] text-[#CDEA68] rounded-full'>©2019–2022</button> 
          </div>
        </div>

        <div className='cardcontainer flex gap-4 h-[60vh] w-1/2'>
          <div className='card relative w-full h-full bg-[#212121] rounded-xl flex items-center justify-center'>
            <img className='w-32 bg-cover' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='btn4 absolute left-5 bottom-4 px-2 font-semibold py-1 text-sm font-["NeueMontreal"] border-[1px] border-[#fff] text-[#fff] rounded-full'>Rating 5.0 on Clutch</button>
          </div>
          <div className='card relative w-full h-full bg-[#212121] rounded-xl flex items-center justify-center'>
          <img className='w-32 bg-cover' src="./logo003.jpg" alt="" />
            <button className='btn4 absolute left-5 bottom-4 px-2 font-semibold py-1 text-sm font-["NeueMontreal"] border-[1px] border-[#fff] text-[#fff] rounded-full'>Business Bootcamp Alumni</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Threecards