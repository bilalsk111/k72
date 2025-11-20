import React, { useRef, useEffect, useState } from "react";
import gsap from 'gsap';
import { teamArray } from "../teamData";

const ProfileCard = () => {
  const frontTextRef = useRef(null);
  const backTextRef = useRef(null);

  // Pick one random member on reload
  const [activeMember] = useState(
    teamArray[Math.floor(Math.random() * teamArray.length)]
  );



  useEffect(() => {


    // Front text → left to right
    gsap.to(frontTextRef.current, {
      x: "100vw",
      duration: 8,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % window.innerWidth),
      },
    });

    // Back text → right to left
    gsap.to(backTextRef.current, {
      x: "-100vw",
      duration: 8,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % window.innerWidth),
      },
    });
  }, []);

  return (
    <div className="flex w-full lg:h-screen  overflow-hidden">
      {/* Centered Profile */}
      <div className="w-full h-full flex items-center justify-center relative">
        {/* Back marquee text */}
        <div
          ref={backTextRef}
          className="absolute text-[8vw] font-[font2]  text-[#D3FD50] uppercase z-0 whitespace-nowrap top-[15%] flex"
        >
            <div className="w-[100vw] h-fit flex items-start">
           <span>{activeMember.lastName}</span>
         </div>
            <div className="w-[100vw] h-fit flex items-start">
           <span>{activeMember.lastName}</span>
         </div>
            <div className="w-[100vw] h-fit flex items-start">
           <span>{activeMember.lastName}</span>
         </div>
            <div className="w-[100vw] h-fit flex items-start">
           <span>{activeMember.lastName}</span>
         </div>
        </div>

        {/* Profile Image */}
        <div className="relative lg:w-[30vw] w-[60vw] lg:h-screen h-[40vh] overflow-hidden z-10 shadow-xl">
          <img
            src={activeMember.image}
            alt={`${activeMember.firstName} ${activeMember.lastName}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Front marquee text */}
        <div
          ref={frontTextRef}
          className="absolute text-[8vw] text-black uppercase z-20 whitespace-nowrap bottom-[15%] flex font-[font2]"
        >
         <div className="w-[100vw] h-fit flex items-start">
           <span className="text-[#D3FD50]">{activeMember.firstName}</span>
           <p className="text-xl text-white mt-[13vh] ml-15">
          {activeMember.position}
        </p>
         </div>
         <div className="w-[100vw] h-fit flex items-start">
           <span className="text-[#D3FD50]">{activeMember.firstName}</span>
           <p className="text-xl text-white mt-[13vh] ml-15">
          {activeMember.position}
        </p>
         </div>
         <div className="w-[100vw] h-fit flex items-start">
           <span className="text-[#D3FD50]">{activeMember.firstName}</span>
           <p className="text-xl text-white mt-[13vh] ml-15">
          {activeMember.position}
        </p>
         </div>
         <div className="w-[100vw] h-fit flex items-start">
           <span className="text-[#D3FD50]">{activeMember.firstName}</span>
           <p className="text-xl text-white mt-[13vh] ml-15">
          {activeMember.position}
        </p>
         </div>
        </div>
       
      </div>
    </div>
  );
};

export default ProfileCard;

