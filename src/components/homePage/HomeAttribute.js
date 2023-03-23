import './HomeAttributeStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaHandshake, FaChalkboardTeacher  } from 'react-icons/fa'
import { MdKeyboardArrowRight, MdCastForEducation } from 'react-icons/md'
import { SiMoleculer } from 'react-icons/si'
import { GrCertificate } from 'react-icons/gr'

const HomeAttribute = () => {
  return (
    <div className='home-attribute'>
        <h1>Transformative learning for every team</h1>
        <p>We meet all your learning needs, so you don’t have to spend time managing multiple providers.</p>

        <div className='home-attribute-row'>
            <div className='home-attribute-col'>
                <FaGraduationCap size={40} style={{ color:'#000' }} />
                <h3>What is Lorem Ipsum</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <Link to='#'>Learn More<MdKeyboardArrowRight size={25} /></Link>
            </div>
            <div className='home-attribute-col'>
                <FaHandshake size={40} style={{ color:'#000' }} />
                <h3>What is Lorem Ipsum</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <Link to='#'>Learn More<MdKeyboardArrowRight size={25} /></Link>
            </div>
            <div className='home-attribute-col'>
                <GrCertificate size={40} style={{ color:'#000' }} />
                <h3>What is Lorem Ipsum</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <Link to='#'>Learn More<MdKeyboardArrowRight size={25} /></Link>
            </div>
        </div>
        <div className='home-attribute-row'>
            <div className='home-attribute-col'>
                <MdCastForEducation size={40} style={{ color:'#000' }} />
                <h3>What is Lorem Ipsum</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <Link to='#'>Learn More<MdKeyboardArrowRight size={25} /></Link>
            </div>
            <div className='home-attribute-col'>
                <SiMoleculer size={40} style={{ color:'#000' }} />
                <h3>What is Lorem Ipsum</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <Link to='#'>Learn More<MdKeyboardArrowRight size={25} /></Link>
            </div>
            <div className='home-attribute-col'>
                <FaChalkboardTeacher size={40} style={{ color:'#000' }} />
                <h3>What is Lorem Ipsum</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <Link to='#'>Learn More<MdKeyboardArrowRight size={25} /></Link>
            </div>
        </div>
    </div>
  )
}

export default HomeAttribute
