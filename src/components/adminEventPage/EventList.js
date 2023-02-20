import './EventListStyles.css'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineFileAdd } from 'react-icons/ai'

const EventList = () => {
  return (
    <div className='admin-event-list-container'>
        <div className='admin-event-list'>
            <table className='admin-event-list-table'>
                <tr className='admin-event-list-thr'>
                    <th className='admin-event-list-th'>EVENT TITLE</th>
                    <th className='admin-event-list-th'>ORGANIZER</th>
                    <th className='admin-event-list-th'>TYPE</th>
                    <th className='admin-event-list-th'>CATEGORY</th>
                    <th className='admin-event-list-th'>LOCATION</th>
                    <th className='admin-event-list-th'>DATE AND TIME</th>
                    <th className='admin-event-list-th'>EDIT</th>
                </tr>
                <tr className='admin-event-list-tr'>
                    <td className='admin-event-list-td' data-label='EVENT TITLE'>Arts</td>
                    <td className='admin-event-list-td' data-label='ORGANIZER'>College</td>
                    <td className='admin-event-list-td' data-label='TYPE'>Festival</td>
                    <td className='admin-event-list-td' data-label='CATEGORY'>College Fest</td>
                    <td className='admin-event-list-td' data-label='LOCATION'>College</td>
                    <td className='admin-event-list-td' data-label='DATE AND TIME'>2023 Feb 01 10.00 am</td>
                    <td className='admin-event-list-td' data-label='EDIT'>
                        <AiOutlineEye size={24} className='admin-event-list-logo' /> 
                        <AiOutlineFileAdd size={24} className='admin-event-list-logo' /> 
                        <BsTrash size={24} className='admin-event-list-logo-trash' /> 
                    </td>
                </tr>
                <tr className='admin-event-list-tr'>
                    <td className='admin-event-list-td' data-label='EVENT TITLE'>Arts</td>
                    <td className='admin-event-list-td' data-label='ORGANIZER'>College</td>
                    <td className='admin-event-list-td' data-label='TYPE'>Festival</td>
                    <td className='admin-event-list-td' data-label='CATEGORY'>College Fest</td>
                    <td className='admin-event-list-td' data-label='LOCATION'>College</td>
                    <td className='admin-event-list-td' data-label='DATE AND TIME'>2023 Feb 01 10.00 am</td>
                    <td className='admin-event-list-td' data-label='EDIT'>
                        <AiOutlineEye size={24} className='admin-event-list-logo' /> 
                        <AiOutlineFileAdd size={24} className='admin-event-list-logo' /> 
                        <BsTrash size={24} className='admin-event-list-logo-trash' /> 
                    </td>
                </tr>
                <tr className='admin-event-list-tr'>
                    <td className='admin-event-list-td' data-label='EVENT TITLE'>Arts</td>
                    <td className='admin-event-list-td' data-label='ORGANIZER'>College</td>
                    <td className='admin-event-list-td' data-label='TYPE'>Festival</td>
                    <td className='admin-event-list-td' data-label='CATEGORY'>College Fest</td>
                    <td className='admin-event-list-td' data-label='LOCATION'>College</td>
                    <td className='admin-event-list-td' data-label='DATE AND TIME'>2023 Feb 01 10.00 am</td>
                    <td className='admin-event-list-td' data-label='EDIT'>
                        <AiOutlineEye size={24} className='admin-event-list-logo' /> 
                        <AiOutlineFileAdd size={24} className='admin-event-list-logo' /> 
                        <BsTrash size={24} className='admin-event-list-logo-trash' /> 
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default EventList
