import './HeroStyles.css'
import img from '../../images/aboutHero.png'
import React from 'react'

const Hero = () => {
  return (
    <div className='about-hero'>
      <div className='about-mask'>
        <img className='about-img' src={img} />
      </div>
      <div className='about-content'>
        <h2>About us</h2>
      </div>
    </div>
  )
}

export default Hero
