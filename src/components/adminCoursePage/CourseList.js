import './CourseListStyles.css'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineFileAdd } from 'react-icons/ai'

const CourseList = ({courses, setUpdateCourseModal, setCourses, setFormValues, setDefaultValues}) => {
    const token = localStorage.getItem('token')

    const handleEditClick = (object) => {
        fetch(`http://localhost:8000/api/admin/course/${object._id}`,{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
            setDefaultValues(data);
            setFormValues(data);
        })

        setUpdateCourseModal(true)
    }

    const handleDeleteClick = (objId) => {
        const confirmBox = window.confirm("Confirm to delete this course?")
        if (confirmBox === true) {
            fetch(`http://localhost:8000/api/admin/course/${objId}`,{
                method:'DELETE',
                headers:{
                    'Authorization':`Bearer ${token}`,
                },
            })
            .then(response => {
                // update table data
                setCourses(prevState => {
                    const updatedData = prevState.filter(row => row._id !== objId);
                    return updatedData;
                });
            })
            .catch((error) => {
                console.error(error);
            });
        } 
    }

  return (
    <div className='admin-course-list-container'>
        <div className='admin-course-list'>
            <table className='admin-course-list-table'>
                <tr className='admin-course-list-thr'>
                    <th className='admin-course-list-th'>COURSE NAME</th>
                    <th className='admin-course-list-th'>DEPARTMENT</th>
                    <th className='admin-course-list-th'>DURATION</th>
                    <th className='admin-course-list-th'>FEES</th>
                    <th className='admin-course-list-th'>EDIT</th>
                </tr>
                {courses.map((course, index)=> (
                    <tr className='admin-course-list-tr'>
                    <td className='admin-course-list-td' data-label='COURSE Name'>{course.name}</td>
                    <td className='admin-course-list-td' data-label='DEPARTMENT'>{course.department}</td>
                    <td className='admin-course-list-td' data-label='DURATION'>{course.duration}</td>
                    <td className='admin-course-list-td' data-label='FEES'>{course.fees}</td>
                    <td className='admin-course-list-td' data-label='EDIT'>
                        <AiOutlineEye size={24} className='admin-course-list-logo' /> 
                        <AiOutlineFileAdd size={24} onClick={() => handleEditClick(course)} className='admin-course-list-logo' /> 
                        <BsTrash size={24} onClick={() => handleDeleteClick(course._id)} className='admin-course-list-logo-trash' /> 
                    </td>
                </tr>
                ))}
            </table>
        </div>
    </div>
  )
}

export default CourseList
