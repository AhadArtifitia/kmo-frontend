import './AlumniListStyles.css'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineFileAdd } from 'react-icons/ai'

const AlumniList = ({alumnis, setUpdateAlumniModal, setAlumnis, setFormValues, setDefaultValues }) => {
    const token = localStorage.getItem('token')

    const handleEditClick = (object) => {
        fetch(`https://backend.kmokoduvally.com/api/admin/alumni/${object._id}`,{  
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

        setUpdateAlumniModal(true)
    }

    const handleDeleteClick = (objId) => {
        const confirmBox = window.confirm("Confirm to delete this alumni?")
        if (confirmBox === true) {
            fetch(`https://backend.kmokoduvally.com/api/admin/alumni/${objId}`,{   
                method:'DELETE',
                headers:{
                    'Authorization':`Bearer ${token}`,
                },
            })
            .then(response => {
                // update table data
                setAlumnis(prevState => {
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
    <div className='admin-alumni-list-container'>
        <div className='admin-alumni-list'>
            <table className='admin-alumni-list-table'>
                <tr className='admin-alumni-list-thr'>
                    <th className='admin-alumni-list-th'>ALUMNI TITLE</th>
                    <th className='admin-alumni-list-th'>EDIT</th>
                </tr>
                {alumnis.map((alumni, index)=> (
                    <tr className='admin-alumni-list-tr'>
                        <td className='admin-alumni-list-td' data-label='ALUMNI TITLE'>{alumni.name}</td>
                        <td className='admin-alumni-list-td' data-label='EDIT'>
                            {/* <AiOutlineEye size={24} className='admin-event-list-logo' />  */}
                            <AiOutlineFileAdd size={24} onClick={() => handleEditClick(alumni)} className='admin-alumni-list-logo' /> 
                            <BsTrash size={24} onClick={() => handleDeleteClick(alumni._id)} className='admin-alumni-list-logo-trash' /> 
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    </div>
  )
}

export default AlumniList
