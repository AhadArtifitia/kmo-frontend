import './HomeEventsStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../images/institute.png'
import { BsCalendar3 } from 'react-icons/bs'

const HomeEvents = () => {
  return (
    <div className='events'>
        <div className='events-img'>
            <img src={img} />
        </div>
        <div className='events-body'>
            <h4>Upcoming Events</h4>
            <h2>KMO COLLEGE ARTS FESTIVAL</h2>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33
                consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33
                consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p> 
            <p><BsCalendar3 size={20} style={{ color:'#fff' }} /> 07 AUG 23</p>    
            <Link to='#'>more events</Link>
        </div>     
    </div>
  )
}

export default HomeEvents
