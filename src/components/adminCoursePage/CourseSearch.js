import './CourseSearchStyles.css'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const courseSearch = ({setAddCourseModal, courseSearch, setCourseSearch}) => {
  function handleSearch(event) {
    setCourseSearch(event.target.value);
  }

  function popModal() {
    setAddCourseModal(true)
  }
  return (
    <div className='admin-course-search-container'>
        <div className='admin-course-search'>
            <h2>Courses</h2>
            <div className='admin-search-input-btn'>
                <div className='admin-course-search-box'>
                    <input className='admin-course-search-input' type='text' value={courseSearch} onChange={handleSearch} name='search' placeholder='Search course' />
                    <IoIosSearch size={24} className='admin-search-logo' />
                </div>
                <button onClick={popModal} className='admin-add-course-btn'>Add Course</button>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default courseSearch
