import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'
import { IoEarth } from "react-icons/io5";
import IndiaClock from '../home/IndianClock';

const FullNav = () => {
    const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);

  const handleMouseEnter = (e) => {
    const moveLink = e.currentTarget.querySelector(".moveLink");
    if (moveLink) {
      moveLink.classList.add("open");
    }
  };
  const handleMouseLeave = (e) => {
    const moveLink = e.currentTarget.querySelector(".moveLink");
    if (moveLink) {
      moveLink.classList.remove("open");
    }
  };

  function gsapAnimation() {
    const tl = gsap.timeline();

    // reset states before animating
    tl.set(".fullscreennav", { display: "block" });
    tl.set(".stairing", { height: 0, y: 0 });
    tl.set(".link", { opacity: 0, rotateX: 90 });
    tl.set(".navlink", { opacity: 0 });
    tl.set(".foot", { opacity: 0 });

    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: { amount: -0.3 },
    })
      .to(".link", {
        opacity: 1,
        rotateX: 0,
        stagger: { amount: 0.3 },
      })
      .to(".navlink", { opacity: 1 })
      .to(".foot", { opacity: 1 });
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();

    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: { amount: 0.1 },
    })
      .to(".navlink", { opacity: 0 })
      .to(".foot", { opacity: 0 })
      .to(".stairing", {
        height: 0,
        stagger: { amount: 0.1 },
      })
      .to(".fullscreennav", {
        display: "none",
        onComplete: () => {
          document.body.classList.remove("overflow-hidden");
        },
      });
  }

  useGSAP(() => {
    if (navOpen) {
      document.body.classList.add("overflow-hidden");
      gsapAnimation();
    } else {
      gsapAnimationReverse();
    }
  }, [navOpen]);


    return (
        <div ref={fullScreenRef} id='fullscreennav' className='fullscreennav hidden text-white overflow-hidden max-h-screen w-full z-55 absolute'>
            <div className='h-screen w-full fixed'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative'>
                <div className="navlink flex w-full justify-between lg:p-5 p-2 items-start">
                    <div className=''>
                        <div className='lg:w-24 w-24'>
                            <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='lg:h-28 h-20 w-20 lg:w-24 relative cursor-pointer'>
                       <img src="/public/Close.svg" alt="" />
                    </div>
                </div>
                <div className='lg:mt-[0.5vw] mt-[10vh]'>
                <div className="link font-[font2] origin-top relative border-t-1 border-white">
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-full lg:h-[16.25vh] h-[10vh] border-zinc-300 text-white cursor-pointer overflow-y-hidden" href="/work"
              >
                <h1 className="uppercase text-[7.2vw] leading-[7.2vw] text-center  lg:pt-2.5 pt-5.5">
                  work
                </h1>
                <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
                  <div className="moveX flex items-center gap-2">
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      see Everything
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-46 object-cover"
                      src="/public/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt=""
                    />
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      see Everything
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-46 object-cover"
                      src="/public/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                  </div>
                  <div className="moveX flex items-center gap-2">
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      see Everything
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-46 object-cover"
                      src="/public/WS---K72.ca---MenuThumbnail-640x290.jpg"
                      alt=""
                    />
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      see Everything
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-46 object-cover"
                      src="/public/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
                    <div className="link origin-top relative border-t-1 border-white font-[font2]">
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-full lg:h-[16.25vh] h-[10vh] border-zinc-300 text-white cursor-pointer overflow-y-hidden"
              >
                <h1 className="uppercase text-[7.2vw] leading-[7.2vw] text-center  lg:pt-2.5 pt-5.5">
                  Agency
                </h1>
                <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
                  <div className="moveX flex items-center gap-2">
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      know us
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-46 object-cover"
                      src="/public/Carl_640X290-640x290.jpg"
                      alt=""
                    />
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      know us
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-46 object-cover"
                      src="/public/SophieA_640X290-640x290.jpg"
                      alt="Sophie A"
                    />
                  </div>
                  <div className="moveX flex items-center gap-2 ">
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      know us
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-46 object-cover"
                      src="/public/Carl_640X290-640x290.jpg"
                      alt=""
                    />
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      know us
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-46 object-cover"
                      src="/public/SophieA_640X290-640x290.jpg"
                      alt=""
                    />
                  </div>

                </div>
              </div>
            </div>
                    <div className="link origin-top relative border-t-1 border-white font-[font2]">
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-full lg:h-[16.25vh] h-[10vh] border-zinc-300 text-white cursor-pointer overflow-y-hidden"
              >
                <h1 className="uppercase text-[7.2vw] leading-[7.2vw] text-center lg:pt-2.5 pt-5.5">
                  contact
                </h1>
                <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
                  <div className="moveX flex items-center gap-2">
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      send us a fax
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-32 object-center"
                      src="/public/heart.png"
                      alt=""
                    />
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      send us a fax
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-32 object-center"
                      src="/public/heart.png"
                      alt=""
                    />
                  </div>
                  <div className="moveX flex items-center gap-2">
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      send us a fax
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-32 object-center"
                      src="/public/heart.png"
                      alt=""
                    />
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      send us a fax
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-32 object-center"
                      src="/public/heart.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
                    <div className="link origin-top relative border-y-1 border-white font-[font2]">
               <div
                 onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-full lg:h-[16.25vh] h-[10vh] border-zinc-300 text-white cursor-pointer overflow-y-hidden"
              >
                <h1 className="uppercase text-[7.2vw] leading-[7.2vw] text-center lg:pt-2.5 pt-5.5">
                  blog
                </h1>
                <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
                  <div className="moveX flex items-center gap-2">
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      read articles
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-46 object-cover"
                      src="/public/ier.com-16107673482102220.gif"
                      alt=""
                    />
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      read articles
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-46 object-cover"
                      src="/public/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                      alt=""
                    />
                  </div>
                  <div className="moveX flex items-center gap-2">
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      read articles
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-46 object-cover"
                      src="/public/ier.com-16107673482102220.gif"
                      alt=""
                    />
                    <h2 className="whitespace-nowrap font-[font2] text-[7.2vw] leading-[7.2vw] text-center pt-3 uppercase">
                      read articles
                    </h2>
                    <img
                      className="h-[10vh] rounded-full shrink-0 w-46 object-cover"
                      src="/public/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
                </div>
                <div>
          
          <div className="foot w-full flex lg:flex-row md:flex-col justify-between items-center px-2 lg:mt-10  mt-20">
                <div className="flex items-center gap-2">
                     <IoEarth className='text-xl text-zinc-50'/>
                  <IndiaClock />
                </div>
        
                <div className="inf lg:flex gap-6 ">
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
        
                         <div className="flex gap-4">
          {["FB", "IG", "IN", "BE"].map((label) => (
            <button
              key={label}
              className="px-6 py-1 border-1 pt-2 border-white hover:border-[#D3FD50] rounded-full font-[font2] hover:text-[#D3FD50] text-xl transition"
            >
              {label}
            </button>
          ))}
                   </div>
              </div>
                </div>
            </div>
        </div>
    )
}

export default FullNav