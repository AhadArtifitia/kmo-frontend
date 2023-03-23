import './DepartmentListStyles.css'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineFileAdd } from 'react-icons/ai'

const DepartmentList = ({setUpdateDepModal, depSearch, departments, setDefaultValues, setFormValues, setDepartments}) => {

    const filteredDepartments = departments.filter(item => 
        item.name.toLowerCase().includes(depSearch.toLowerCase()) 
    );

    const token = localStorage.getItem('token')

    const handleEditClick = (object) => {
        fetch(`https://backend.kmokoduvally.com/api/admin/department/${object._id}`,{
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

        setUpdateDepModal(true)
    }

    const handleDeleteClick = (objId) => {
        const confirmBox = window.confirm("Confirm to delete this department?")
        if (confirmBox === true) {
            fetch(`http://localhost:8000/api/admin/department/${objId}`,{
                method:'DELETE',
                headers:{
                    'Authorization':`Bearer ${token}`,
                },
            })
            .then(response => {
                // update table data
                setDepartments(prevState => {
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
    <div className='admin-department-list-container'>
        <div className='admin-department-list'>
            <table className='admin-department-list-table'>
                <tr className='admin-department-list-thr'>
                    <th className='admin-department-list-th'>INDEX</th>
                    <th className='admin-department-list-th'>DEPT. NAME</th>
                    <th className='admin-department-list-th'>HEAD OF DEPT.</th>
                    <th className='admin-department-list-th'>COURSES</th>
                    <th className='admin-department-list-th'>STD. CAPACITY</th>
                    <th className='admin-department-list-th'>EDIT</th>
                </tr>
                {filteredDepartments.map((dep, index) =>(
                    <tr className='admin-department-list-tr'>
                        <td className='admin-department-list-td' data-label='#'>{index+1}</td>
                        <td className='admin-department-list-td' data-label='ORGANDEPT. NAMEIZER'>{dep.name}</td>
                        <td className='admin-department-list-td' data-label='HEAD OF DEPT.'>{dep.hod}</td>
                        <td className='admin-department-list-td' data-label='COURSES'>{dep.courses}</td>                       
                        <td className='admin-department-list-td' data-label='STD. CAPACITY'>{dep.capacity}</td>
                        <td className='admin-event-list-td' data-label='EDIT'>
                            {/* <AiOutlineEye size={24} className='admin-department-list-logo' />  */}
                            <AiOutlineFileAdd size={24} onClick={() => handleEditClick(dep)} className='admin-department-list-logo' /> 
                            <BsTrash size={24} onClick={() => handleDeleteClick(dep._id)} className='admin-department-list-logo-trash' /> 
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    </div>
  )
}

export default DepartmentList
