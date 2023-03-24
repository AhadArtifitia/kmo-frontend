import './FooterStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/kmoLogoW.png'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

const HomeFooter = () => {
  return (
    <div className='footer'>
        <div className='footer-body'>
            <img src={logo}  alt='logo' />
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
        </div>
        <div className='footer-links'>
            <h4>Quick Links</h4>
            <div className='links-li'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About us</Link>
                    </li>
                    <li>
                        <Link to='/administration'>Administration</Link>        
                    </li>
                    <li>
                        <Link to='/institutions'>Institutions</Link>
                    </li>
                    <li>
                        <Link to='/courses'>Course</Link>
                    </li>
                    <li>
                        <Link to='/departments'>Departments</Link>
                    </li>
                    <li>
                        <Link to='/career'>Career</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/feestructure'>Fee structure</Link>
                    </li>
                    <li>
                        <Link to='/alumni'>Alumni</Link>
                    </li>
                    <li>
                        <Link to='/admission'>Admission</Link>
                    </li>
                    <li>
                        <Link to='/faculty'>Faculties</Link>
                    </li>
                    <li>
                        <Link to='/studentscorner'>Students Corner</Link>
                    </li>
                    <li>
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='footer-contact'>
            <h4>Contact Us</h4>
            <div className='contact-phone'>
                <FaPhoneAlt size={20} style={{ color:'#fff', marginTop:'0rem' }} />
                <p>O495 2211311 <br />
                9895111396 <br />
                9497033555</p>
            </div>
            <div className='contact-email'>
                <FaEnvelope size={20} style={{ color:'#fff', marginTop:'0rem' }} />
                <p>Edu@kmokoduvally.com</p>
            </div>
            <div className='contact-address'>
                <MdLocationOn size={24} style={{ color:'#fff', marginTop:'0rem' }} />
                <p>State Highway NH766, <br />
                    Koduvally 673572, <br />
                    Kozhikode, Kerala, INDIA</p>
            </div>
        </div>
    </div>
  )
}

export default HomeFooter
