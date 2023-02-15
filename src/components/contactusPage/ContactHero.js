import './ContactHeroStyles.css'
import img from '../../images/contactHero.png'
import React from 'react'

const ContactHero = () => {
  return (
    <div className='contact-hero'>
        <div className='contact-mask'>
            <img className='contact-img' src={img} />
        </div>
        <div className='contact-content'>
            <h2>Contact Us</h2>
        </div>
    </div>
  )
}

export default ContactHero
