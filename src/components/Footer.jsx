import React from 'react'
import IndianClock from './home/IndianClock'
import { IoEarth } from "react-icons/io5";

export default function Footer() {
  
  return (
    <footer className="w-full bg-black text-white px-8 py-4 lg:h-[50vh] h-[80vh] flex flex-col justify-between items-center gap-6 relative">
      {/* Top Social + Contact */}
      <div className="w-full flex lg:flex-row flex-col justify-between items-center">
        <div className="flex items-start lg:gap-4 gap-2 absolute lg:static top-4">
          {["FB", "IG", "IN", "BE"].map((label) => (
            <button
              key={label}
              className="px-8 py-2 border-2 pt-4 border-white hover:border-[#D3FD50] rounded-full font-[font2] hover:text-[#D3FD50] lg:text-4xl text-xl transition"
            >
              {label}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-6 px-8 py-2 border-2 pt-4 lg:mt-[0vh] mt-[35vh] border-white hover:border-[#D3FD50] rounded-full font-[font2] hover:text-[#D3FD50] text-4xl transition">
          CONTACT <span className="text-4xl">♥</span>
        </button>
      </div>

      {/* Bottom Info */}
      <div className="w-full flex lg:flex-row flex-col justify-between lg:items-center items-start font-semibold">
        <div className="flex items-center gap-2">
             <IoEarth className='text-xl text-zinc-50'/>
        <IndianClock />
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-6 gap-0.5 lg:iteams-center text-start lg:text-[1vw] text-[1vh] lg:py-0 py-3">
          <a href="#" className="hover:underline">
            PRIVACY POLICY
          </a>
          <a href="#" className="hover:underline">
            PRIVACY NOTICE
          </a>
          <a href="#" className="hover:underline">
            ETHICS REPORT
          </a>
          <a href="#" className="hover:underline">
            CONSENT CHOICES
          </a>
        </div>

        <a href="#top" className="back hover:underline">
          BACK TO TOP
        </a>
      </div>
    </footer>
  );
}
