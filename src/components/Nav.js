import './NavStyles.css'
import logo from '../images/kmo-logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
        <header>
            <container className='img-co' >
                <img className='logo' src={logo} alt='logo' />
            </container>
            <input type="checkbox" id='nav-toggle' className='nav-toggle' />
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About us</Link>
                    </li>
                    <li>
                        <Link to='/institutions'>Institutions</Link>
                    </li>
                    <li>
                        <Link to='/courses'>Courses</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact us</Link>
                    </li>
                    <li>
                        <Link to='/career'>Career</Link>
                    </li>
                </ul>
            </nav>
            <label for="nav-toggle" className='nav-toggle-label'>
                <span></span>
            </label>
        </header>
         
  )
}

export default Nav
