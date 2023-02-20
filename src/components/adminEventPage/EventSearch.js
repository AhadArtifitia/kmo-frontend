import './EventSearchStyles.css'
import React from 'react'

const EventSearch = () => {
  return (
    <div className='admin-event-search-container'>
        <div className='admin-event-search'>
            <h2>Events</h2>
            <div className='admin-search-input-btn'>
                <button className='admin-add-event-btn'>Add Event</button>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default EventSearch
