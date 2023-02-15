import './EnglishHeaderStyles.css'
import React from 'react'
import img from '../../images/english.png'

const EnglishHeader = () => {
  return (
    <div className='english-header'>
        <br />
        <br />
        <div className='english-header-img'>
            <img src={img} />
        </div>
        <div className='english-header-content'>
            <h2>B.A English</h2>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <button className='english-header-button'>Learn More</button>
        </div>
    </div>
  )
}

export default EnglishHeader
