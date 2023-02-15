import './ObjectivesStyles.css'
import image from '../../images/objectives.png'
import React from 'react'

const Objectives = () => {
  return (
    <div className='objectives'>
        <div className='objectives-left'>
            <img src={image} alt='objectives image' />
        </div>
        <div className='objectives-right'>
            <h2>Objectives</h2>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <button className='lab-button'>Learn More</button>
        </div>
    </div>
  )
}

export default Objectives
