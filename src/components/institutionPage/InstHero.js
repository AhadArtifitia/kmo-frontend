import './InstHeroStyles.css'
import img from '../../images/instHero.png'
import React from 'react'

const InstHero = () => {
  return (
    <div className='inst-hero'>
      <div className='inst-mask'>
        <img className='inst-img' src={img} />
      </div>
      <div className='inst-content'>
        <h2>Institution</h2>
      </div>
    </div>
  )
}

export default InstHero
