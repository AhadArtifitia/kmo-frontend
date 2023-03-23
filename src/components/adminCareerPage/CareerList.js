import './CareerListStyles.css'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineFileAdd } from 'react-icons/ai'

const CareerList = ({careers, setUpdateCareerModal, setCareers, setFormValues, setDefaultValues}) => {
    const token = localStorage.getItem('token')

    const handleEditClick = (object) => {
        fetch(`https://backend.kmokoduvally.com/api/admin/career/${object._id}`,{
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

        setUpdateCareerModal(true)
    }

    const handleDeleteClick = (objId) => {
        const confirmBox = window.confirm("Confirm to delete this Career?")
        if (confirmBox === true) {
            fetch(`https://backend.kmokoduvally.com/api/admin/career/${objId}`,{
                method:'DELETE',
                headers:{
                    'Authorization':`Bearer ${token}`,
                },
            })
            .then(response => {
                // update table data
                setCareers(prevState => {
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
                {careers.map((career,index)=>(
                    <tr className='admin-career-list-tr'>
                        <td className='admin-career-list-td' data-label='DEPARTMENT'>{career.department}</td>
                        <td className='admin-career-list-td' data-label='JOB LEVEL'>{career.level}</td>
                        <td className='admin-career-list-td' data-label='JOB TYPE'>{career.type}</td>
                        <td className='admin-career-list-td' data-label='EXPERIENCE'>{career.experience}</td>
                        <td className='admin-career-list-td' data-label='UPDATED'>{career.updated}</td>
                        <td className='admin-career-list-td' data-label='EDIT'>
                            {/* <AiOutlineEye size={24} className='admin-career-list-logo' />  */}
                            <AiOutlineFileAdd size={24} onClick={() => handleEditClick(career)} className='admin-career-list-logo' /> 
                            <BsTrash size={24} onClick={() => handleDeleteClick(career._id)} className='admin-career-list-logo-trash' /> 
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    </div>
  )
}

export default CareerList
