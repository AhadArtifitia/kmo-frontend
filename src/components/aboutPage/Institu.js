import './InstituStyles.css'
import image from '../../images/institute.png'
import React from 'react'

const institu = () => {
  return (
    <div className='section-6'>
        <div className='institu-left'>
            <h2>Our Institutions</h2>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
        </div>
        <div className='institu-right'>
            <img src={image} alt='institute image' />
        </div>
    </div>
  )
}

export default institu
