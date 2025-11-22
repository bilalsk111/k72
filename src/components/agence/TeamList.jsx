"use client";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef, useState } from 'react';

const TeamList = () => {
  gsap.registerPlugin(ScrollTrigger);

  const teamData = [
    { role: "BUSINESS LEAD", name: "CARL GODBOUT", img: "/agency-img/Carl_480x640-480x640.jpg" },
    { role: "PLANIFICATEUR STRATÉGIQUE PRINCIPAL", name: "OLIVIER ROEYAERTS", img: "/agency-img/Michele_480X640-480x640.jpg" },
    { role: "ACCOUNT MANAGER", name: "LOU GRAVEL-JEAN", img: "/agency-img/MEGGIE_480X640_2-480x640.jpg" },
    { role: "STRATEGIST", name: "BÉATRICE ROUSSIN", img: "/agency-img/blank-640x960.jpg" },
    { role: "ACCOUNT COORDINATOR", name: "LAWRENCE MEUNIER", img: "/agency-img/blank-640x960.jpg" },
    { role: "SENIOR DIRECTOR", name: "ISABELLE BEAUCHEMIN", img: "/agency-img/joel_480X640_3-480x640.jpg" },
    { role: "ASSOCIATE CREATIVE DIRECTOR", name: "HUGO JOSEPH", img: "/agency-img/ChantalG_480x640-480x640.jpg" },
    { role: "COPYWRITER", name: "CAMILLE BRIÈRE", img: "/agency-img/Olivier_480x640-480x640.jpg" },
    { role: "ACCOUNT MANAGER", name: "CLAIRE ROBERT", img: "/agency-img/blank-640x960.jpg" },
    { role: "EVP & MANAGING DIRECTOR", name: "PIERRE-LUC PAIEMENT", img: "/agency-img/blank-640x960.jpg" },
    { role: "ART DIRECTOR", name: "MÉLANIE LAVIOLETTE", img: "/agency-img/Lawrence_480x640-480x640.jpg" },
    { role: "DIRECTOR OF STRATEGY", name: "MICHÈLE RIENDEAU", img: "/agency-img/Isa_640X960-640x960.jpg" },
    { role: "ACCOUNT DIRECTOR", name: "MEGGIE LAVOIE", img: "/agency-img/HugoJoseph_480x640-480x640.jpg" },
    { role: "ART DIRECTOR", name: "ALEX SAUVAGEAU", img: "/agency-img/CAMILLE_480X640_2-480x640.jpg" },
    { role: "ACCOUNT MANAGER", name: "PHILIPPE PERREAULT", img: "/agency-img/Claire_480x640-480x640.jpg" },
    { role: "GRAPHIC DESIGNER", name: "OLIVIER DUCLOS", img: "/agency-img/PLP2_640x960-640x960.jpg" },
    { role: "ASSOCIATE CREATIVE DIRECTOR", name: "JOËL LETARTE", img: "/agency-img/MEL_480X640-480x640.jpg" },
    { role: "CREATIVE DIRECTOR", name: "CHANTAL GOBEIL", img: "/agency-img/blank-640x960.jpg" },
    { role: "ASSOCIATE CREATIVE DIRECTOR", name: "SÉBASTIEN ROY", img: "/agency-img/blank-640x960.jpg" },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const imgDivRefs = useRef({}); // multiple refs for each hover image

  return (
    <div className='bg-black text-white min-h-screen w-full relative overflow-hidden py-[20vh]'>
      {teamData.map((person, index) => (
        <div
          key={index}
          className={`team-row flex justify-between items-start sm:items-center border-y border-zinc-800 p-3 cursor-pointer transition-colors duration-500 ${
            hoveredIndex === index ? "bg-[#D3FD50] text-black" : "bg-black text-white"
          }`}
        onMouseEnter={() => {
  setHoveredIndex(index);
}}
onMouseLeave={() => {
  setHoveredIndex(null);
}}
        >
          <span className="text-xs sm:text-sm font-bold tracking-wide px-2 py-1 rounded transition-colors duration-500">
            {person.role}
          </span>
          <div className="flex items-center gap-4 relative">
            <span className="text-base sm:text-lg font-semibold mt-1 sm:mt-0 px-2 py-1 rounded transition-colors duration-500">
              {person.name}
            </span>
            {hoveredIndex === index && (
              <div
                ref={el => (imgDivRefs.current[index] = el)}
                className="overflow-hidden absolute -top-[8vw] -left-[45vw] lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] transition-all duration-500 z-[9999] shadow-2xl"
              >
                <img
                  className="h-full object-cover w-full"
                  src={person.img}
                  alt={person.name}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
