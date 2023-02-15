import './MessageStyles.css'
import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { MdLocationOn, MdRefresh } from 'react-icons/md'

const Message = () => {
  return (
    <div className='message'>
        <div className='contact-form'>
            <h2>How can we help you ?</h2>
            <form className='contact' action='' method='post'>
                <input type='text' name='name' className='text-box' placeholder='Your Name' required />
                <input type='text' name='mobile' className='text-box' placeholder='Your Mobile' required />
                <textarea name='message' rows='5' placeholder='Your message' requiured />
                <span>Re Captcha?<MdRefresh size={22} style={{ color:`var(--themeColor)`, marginTop:'-2px' }} /></span>
                <input type='text' name='captcha' className='text-box' value='53752' readOnly />
                <input type='text' name='mobile' className='text-box' placeholder='Enter Captcha*' required />
                <br />
                <input type='submit' name='submit' className='send-btn' value='send' />
            </form> 
        </div>
        <div className='contact-info'>
            <h2>Contact Information</h2>
            <div className='location'>
                <MdLocationOn size={22} style={{ color:'#fff', marginTop:'5px' }} />
                <div>
                    <p>State Highway 68,NH212, </p>
                    <p>near super market, </p>
                    <p>Koduvally, Kerala 673572</p>
                </div>
            </div>
            <div className='phone'>
                <FaPhoneAlt size={20} style={{ color:'#fff', marginTop:'5px' }} />
                <div>
                    <p>+91 99999 99999</p>
                    <p>+91 99999 99999</p>
                </div>
            </div>
            <div className='email'>
                <FaEnvelope size={20} style={{ color:'#fff' }} />
                <div>
                    <p className='foo-p'>info@kmc.com</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Message
