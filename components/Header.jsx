import React from 'react'

const Header = () => {
  return (
    <header className='relative w-full h-screen overflow-hidden'>
      <video className='top-0 left-0 -z-10 w-full h-screen md:object-cover object-contain' autoPlay loop muted>
        <source src='/video.mp4' type='video/mp4' />
        your browser does not support this video extension
      </video>
    </header>
  )
}

export default Header