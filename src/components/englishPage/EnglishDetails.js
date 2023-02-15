import './EnglishDetailsStyles.css'
import React from 'react'

const EnglishDetails = () => {
  return (
    <div className='english-details'>
        <div className='english-details-col'>
            <div className='english-details-card-header'>
                <h2>Eligibility</h2>
            </div>  
            <div className='english-details-card'>
                <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum. Lorem ipsum dolor sit amet.</p>

            </div>
        </div>
        <div className='english-details-col'>
            <div className='english-details-card-header'>
                <h2>Course Details</h2>
            </div>  
            <div className='english-details-card'>
                <ul>
                    <li>Fee: Rs. 5,000 per Semester</li>
                    <li>Type: 6 Semester</li>
                    <li>Duration: Regular</li>
                    <li>Examination: Semester</li>
                </ul>

            </div>
        </div>
        <div className='english-details-col'>
            <div className='english-details-card-header'>
                <h2>Program Outcome</h2>
            </div>  
            <div className='english-details-card'>
                <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum. Lorem ipsum dolor sit amet.</p>


            </div>
        </div>    
    </div>
  )
}

export default EnglishDetails
