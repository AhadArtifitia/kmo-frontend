import './SchoolStyles.css'
import img from '../../images/schoolImg.png'
import React from 'react'

const School = () => {
  return (
    <div className='school'>
        <div className='school-header'>
            <h2>KMO Higher Secondary School</h2>
        </div>
        <div className='school-body'>
            <div className='school-content'>
                <h4>KMO  HSS</h4>
                <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum. Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            </div>
            <div className='school-img'>
                <img src={img} alt='school image' />
            </div>
        </div>
    </div>
  )
}

export default School
