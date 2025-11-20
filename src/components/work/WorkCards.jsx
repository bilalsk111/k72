import React from 'react'

const WorkCards = (props) => {
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2, // smoothness
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing fn
//       smooth: true,
//     });

//     function raf(time) {
//       lenis.raf(time);
//       requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//       lenis.destroy();
//     };
//   }, []);

    
  return (
        <> 
            <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[35px] overflow-hidden h-full '>
                <img className='h-full w-full object-cover' src={props.img1} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase lg:text-6xl text-[2vh] font-[font1] lg:border-4 border-2 lg:pt-4 lg:px-8 lg:py-0 py-1 px-2 pt- text-white border-white rounded-full'>view Project</h2>
                </div>
            </div>
            <div className='lg:w-1/2 group transition-all relative rounded-none hover:rounded-[35px] overflow-hidden h-full '>
                <img className='h-full w-full object-cover' src={props.img2} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase lg:text-6xl text-[2vh] font-[font1] lg:border-4 border-2 lg:pt-4 lg:px-8 lg:py-0 py-1 px-2 pt-2 text-white border-white rounded-full'>View Project</h2>
                </div>
            </div>
        </>
  )
}

export default WorkCards