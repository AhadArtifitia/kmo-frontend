import './HomeEventsStyles.css'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import img from '../../images/institute.png'
import { BsCalendar3 } from 'react-icons/bs'

const HomeEvents = () => {
    const [events, setEvents] = React.useState([])
    const token = localStorage.getItem('token')

    React.useEffect(()=>{
        fetchAllEvent()
    },[])

    const fetchAllEvent=async()=>{
        await fetch('https://backend.kmokoduvally.com/api/admin/event',{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
        .then((res)=>res.json())
        .then((res)=>{
        if(Array.isArray(res)&&res?.length>0){
            setEvents(res)
        }
        })
    }

  return (
    <div className='events'>
        <div className='events-img'>
            <img src={img} />
        </div>
            <Carousel>
                {events.map((event, index)=> (
                <Carousel.Item>
                    <div className='events-body'>
                        <h4>Upcoming Events</h4>
                        <h2>{event.title}</h2>
                        <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33
                            consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
                        <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33
                            consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p> 
                        <p><BsCalendar3 size={20} style={{ color:'#fff' }} /> {event.datetime}</p>    
                        {/* <Link to='#'>more events</Link> */}
                    </div> 
                </Carousel.Item>
                ))}  
            </Carousel> 
    </div>
  )
}

export default HomeEvents
