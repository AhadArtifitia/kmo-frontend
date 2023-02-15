import './AdministrationHeroStyles.css'
import img from '../../images/courseHero.png'
import React from 'react'

const AdministrationHero = () => {
  return (
    <div className='administration-hero'>
        <div className='administration-mask'>
            <img className='administration-img' src={img} />
        </div>
        <div className='administration-content'>
            <h2>Administration</h2>
        </div>
    </div>
  )
}

export default AdministrationHero
