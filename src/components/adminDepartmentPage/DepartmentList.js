import './DepartmentListStyles.css'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineFileAdd } from 'react-icons/ai'

const DepartmentList = () => {
  return (
    <div className='admin-department-list-container'>
        <div className='admin-department-list'>
            <table className='admin-department-list-table'>
                <tr className='admin-department-list-thr'>
                    <th className='admin-department-list-th'>#</th>
                    <th className='admin-department-list-th'>DEPT. NAME</th>
                    <th className='admin-department-list-th'>HEAD OF DEPT.</th>
                    <th className='admin-department-list-th'>COURSES</th>
                    <th className='admin-department-list-th'>STD. CAPACITY</th>
                    <th className='admin-department-list-th'>EDIT</th>
                </tr>
                <tr className='admin-department-list-tr'>
                    <td className='admin-department-list-td' data-label='#'>1</td>
                    <td className='admin-department-list-td' data-label='ORGANDEPT. NAMEIZER'>B.A</td>
                    <td className='admin-department-list-td' data-label='HEAD OF DEPT.'>Anas</td>
                    <td className='admin-department-list-td' data-label='COURSES'>B.A English</td>
                    <td className='admin-department-list-td' data-label='STD. CAPACITY'>150</td>
                    <td className='admin-event-list-td' data-label='EDIT'>
                        <AiOutlineEye size={24} className='admin-department-list-logo' /> 
                        <AiOutlineFileAdd size={24} className='admin-department-list-logo' /> 
                        <BsTrash size={24} className='admin-department-list-logo-trash' /> 
                    </td>
                </tr>
                <tr className='admin-department-list-tr'>
                <td className='admin-department-list-td' data-label='#'>2</td>
                    <td className='admin-department-list-td' data-label='ORGANDEPT. NAMEIZER'>B.A</td>
                    <td className='admin-department-list-td' data-label='HEAD OF DEPT.'>Anas</td>
                    <td className='admin-department-list-td' data-label='COURSES'>B.A English</td>
                    <td className='admin-department-list-td' data-label='STD. CAPACITY'>150</td>
                    <td className='admin-department-list-td' data-label='EDIT'>
                        <AiOutlineEye size={24} className='admin-department-list-logo' /> 
                        <AiOutlineFileAdd size={24} className='admin-department-list-logo' /> 
                        <BsTrash size={24} className='admin-department-list-logo-trash' /> 
                    </td>
                </tr>
                <tr className='admin-department-list-tr'>
                <td className='admin-department-list-td' data-label='#'>3</td>
                    <td className='admin-department-list-td' data-label='ORGANDEPT. NAMEIZER'>B.A</td>
                    <td className='admin-department-list-td' data-label='HEAD OF DEPT.'>Anas</td>
                    <td className='admin-department-list-td' data-label='COURSES'>B.A English</td>
                    <td className='admin-department-list-td' data-label='STD. CAPACITY'>150</td>
                    <td className='admin-department-list-td' data-label='EDIT'>
                        <AiOutlineEye size={24} className='admin-department-list-logo' /> 
                        <AiOutlineFileAdd size={24} className='admin-evedepartmentnt-list-logo' /> 
                        <BsTrash size={24} className='admin-department-list-logo-trash' /> 
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default DepartmentList
