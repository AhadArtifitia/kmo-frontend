import './AdminNavStyles.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoMdNotificationsOutline, IoIosArrowDown } from 'react-icons/io'
import { CgProfile } from 'react-icons/cg'
import { GrLogout } from 'react-icons/gr'
import { NavDropdown } from 'react-bootstrap'

const AdminNav = () => {
  const admin = localStorage.getItem('admin')
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.clear();
    navigate('/admin/login')
  }

  return (
    <div className='admin-nav'>
        <div className='admin-nav-body'>
            {/* <IoMdNotificationsOutline size={25} className='admin-nav-logo' /> */}

            <h5>KMO Groups</h5>
            
            <CgProfile size={25} className='admin-nav-logo' />
  
            <NavDropdown title={admin && "Admin"} className="admin-nav-logout">
              <NavDropdown.Item onClick={handleLogout}>{admin ? "logout": "login"}  <GrLogout size={18} className='admin-nav-logo' /></NavDropdown.Item>
            </NavDropdown>

            {/* <IoIosArrowDown size={25} className='admin-nav-logo' /> */}

        </div>
    </div>
  )
}

export default AdminNav
