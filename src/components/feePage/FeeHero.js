import './FeeHeroStyles.css'
import img from '../../images/aboutHero.png'
import React from 'react'

const FeeHero = () => {
  return (
    <div className='fee-hero'>
        <div className='fee-mask'>
            <img className='fee-img' src={img} />
        </div>
        <div className='fee-content'>
            <h2>Fee Structure</h2>
        </div>
    </div>
  )
}

export default FeeHero
