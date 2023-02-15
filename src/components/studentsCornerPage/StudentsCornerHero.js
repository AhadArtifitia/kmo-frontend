import './StudentsCornerStyles.css'
import React from 'react'
import img from '../../images/cover.png'

const StudentsCornerHero = () => {
  return (
    <div className='corner-hero'>
        <div className='corner-mask'>
            <img className='corner-img' src={img} />
        </div>
        <div className='corner-content'>
            <h2>Students Corner</h2>
        </div>
    </div>
  )
}

export default StudentsCornerHero
