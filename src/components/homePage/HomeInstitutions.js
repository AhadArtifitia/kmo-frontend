import './HomeInstitutionsStyles.css'
import React from 'react'
import img2 from '../../images/first.png'
import img3 from '../../images/second.png'
import img4 from '../../images/third.png'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

const HomeInstitutions = () => {
  return (
    <div className='institutions'>
        <div className='institutions-top'>
            <div className='institutions-title'>
                <h2>Institutions</h2>
                <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            </div>
            <div className='institutions-img'>
                <img src={img2} alt='institutions image' />
                <div className='institutions-img-overlay'>
                    <h5>KMO ASC Koduvally</h5>
                    <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 
                        33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
                    <FaPhoneAlt size={16} style={{ color:'#fff', marginLeft:'0rem' }} />
                    <FaEnvelope size={16} style={{ color:'#fff', marginLeft:'1.5rem' }} />
                    <MdLocationOn size={16} style={{ color:'#fff', marginLeft:'1.5em' }} />
                </div>
            </div>
        </div>
        <br />
        <div className='institutions-bottom'>
            <div className='institutions-img'>
                <img src={img3} alt='institutions image' />
                <div className='institutions-img-overlay'>
                    <h5>KMO ASC Koduvally</h5>
                    <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 
                        33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
                    <FaPhoneAlt size={20} style={{ color:'#fff', marginLeft:'0rem' }} />
                    <FaEnvelope size={20} style={{ color:'#fff', marginLeft:'1.5rem' }} />
                    <MdLocationOn size={20} style={{ color:'#fff', marginLeft:'1.5em' }} />
                </div>
            </div>
            <div className='institutions-img'>
                <img src={img4} alt='institutions image' />
                <div className='institutions-img-overlay'>
                    <h5>KMO ASC Koduvally</h5>
                    <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 
                        33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
                    <FaPhoneAlt size={20} style={{ color:'#fff', marginLeft:'0rem' }} />
                    <FaEnvelope size={20} style={{ color:'#fff', marginLeft:'1.5rem' }} />
                    <MdLocationOn size={20} style={{ color:'#fff', marginLeft:'1.5em' }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeInstitutions
