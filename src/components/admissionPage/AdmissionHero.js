import './AdmissionHeroStyles.css'
import img from '../../images/admissionHero.png'
import React from 'react'

const AdmissionHero = () => {
  return (
    <div className='admission-hero'>
        <div className='admission-mask'>
            <img className='admission-img' src={img} />
        </div>
        <div className='admission-content'>
            <h2>Admission</h2>
        </div>
    </div>
  )
}

export default AdmissionHero
