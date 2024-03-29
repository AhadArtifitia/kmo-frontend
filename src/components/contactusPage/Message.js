import './MessageStyles.css'
import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { MdLocationOn, MdRefresh } from 'react-icons/md'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Message = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, email, message };
        fetch('https://backend.kmokoduvally.com/contact', {  //contact  
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        .then((response) => {
            if(response.status === 401 || !response){
                console.log('error');
            }else {
                console.log('Email sent successfully');
                toast.success('Message sent successfully!', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                setName('')
                setEmail('')
                setMessage('')
            }
        })
        .catch((error) => {
            console.error('Error sending email:', error);
        });
      };

  return (
    <div className='message'>
        <div className='contact-form'>
            <h2>How can we help you ?</h2>
            <form onSubmit={handleSubmit} className='contact'>
                <input type='text' name='name' className='text-box' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
                <input type='email' name='email' className='text-box' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <textarea name='message' rows='5' placeholder='Your message' value={message} onChange={(e) => setMessage(e.target.value)} requiured />
                {/* <span>Re Captcha?<MdRefresh size={22} style={{ color:`var(--themeColor)`, marginTop:'-2px' }} /></span>
                <input type='text' name='captcha' className='text-box' value='53752' readOnly />
                <input type='text' name='mobile' className='text-box' placeholder='Enter Captcha*' required /> */}
                <br />
                <button type='submit' className='send-btn'>Send</button>
            </form> 
        </div>
        <div className='contact-info'>
            <h2>Contact Information</h2>
            <div className='location'>
                <MdLocationOn size={22} style={{ color:'#fff', marginTop:'5px' }} />
                <div>
                <p>State Highway NH766, <br />
                    Koduvally 673572, <br />
                    Kozhikode, Kerala, INDIA</p>
                </div>
            </div>
            <div className='phone'>
                <FaPhoneAlt size={20} style={{ color:'#fff', marginTop:'5px' }} />
                <div>
                    <p>+91 8078796228 <br />
                    O495 2210306 <br />
                    O495 2210228</p>
                </div>
            </div>
            <div className='email'>
                <FaEnvelope size={20} style={{ color:'#fff' }} />
                <div>
                    <p className='foo-p'>kmokoduvally@gmail.com</p>
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Message
