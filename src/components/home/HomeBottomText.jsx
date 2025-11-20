import React from 'react'
import { Link } from 'react-router-dom'
import IndiaClock from './IndianClock'
import { IoEarth } from "react-icons/io5";

const HomeBottomText = () => {
  return (
   <div className='flex font-[font2] relative'>
    <div className='flex items-center gap-3 mt-15 px-6 w-[15vw] lg:opacity-100 opacity-0'>
         <IoEarth className='text-xl text-zinc-50'/>
        <IndiaClock />
    </div>
     <div className='flex justify-center gap-8 m-2 lg:ml-[27vw] absolute lg:-top-[5vh] ml-[6vh]'>
        <Link to="/works" className='lg:text-[4vw] text-[3vh] text-zinc-50 border-3 border-white rounded-full px-4 pt-2 uppercase hover:text-[#9FEA00] hover:border-[#9FEA00]'>Works</Link>
        <Link to="/agency" className='lg:text-[4vw] text-[3vh] text-zinc-50 border-3 border-white rounded-full px-4 pt-2 uppercase hover:text-[#9FEA00] hover:border-[#9FEA00]'>Agency</Link>
    </div>
   </div>
  )
}

export default HomeBottomText