import './EventListStyles.css'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineFileAdd } from 'react-icons/ai'

const EventList = ({events, setUpdateEventModal, setEvents, setFormValues, setDefaultValues}) => {
    const token = localStorage.getItem('token')

    const handleEditClick = (object) => {
        fetch(`https://backend.kmokoduvally.com/api/admin/event/${object._id}`,{
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

        setUpdateEventModal(true)
    }

    const handleDeleteClick = (objId) => {
        const confirmBox = window.confirm("Confirm to delete this event?")
        if (confirmBox === true) {
            fetch(`http://localhost:8000/api/admin/event/${objId}`,{
                method:'DELETE',
                headers:{
                    'Authorization':`Bearer ${token}`,
                },
            })
            .then(response => {
                // update table data
                setEvents(prevState => {
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
    <div className='admin-event-list-container'>
        <div className='admin-event-list'>
            <table className='admin-event-list-table'>
                <tr className='admin-event-list-thr'>
                    <th className='admin-event-list-th'>EVENT TITLE</th>
                    <th className='admin-event-list-th'>ORGANIZER</th>
                    <th className='admin-event-list-th'>TYPE</th>
                    <th className='admin-event-list-th'>CATEGORY</th>
                    <th className='admin-event-list-th'>LOCATION</th>
                    <th className='admin-event-list-th'>DATETIME</th>
                    <th className='admin-event-list-th'>EDIT</th>
                </tr>
                {events.map((event, index)=> (
                    <tr className='admin-event-list-tr'>
                        <td className='admin-event-list-td' data-label='EVENT TITLE'>{event.title}</td>
                        <td className='admin-event-list-td' data-label='ORGANIZER'>{event.organizer}</td>
                        <td className='admin-event-list-td' data-label='TYPE'>{event.type}</td>
                        <td className='admin-event-list-td' data-label='CATEGORY'>{event.category}</td>
                        <td className='admin-event-list-td' data-label='LOCATION'>{event.location}</td>
                        <td className='admin-event-list-td' data-label='DATE AND TIME'>{event.datetime}</td>
                        <td className='admin-event-list-td' data-label='EDIT'>
                            {/* <AiOutlineEye size={24} className='admin-event-list-logo' />  */}
                            <AiOutlineFileAdd size={24} onClick={() => handleEditClick(event)} className='admin-event-list-logo' /> 
                            <BsTrash size={24} onClick={() => handleDeleteClick(event._id)} className='admin-event-list-logo-trash' /> 
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    </div>
  )
}

export default EventList
