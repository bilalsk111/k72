import React from 'react'
import WorkCards from '../components/work/WorkCards'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import Footer from '../components/Footer';

const Works = () => {

  const workImg = [
    { img1: './work-img/100temps_Thumbnail-1280x960.jpg', img2: './work-img/BEST_site_menu_Thumbnail-1280x960.jpg' },
    { img1: './work-img/CF_thumbnail-1280x960.jpg', img2: './work-img/chalaxeur-thumbnail_img-1280x960.jpg' },
    { img1: './work-img/crisis24_behance_1920X1200_cartes-1280x960.jpg', img2: './work-img/Fruite_thumbnail_bbq-1280x960.jpg' },
    { img1: './work-img/OKA_thumbnail-1280x960.jpg', img2: './work-img/opto_thumbnail2-1280x960.jpg' },
    { img1: './work-img/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg', img2: './work-img/PME-MTL_Thumbnail-1280x960.jpg' },
    { img1: './work-img/thumbnail_OSM_1280-1280x960.jpg', img2: './work-img/thumbnailimage_atable2-1280x960.jpg' },
    { img1: './work-img/thumbnailimage_opto-1280x960.jpg', img2: './work-img/thumbnailimage_shelton-1280x960.jpg' },
    { img1: './work-img/thumbnailimage_SollioAg-1280x960.jpg', img2: './work-img/WS---K72.ca---Thumbnail-1280x960.jpg' }
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      // ✅ Desktop (≥1024px)
      "(min-width: 1024px)": function () {
        gsap.fromTo(
          ".hero",
          { height: "100px" },   // start
          {
            height: "65vh",      // animate to this
            stagger: { amount: 0.5 },
            scrollTrigger: {
              trigger: ".lol",
              start: "top 100%",
              end: "+=700%",
              scrub: true,
            },
          }
        );
      },

      // ✅ Mobile (<640px)
      "(max-width: 640px)": function () {
        gsap.fromTo(
          ".hero",
          { height: "60px" },    // start
          {
            height: "50vh",      // animate to this
            stagger: { amount: 0.3 },
            scrollTrigger: {
              trigger: ".lol",
              start: "top 120%",
              end: "+=450%",
              scrub: true,
            },
          }
        );
      },
    });
  });

  return (
    <div>
      <div className="p-2 lg:pt-[40vh] pt-[60vh]">
        <div className="lg:p-2 p-2">
          <div className="lg:pb-0.5 pb-[5vh]">
            <h1 className="lg:text-[15vw] text-[13vh] uppercase font-[font2] text-black">
              Work
              <sup className="lg:text-[3vw] text-[3vh] lg:top-[53vh] lg:left-[47vw] top-[65vh] left-[88vw] absolute">16</sup>
            </h1>
          </div>
          <div className="-mt-[10vh] lol">
            {workImg.map((elem, idx) => (
              <div key={idx} className="hero w-full h-full mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2 relative">
                <WorkCards img1={elem.img1} img2={elem.img2} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Works
