import './CourseHeroStyles.css'
import img from '../../images/courseHero.png'
import React from 'react'

const CourseHero = () => {
  return (
    
    <div className='course-hero'>
        <div className='course-mask'>
            <img className='course-img' src={img} />
        </div>
        <div className='course-content'>
            <h2>Courses</h2>
        </div>
    </div>
  )
}

export default CourseHero
