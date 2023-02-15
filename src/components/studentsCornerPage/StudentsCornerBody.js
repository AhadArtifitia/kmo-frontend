import './StudentsCornerBodyStyles.css'
import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'

const StudentsCornerBody = () => {
  return (
    <div className='students-corner-body'>        
        <div className='corner-body-cards'>
            <div>
                <h2>Awards</h2>
                <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum. Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            </div>
            <div className='corner-icons'>
                <BsArrowRightCircle size={22} style={{ color:'#000', marginTop:'5px' }} />
            </div>
        </div>
        <div className='corner-body-cards'>
            <div>
                <h2>Scholarship</h2>
                <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum. Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            </div>
            <div className='corner-icons'>
                <BsArrowRightCircle size={22} style={{ color:'#000', marginTop:'5px' }} />
            </div>
        </div>
        <div className='corner-body-cards'>
            <div>
                <h2>Library</h2>
                <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum. Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            </div>
            <div className='corner-icons'>
                <BsArrowRightCircle size={22} style={{ color:'#000', marginTop:'5px' }} />
            </div>
        </div>
        <div className='corner-body-cards'>
            <div>
                <h2>Hostel</h2>
                <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum. Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            </div>
            <div className='corner-icons'>
                <BsArrowRightCircle size={22} style={{ color:'#000', marginTop:'5px' }} />
            </div>
        </div>
    </div>
  )
}

export default StudentsCornerBody
