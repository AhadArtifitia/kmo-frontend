import './SideNavStyles.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { FaRegBuilding } from 'react-icons/fa'
import { BiBookContent } from 'react-icons/bi'
import { HiOutlinePhotograph } from 'react-icons/hi'
import { RiBook3Line, RiSuitcaseLine, RiMedal2Line } from 'react-icons/ri'

const SideNav = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className={ click ? 'side-nav-container active' :'side-nav-container'}>
        <ul className='side-nav'>
            <li>
                <FaRegBuilding size={25} className='side-nav-logo' />
                <Link to='/admin/institution'>Institutions</Link>
            </li>
            <li>
                <RiBook3Line size={25} className='side-nav-logo' />
                <Link to='/admin/department'>Departments</Link>
            </li>
            <li>
                <BiBookContent size={25} className='side-nav-logo' />
                <Link to='/admin/course'>Course</Link>
            </li>
            <li>
                <RiSuitcaseLine size={25} className='side-nav-logo' />
                <Link to='/admin/career'>Career</Link>
            </li>
            <li>
                <RiMedal2Line size={25} className='side-nav-logo' />
                <Link to='/admin/event'>Events</Link>
            </li>
            <li>
                <HiOutlinePhotograph size={25} className='side-nav-logo' />
                <Link to='/admin/banner'>Banner</Link>
            </li>
        </ul>
        <div className='side-nav-hamburger' onClick={ handleClick }>
            {
                click ? 
                    (<FaTimes size={20} style={{ color:'#fff', marginright: '1rem' }} />) : (<FaBars size={20} style={{ color:'#000', marginright: '1rem' }} />)
            }
        </div>
    </div>
  )
}

export default SideNav
