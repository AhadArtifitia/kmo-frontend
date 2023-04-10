import './DepartmentStyles.css'
import React from 'react'
import img from '../../images/dep.png'

const Department = ({departments}) => {
  return (

    <div>
        {departments.map((department,index)=> (
            <>
            <div className='departments'>
                <div className='departments-img'>
                    <img src={img} alt="dep image" />
                </div>
                <div className='departments-content'>
                    <h2>{department.name}</h2>
                    <p>{department.description}</p>
                    <div className='departments-content-list'>
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
            <div className='white-space'>
                    <br />
                    <br />
                </div>
            </>
        ))}
    </div>

  )
}

export default Department
