import React from 'react'

import video from '../assets/video.mp4'
import BookCard from './BookCard';
 function Header() {
  return (
    <div   className="w-full h-48 overflow-hidden" >
      <video src= {video}
  
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      
      
      ></video>
      
    </div>
  )
  }

  export default Header;