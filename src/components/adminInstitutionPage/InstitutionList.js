import './InstitutionListStyles.css'
import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { GrLocation } from 'react-icons/gr'
import { BsTelephone, BsTrash } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineFileAdd, AiOutlineMail } from 'react-icons/ai'

const InstitutionList = () => {
  return (
    <div className='admin-institution-list-container'>
        <div className='admin-institution-list'>
            <div className='admin-institution-list-table' >
                <table>
                    <tr>
                        <div className='admin-institution-list-table-row'>   
                            <div className='admin-institution-list-table-row1'>
                                <div className='admin-institution-list-table-col'>
                                    <CgProfile size={24} className='admin-list-logo' />
                                </div>
                                <div className='admin-institution-list-table-col'>
                                    <td>KMO Arts and Science College</td>
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
                                    <AiOutlineFileAdd size={24} className='admin-list-logo' /> 
                                    <BsTrash size={24} className='admin-list-logo-trash' /> 
                                </div>
                            </div>
                        </div> 
                    </tr>
                    <tr>  
                        <div className='admin-institution-list-table-row'> 
                            <div className='admin-institution-list-table-row1'>
                                <div className='admin-institution-list-table-col'>
                                    <CgProfile size={24} className='admin-list-logo' />
                                </div>
                                <div className='admin-institution-list-table-col'>
                                    <td>KMO Higher Secondary School</td>
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
                                    <AiOutlineFileAdd size={24} className='admin-list-logo' /> 
                                    <BsTrash size={24} className='admin-list-logo-trash' /> 
                                </div>
                            </div>
                        </div> 
                    </tr>
                    <tr> 
                        <div className='admin-institution-list-table-row'>   
                            <div className='admin-institution-list-table-row1'>
                                <div className='admin-institution-list-table-col'>
                                    <CgProfile size={24} className='admin-list-logo' />
                                </div>
                                <div className='admin-institution-list-table-col'>
                                    <td>KMO Orphanage &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; </td>
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
                                    <AiOutlineFileAdd size={24} className='admin-list-logo' /> 
                                    <BsTrash size={24} className='admin-list-logo-trash' /> 
                                </div>
                            </div>
                        </div> 
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default InstitutionList
