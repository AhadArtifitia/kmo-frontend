import './GalleryFilesStyles.css'
import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineFileAdd } from 'react-icons/ai'

const GalleryFiles = ({gallerys, setGallerys}) => {
    const token = localStorage.getItem('token')

    const handleDeleteClick = (objId) => {
        const confirmBox = window.confirm("Confirm to delete this file?")
        if (confirmBox === true) {
            fetch(`https://backend.kmokoduvally.com/api/admin/gallery/${objId}`,{  
                method:'DELETE',
                headers:{
                    'Authorization':`Bearer ${token}`,
                },
            })
            .then(response => {
                // update table data
                setGallerys(prevState => {
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
    <div className='admin-gallery-list-container'>
        <div className='admin-gallery-list'>
            <table className='admin-gallery-list-table'>
                <tr className='admin-gallery-list-thr'>
                    <th className='admin-gallery-list-th'>IMAGE TITLE</th>
                    <th className='admin-gallery-list-th'>DELETE</th>
                </tr>
                {gallerys.map((gallery, index)=> (
                    <tr className='admin-gallery-list-tr'>
                        <td className='admin-gallery-list-td' data-label='GALLERY TITLE'>{gallery.name}</td>
                        <td className='admin-gallery-list-td' data-label='EDIT'>
                            {/* <AiOutlineEye size={24} className='admin-event-list-logo' />  */}
                            <BsTrash size={24} onClick={() => handleDeleteClick(gallery._id)} className='admin-gallery-list-logo-trash' /> 
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    </div>
  )
}

export default GalleryFiles
