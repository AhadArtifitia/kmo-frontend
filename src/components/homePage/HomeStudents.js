import './HomeStudentsStyles.css'
import React from 'react'
import img1 from '../../images/stupic1.png'
import img2 from '../../images/stupic2.png'
import img3 from '../../images/stupic3.png'
import img4 from '../../images/stupic4.png'

const HomeStudents = () => {
  return (
    <div className='students'>
        <div className='students-img'>
            <div className='students-img-left'>
                <img src={img1} />
                <img src={img2} />
            </div>
            <div className='students-img-right'>
                <img src={img3} />
                <img src={img4} />
            </div>
        </div>
        <div className='students-body'>
            <h2>Student's corner</h2>
            {/* <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo 
                ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo 
                ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo 
                ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo 
                ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p> */}
        </div>
    </div>
  )
}

export default HomeStudents
