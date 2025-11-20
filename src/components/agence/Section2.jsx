import React from 'react'

const Section2 = () => {
  return (
    <div className="section2 relative lg:h-[60vh] flex flex-col justify-between p-[6vw] font-[font2] lg:mt-[5vw]">
      {/* Top row */}
      <div className="flex w-full">
        <div className="lg:h-[20vh] lg:w-[29.5vw] w-1/2">
          <h3 className="text-xl">Expertise</h3>
        </div>

        <div className="flex flex-col text-xl lg:leading-[1.5vw] leading-[2.5vh] lg:w-[31vw] w-1/2">
          <span>Strategy</span>
          <span>Advertising</span>
          <span>Branding</span>
          <span>Design</span>
          <span>Content</span>
        </div>
      </div>

      {/* Bottom row */}
      <div className="sec2 flex items-start gap-[5vw] w-full">
        <p className="lg:text-[1.35vw] text-[2vh] lg:leading-[1.45vw] leading-[2.5vh] lg:w-[25vw] w-full">
          Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.
        </p>
        <p className="lg:text-[1.35vw] text-[2vh] lg:w-[30vw] lg:leading-[1.45vw] leading-[2.5vh] w-full ">
          Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.
        </p>
        <p className="lg:text-[1.35vw] text-[2vh] lg:w-[25vw] lg:leading-[1.45vw] leading-[2.5vh] w-full">
          Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.
        </p>
      </div>
    </div>
  )
}

export default Section2
