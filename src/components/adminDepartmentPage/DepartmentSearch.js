import './DepartmentSearchStyles.css'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const DepartmentSearch = () => {
  return (
    <div className='admin-department-search-container'>
        <div className='admin-department-search'>
            <h2>Departments</h2>
            <div className='admin-search-input-btn'>
                <div className='admin-department-search-box'>
                    <input className='admin-department-search-input' type='text' name='search' placeholder='Search department' />
                    <IoIosSearch size={24} className='admin-search-logo' />
                </div>
                <button className='admin-add-department-btn'>Add department</button>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default DepartmentSearch
