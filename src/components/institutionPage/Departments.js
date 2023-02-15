import './DepartmentsStyles.css'
import React from 'react'
import img from '../../images/departmentsImg.png'

const Departments = () => {
  return (
    <div className='departments'>
        <div className='departments-img'>
            <img src={img} />
        </div>
        <div className='departments-content'>
            <h2>Departments</h2>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <div className='departments-content-list'>
                <ul>
                    <li>csccscs</li>
                    <li>ccwvvvsffz feaf</li>
                </ul>
                <ul>
                    <li>efsccs svev</li>
                    <li>cwce</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Departments
