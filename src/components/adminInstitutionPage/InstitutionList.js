import './InstitutionListStyles.css'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { GrLocation } from 'react-icons/gr'
import { BsTelephone, BsTrash } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineFileAdd, AiOutlineMail } from 'react-icons/ai'

const InstitutionList = ({ setUpdateInstModal, setDefaultValues, objects, setFormValues, setObjects }) => {
    const token = localStorage.getItem('token')

    const handleEditClick = (object) => {
        console.log(object);
        fetch(`http://localhost:8000/api/admin/institution/${object._id}`,{
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

        setUpdateInstModal(true)
    }

    const handleDeleteClick = (objId) => {
        const confirmBox = window.confirm("Confirm to delete this institute?")
        if (confirmBox === true) {
            fetch(`http://localhost:8000/api/admin/institution/${objId}`,{
                method:'DELETE',
                headers:{
                    'Authorization':`Bearer ${token}`,
                },
            })
            .then(response => {
                // update table data
                setObjects(prevState => {
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
    <div className='admin-institution-list-container'>
        <div className='admin-institution-list'>
            <div className='admin-institution-list-table' >
                <table>
                <tbody>
                {objects.map((row, index) => (
                    <tr key={row._id}>
                        <div className='admin-institution-list-table-row'>   
                            <div className='admin-institution-list-table-row1'>
                                <div className='admin-institution-list-table-col'>
                                    <CgProfile size={24} className='admin-list-logo' />
                                </div>
                                <div className='admin-institution-list-table-col'>
                                    <td>{row.name}</td>
                                </div>
                            </div>
                            <div className='admin-institution-list-table-row2'>
                                <div className='admin-institution-list-table-col'>
                                    <BsTelephone size={24} className='admin-list-logo' />
                                    <AiOutlineMail size={24} className='admin-list-logo' />
                                    <GrLocation size={24} className='admin-list-logo' />  
                                </div>
                                <div className='admin-institution-list-table-col'>
                                    <AiOutlineEye size={24} className='admin-list-logo' /> 
                                    <AiOutlineFileAdd size={24} onClick={() => handleEditClick(row)} className='admin-list-logo' /> 
                                    <BsTrash size={24} onClick={() => handleDeleteClick(row._id)} className='admin-list-logo-trash' /> 
                                </div>
                            </div>
                        </div> 
                    </tr>
                ))}
                </tbody>       
                </table>
            </div>
        </div>
    </div>
  )
}

export default InstitutionList

