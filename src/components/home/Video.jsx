import React from 'react'

const Video = () => {
  return (
    <div className='w-full h-full'>
        <video className='w-full h-full object-cover' loop autoPlay muted src="/public/herosectionvideo.mp4"></video>
    </div>
  )
}

export default Video