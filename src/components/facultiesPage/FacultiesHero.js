import './FacultiesHeroStyles.css'
import img from '../../images/courseHero.png'
import React from 'react'

const FacultiesHero = () => {
  return (
    <div className='faculties-hero'>
        <div className='faculties-mask'>
            <img className='faculties-img' src={img} />
        </div>
        <div className='faculties-content'>
            <h2>Faculties</h2>
        </div>
    </div>
  )
}

export default FacultiesHero
