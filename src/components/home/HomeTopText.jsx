import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Video from "./Video";

const HomeTopText = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const lines = containerRef.current.querySelectorAll(".line");

    // Reset each line
    gsap.set(lines, { yPercent: 120, opacity: 0 });

    const playAnimation = () => {
      gsap.to(lines, {
        yPercent: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.12,
      });
    };

    window.addEventListener("stairComplete", playAnimation);
    return () => {
      window.removeEventListener("stairComplete", playAnimation);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center flex-col  font-[font1] lg:h-[40vh] h-[vh] gap-0.5 lg:mb-[0.5vh] mb-[23vh]"
    >
      {/* wrapper for overflow hidden */}
      <div className="overflow-hidden">
        <div className="line text-zinc-50 max-w-fit lg:text-[8vw] text-[6vh] uppercase lg:leading-[7vw] leading-[5.15vh]">
          The spark for
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="line text-zinc-50 max-w-fit lg:text-[8vw] text-[6vh] uppercase flex items-center lg:leading-[7vw] leading-[5.15vh]">
          all
          <div className="lg:w-[14vw] lg:h-[6vw] h-[4vh] w-[20vw] mt-1 rounded-full overflow-hidden">
            <Video />
          </div>
          things
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="line text-zinc-50 max-w-fit lg:text-[8vw] text-[6vh] uppercase lg:leading-[7vw] leading-[5.15vh]">
          creative
        </div>
      </div>
    </div>
  );
};

export default HomeTopText;
