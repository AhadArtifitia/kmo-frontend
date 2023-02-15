import './HomeNavStyles.css'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const HomeNav = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='home-nav-container'>
        <ul className={ click ? 'home-nav active':'home-nav' }>
            <li>
                <Link to='/institutions'>Institutions</Link>
            </li>
            <li>
                <Link to='/courses'>Courses</Link>
            </li>
            <li>
                <Link to='/alumni'>Alumni</Link>
            </li>
            <li>
                <Link to='/admission'>Admission</Link>
            </li>
            <li>
                <Link to='/faculty'>Faculty</Link>
            </li>
            <li>
                <Link to='/studentscorner'>Students Corner</Link>
            </li>
        </ul>
        <div className='home-nav-hamburger' onClick={ handleClick }>
            {
                click ? 
                    (<FaTimes size={20} style={{ color:'#fff' }} />) : (<FaBars size={20} style={{ color:'#fff' }} />)
            }
        </div>
    </div>
  )
}

export default HomeNav
