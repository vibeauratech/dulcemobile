import React from 'react'
import  './Hero.css'
import Arrow from "./HeroImages/Arrow.png";

function Hero() {
  return (
    <div className='hero-section'>
        <div className='head-tag'>
            <h1><strong className='yellow'>Exploring</strong>
            conventional <strong className='purple'>fashion trends</strong>
            </h1>
        </div>
         <p>Bringing you an innovative and creative fashion 
            show like never before showing on our streaming platforms
         </p>
         <button>Set Reminder <img src={Arrow} className="Arrow" alt="Arrow" /></button>
    </div>
  )
}

export default Hero
