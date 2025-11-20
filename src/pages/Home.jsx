import React, { useRef } from "react";
import Video from "../components/home/Video";
import HomeTopText from "../components/home/HomeTopText";
import HomeBottomText from "../components/home/HomeBottomText";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText); // ✅ register outside component

const Home = () => {
  const paraRef = useRef(null);

  useGSAP(() => {
    if (paraRef.current) {
      // Split text into words
      const split = new SplitText(paraRef.current, { type: "words" });

      gsap.from(split.words, {
        opacity: 0,
        y: 30,
        stagger: -0.1, // delay between each word
        duration: 0.2,
        ease: "power3.out",
      });
    }
  });

  return (
    <div>
      {/* Background video */}
      <div className="w-screen h-screen fixed text-white">
        <Video />
      </div>

      {/* Foreground content */}
      <div className="w-screen h-screen relative flex flex-col lg:justify-between justify-end">
        <HomeTopText />

        <p
          ref={paraRef}
          className="text-zinc-300 lg:text-[1.3vw] text-[1.6vh] leading-[1.8vh] 
          lg:leading-[1.3vw] lg:w-[23vw] font-[font1] lg:h-[20vw] w-[65vw] 
          md-[10vh] right-0 absolute lg:bottom-[10vh] lg:py-[1vh] py-[13vh]"
        >
         K72 is an agency that builds brands from every angle. Today, tomorrow
          and years from now. We think the best sparks fly when comfort zones
          get left behind and friction infuses our strategies, brands and
          communications with real feeling. We’re transparent, honest and say
          what we mean, and when we believe in something, we’re all in.
        </p>

        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
