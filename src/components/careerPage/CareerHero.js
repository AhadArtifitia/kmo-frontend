import './CareerHeroStyles.css'
import img from '../../images/instHero.png'
import React from 'react'

const CareerHero = () => {
  return (
    <div className='career-hero'>
        <div className='career-mask'>
            <img className='career-img' src={img} />
        </div>
        <div className='career-content'>
            <h2>Career</h2>
        </div>
    </div>
  )
}

export default CareerHero
