import './AdminNavStyles.css'
import React from 'react'
import { IoMdNotificationsOutline, IoIosArrowDown } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'

const AdminNav = () => {
  return (
    <div className='admin-nav'>
        <div className='admin-nav-body'>
            <IoMdNotificationsOutline size={25} className='admin-nav-logo' />

            <h5>KMO Groups</h5>
            
            <CgProfile size={25} className='admin-nav-logo' />

            <IoIosArrowDown size={25} className='admin-nav-logo' />

        </div>
    </div>
  )
}

export default AdminNav
