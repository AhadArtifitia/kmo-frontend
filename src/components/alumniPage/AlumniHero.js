import './AlumniHeroStyles.css'
import img from '../../images/alumniHero.png'
import React from 'react'

const AlumniHero = () => {
  return (
    <div className='alumni-hero'>
        <div className='alumni-mask'>
            <img className='alumni-img' src={img} />
        </div>
        <div className='alumni-content'>
            <h2>Alumni</h2>
        </div>
    </div>
  )
}

export default AlumniHero
