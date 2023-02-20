import './LoginHeroStyles.css'
import img from '../../images/instHero.png'
import React from 'react'
import { Link } from 'react-router-dom'
import { RxLockClosed } from 'react-icons/rx'
import { HiOutlineMail } from 'react-icons/hi'

const LoginHero = () => {
  return (
    <div className='login-hero'>
      <div className='login-mask'>
        <img className='login-img' src={img} />
      </div>
      <div className='login-container'>
        <div className='login-content'>
            <h4>Welcome to</h4>
            <h2>KMO Groups</h2>
            <form className='login-content-form'>
                <div className='login-form-div'>
                    
                    <input className='login-form-input' type="email" name="email" placeholder="E-mail" required />
                    <RxLockClosed size={24} className='login-form-icon' />
                </div>
                <div className='login-form-div'>
                    <input className='login-form-input' type="password"  name="password" placeholder="Password" minlength="8" required />
                    <HiOutlineMail size={24} className='login-form-icon' />
                </div>
                
                <button className='login-form-button' type="submit">Login</button>
            </form>
            <Link to='#'>Forgot Password?</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginHero
