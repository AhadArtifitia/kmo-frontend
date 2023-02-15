import './HomeLaboratoryStyles.css'
import React from 'react'
import img from '../../images/lab.png'

const HomeLaboratory = () => {
  return (
    <div className='laboratory'>
        <div className='laboratory-body'>
            <h2>Laboratory</h2>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <button className='lab-button'>Learn More</button>
        </div>
        <div className='laboratory-img'>
            <img src={img} alt='laboratory image' />
        </div>
    </div>
  )
}

export default HomeLaboratory
