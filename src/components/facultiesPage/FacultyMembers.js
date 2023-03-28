import './FacultyMembersStyles.css'
import image from '../../images/mentor-image.png'
import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const FacultyMembers = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='faculty-members'>
        {/* <div className={ click ? 'members-section active' : 'members-section' }>
            <input type='submit' name='hs' className='course-btn' value='HS' />
            <input type='submit' name='hss' className='course-btn' value='HSS' />
            <input type='submit' name='ba' className='course-btn' value='B.A' />
            <input type='submit' name='bcom' className='course-btn' value='B.COM' />
            <input type='submit' name='bba' className='course-btn' value='BBA' />
            <input type='submit' name='bsc' className='course-btn' value='B.SC' />
            <input type='submit' name='bed' className='course-btn' value='B.Ed' />
            <input type='submit' name='iti' className='course-btn' value='ITI' />
        </div> */}
        <div className='members-section-hamburger' onClick={ handleClick }>
            {
                click ? 
                    (<FaTimes size={20} style={{ color:'#fff' }} />) : (<FaBars size={20} style={{ color:`var(--themeColor)` }} />)
            }
        </div>
        <div className='mentor-container'>
            <div className='mentor-card'>
                <img className='mentor-img' src={image} alt='mentor image' />
                <div className='mentor-details'>
                    <p>Mohammed Shajin P</p>
                    <p>Mentor</p>
                </div>
            </div>
            <div className='mentor-card'>
                <img className='mentor-img' src={image} alt='mentor image' />
                <div className='mentor-details'>
                    <p>Mohammed Shajin P</p>
                    <p>Mentor</p>
                </div>
            </div>
            <div className='mentor-card'>
                <img className='mentor-img' src={image} alt='mentor image' />
                <div className='mentor-details'>
                    <p>Mohammed Shajin P</p>
                    <p>Mentor</p>
                </div>
            </div>
            <div className='mentor-card'>
                <img className='mentor-img' src={image} alt='mentor image' />
                <div className='mentor-details'>
                    <p>Mohammed Shajin P</p>
                    <p>Mentor</p>
                </div>
            </div>      
        </div>
        <div className='mentor-container'>
            <div className='mentor-card'>
                <img className='mentor-img' src={image} alt='mentor image' />
                <div className='mentor-details'>
                    <p>Mohammed Shajin P</p>
                    <p>Mentor</p>
                </div>
            </div>
            <div className='mentor-card'>
                <img className='mentor-img' src={image} alt='mentor image' />
                <div className='mentor-details'>
                    <p>Mohammed Shajin P</p>
                    <p>Mentor</p>
                </div>
            </div>
            <div className='mentor-card'>
                <img className='mentor-img' src={image} alt='mentor image' />
                <div className='mentor-details'>
                    <p>Mohammed Shajin P</p>
                    <p>Mentor</p>
                </div>
            </div>
            <div className='mentor-card'>
                <img className='mentor-img' src={image} alt='mentor image' />
                <div className='mentor-details'>
                    <p>Mohammed Shajin P</p>
                    <p>Mentor</p>
                </div>
            </div>      
        </div>
    </div>
  )
}

export default FacultyMembers
