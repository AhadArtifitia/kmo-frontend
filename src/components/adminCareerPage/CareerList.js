import './CareerListStyles.css'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineFileAdd } from 'react-icons/ai'

const CareerList = () => {
  return (
    <div className='admin-career-list-container'>
        <div className='admin-career-list'>
            <table className='admin-career-list-table'>
                <tr className='admin-career-list-thr'>
                    <th className='admin-career-list-th'>DEPARTMENT</th>
                    <th className='admin-career-list-th'>JOB LEVEL </th>
                    <th className='admin-career-list-th'>JOB TYPE</th>
                    <th className='admin-career-list-th'>EXPERIENCE</th>
                    <th className='admin-career-list-th'>UPDATED</th>
                    <th className='admin-career-list-th'>EDIT</th>
                </tr>
                <tr className='admin-career-list-tr'>
                    <td className='admin-career-list-td' data-label='DEPARTMENT'>B.A</td>
                    <td className='admin-career-list-td' data-label='JOB LEVEL'>Teaching</td>
                    <td className='admin-career-list-td' data-label='JOB TYPE'>Permanent</td>
                    <td className='admin-career-list-td' data-label='EXPERIENCE'>1 - 2 Years</td>
                    <td className='admin-career-list-td' data-label='UPDATED'>01/01/2023</td>
                    <td className='admin-career-list-td' data-label='EDIT'>
                        <AiOutlineEye size={24} className='admin-career-list-logo' /> 
                        <AiOutlineFileAdd size={24} className='admin-career-list-logo' /> 
                        <BsTrash size={24} className='admin-career-list-logo-trash' /> 
                    </td>
                </tr>
                <tr className='admin-career-list-tr'>
                    <td className='admin-career-list-td' data-label='DEPARTMENT'>HSS</td>
                    <td className='admin-career-list-td' data-label='JOB LEVEL'>Teaching</td>
                    <td className='admin-career-list-td' data-label='JOB TYPE'>Permanent</td>
                    <td className='admin-career-list-td' data-label='EXPERIENCE'>1 - 2 Years</td>
                    <td className='admin-career-list-td' data-label='UPDATED'>01/01/2023</td>
                    <td className='admin-career-list-td' data-label='EDIT'>
                        <AiOutlineEye size={24} className='admin-career-list-logo' /> 
                        <AiOutlineFileAdd size={24} className='admin-career-list-logo' /> 
                        <BsTrash size={24} className='admin-career-list-logo-trash' /> 
                    </td>
                </tr>
                <tr className='admin-career-list-tr'>
                    <td className='admin-career-list-td' data-label='DEPARTMENT'>B.Sc</td>
                    <td className='admin-career-list-td' data-label='JOB LEVEL'>Teaching</td>
                    <td className='admin-career-list-td' data-label='JOB TYPE'>Permanent</td>
                    <td className='admin-career-list-td' data-label='EXPERIENCE'>1 - 2 Years</td>
                    <td className='admin-career-list-td' data-label='UPDATED'>01/01/2023</td>
                    <td className='admin-career-list-td' data-label='EDIT'>
                        <AiOutlineEye size={24} className='admin-career-list-logo' /> 
                        <AiOutlineFileAdd size={24} className='admin-career-list-logo' /> 
                        <BsTrash size={24} className='admin-career-list-logo-trash' /> 
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default CareerList
