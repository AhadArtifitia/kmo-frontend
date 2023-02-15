import './DepartmentsSchoolStyles.css'
import img from '../../images/depSchool.png'
import React from 'react'

const DepartmentsSchool = () => {
  return (
    <div className='departments-school'>
        <div className='departments-school-img'>
            <img src={img} />
        </div>
        <div className='departments-school-content'>
            <h2>Departments</h2>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <div className='departments-school-content-list'>
                <ul>
                    <li>csccscs</li>
                    <li>ccwvvvsffz feaf</li>
                </ul>
                <ul>
                    <li>efsccs svev</li>
                    <li>cwce</li>
                </ul>
                <ul>
                    <li>scscscsvv</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default DepartmentsSchool
