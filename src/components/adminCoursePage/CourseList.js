import './CourseListStyles.css'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineFileAdd } from 'react-icons/ai'

const CourseList = () => {
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
                <tr className='admin-course-list-tr'>
                    <td className='admin-course-list-td' data-label='COURSE Name'>B.A English</td>
                    <td className='admin-course-list-td' data-label='DEPARTMENT'>B.A</td>
                    <td className='admin-course-list-td' data-label='DURATION'>3 Year</td>
                    <td className='admin-course-list-td' data-label='FEES'>1,20,000</td>
                    <td className='admin-course-list-td' data-label='EDIT'>
                        <AiOutlineEye size={24} className='admin-course-list-logo' /> 
                        <AiOutlineFileAdd size={24} className='admin-course-list-logo' /> 
                        <BsTrash size={24} className='admin-course-list-logo-trash' /> 
                    </td>
                </tr>
                <tr className='admin-course-list-tr'>
                    <td className='admin-course-list-td' data-label='COURSE NAME'>B.A Economics</td>
                    <td className='admin-course-list-td' data-label='DEPARTMENT'>B.A</td>
                    <td className='admin-course-list-td' data-label='DURATION'>3 Year</td>
                    <td className='admin-course-list-td' data-label='FEES'>1,20,000</td>
                    <td className='admin-course-list-td' data-label='EDIT'>
                        <AiOutlineEye size={24} className='admin-course-list-logo' /> 
                        <AiOutlineFileAdd size={24} className='admin-course-list-logo' /> 
                        <BsTrash size={24} className='admin-course-list-logo-trash' /> 
                    </td>
                </tr>
                <tr className='admin-course-list-tr'>
                    <td className='admin-course-list-td' data-label='COURSE NAME'>B.Com Co-operation</td>
                    <td className='admin-course-list-td' data-label='DEPARTMENT'>B.Com</td>
                    <td className='admin-course-list-td' data-label='DURATION'>3 Year</td>
                    <td className='admin-course-list-td' data-label='FEES'>1,20,000</td>
                    <td className='admin-course-list-td' data-label='EDIT'>
                        <AiOutlineEye size={24} className='admin-course-list-logo' /> 
                        <AiOutlineFileAdd size={24} className='admin-course-list-logo' /> 
                        <BsTrash size={24} className='admin-course-list-logo-trash' /> 
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default CourseList
