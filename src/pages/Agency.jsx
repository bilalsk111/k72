import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'
import Section2 from '../components/agence/Section2';
import FixedCard from '../components/agence/FixedCard';
import Footer from '../components/Footer';
// import TeamList from '../components/agence/TeamList';

const Agency = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imgArray = [
    './agency-img/Carl_480x640-480x640.jpg',
    './agency-img/CAMILLE_480X640_2-480x640.jpg',
    './agency-img/ChantalG_480x640-480x640.jpg',
    './agency-img/HugoJoseph_480x640-480x640.jpg',
    './agency-img/Lawrence_480x640-480x640.jpg',
    './agency-img/MAXIME_480X640_2-480x640.jpg',
    './agency-img/MEGGIE_480X640_2-480x640.jpg',
    './agency-img/MEL_480X640-480x640.jpg',
    './agency-img/Michele_480X640-480x640.jpg',
    './agency-img/MyleneS_480x640-480x640.jpg',
    './agency-img/SophieA_480x640-480x640.jpg',
    './agency-img/Olivier_480x640-480x640.jpg',
    './agency-img/Claire_480x640-480x640.jpg',
    './agency-img/joel_480X640_3-480x640.jpg',
  ]

  const imgDiv = useRef(null);
  const img = useRef(null);
const bgRef = useRef(null);

useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Desktop + Mobile breakpoints
  ScrollTrigger.matchMedia({
    // Desktop (≥ 1024px)
    "(min-width: 1024px)": function () {
      gsap.to(bgRef.current, {
        backgroundColor: "#000",
        color: "#fff",
        ease: "power3.out",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top+=1790 top", 
          end: "top+=1830 top",
          scrub: true,
          onEnter: () => {
            window.dispatchEvent(
              new CustomEvent("logoColorChange", { detail: "#fff" })
            );
          },
          onLeaveBack: () => {
            window.dispatchEvent(
              new CustomEvent("logoColorChange", { detail: "#111" })
            );
          },
        },
      });
    },

    // Mobile (< 1024px)
    "(max-width: 640px)": function () {
      gsap.to(bgRef.current, {
        backgroundColor: "#000",
        color: "#fff",
        ease: "power3.out",
        scrollTrigger: {
          trigger: bgRef.current,
          start: "top+=600vh top",   // ✅ starts 5vh *before* bgRef hits top
          end: "top+=650vh top",     // adjust how long the change lasts
          scrub: true,
          onEnter: () => {
            window.dispatchEvent(
              new CustomEvent("logoColorChange", { detail: "#fff" })
            );
          },
          onLeaveBack: () => {
            window.dispatchEvent(
              new CustomEvent("logoColorChange", { detail: "#111" })
            );
          },
        },
      });
    },
  });
});


  useGSAP(function () {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.matchMedia({
    // 🖥️ Desktop (≥ 1024px)
    "(min-width: 1024px)": function () {
     gsap.to(imgDiv.current, {
      scrollTrigger: {
        trigger: imgDiv.current,
        // markers: true,
        start: 'top 0%',
        end: 'top -140%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imgArray.length)
          } else {
            imageIndex = imgArray.length - 1
          }
          img.current.src = imgArray[imageIndex]
        }
      }
    })
    },
    "(max-width: 1024px)": function () {
      // change image randomly every 5 seconds
      let timer = null;

      const start = () => {
        if (!img || !img.current) return;
        timer = setInterval(() => {
          const idx = Math.floor(Math.random() * imgArray.length);
          if (img.current) img.current.src = imgArray[idx];
        }, 5000); // 5 seconds
      };

      // Wait a moment in case ref not ready yet
      if (img && img.current) {
        start();
      } else {
        const id = setTimeout(start, 50);
        // cleanup for that timeout
        return () => clearTimeout(id);
      }

      // Cleanup when matchMedia unmounts
      return () => {
        if (timer) clearInterval(timer);
      };
    },
  });
  })

   
   

  return (
    <div ref={bgRef} className='parent w-screen min-h-screen'>
      <div className='section1 py-1 lg:min-h-[200vh] min-h-full'>
        <div ref={imgDiv} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] top-[25vh] lg:left-[29vw] left-[37.5vw]'>
          <img ref={img} className='h-full object-cover w-full' src="./agency-img/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[50vh] mt-[35vh]'>
            <h1 className='text-[22vw] text-center uppercase leading-[19vw]'>Seven7y<br />
              Two</h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-12 mt-20 p-3'>
            <p className='lg:text-[3vw] text-[5.1vw] lg:leading-[3.5vw] leading-[2.5vh]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>
      <Section2 />
      <FixedCard />
      <Footer />
    </div>
  )
}

export default Agency;
