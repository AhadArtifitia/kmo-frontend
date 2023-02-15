import './CollegeStyles.css'
import img from '../../images/schoolImg.png'
import React from 'react'

const College = () => {
  return (
    <div className='college'>
        <div className='college-header'>
            <h2>KMO Arts and Science College Koduvally</h2>
        </div>
        <div className='college-body'>
            <div className='college-content'>
                <h4>KMO  HSS</h4>
                <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum. Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            </div>
            <div className='college-img'>
                <img src={img} alt='college image' />
            </div>
        </div>
    </div>
  )
}

export default College

