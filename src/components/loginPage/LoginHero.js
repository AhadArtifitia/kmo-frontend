import './LoginHeroStyles.css'
import img from '../../images/instHero.png'
import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { RxLockClosed } from 'react-icons/rx'
import { HiOutlineMail } from 'react-icons/hi'

const LoginHero = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const navigate = useNavigate()

  const onSubmit=(e)=>{
    e?.preventDefault()
    console.log('clicked')
    console.log({email,password})
    let obj={
      email:email,
      password:password
    }
    console.log({obj})

    fetch('http://localhost:8000/api/admin/login',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(obj)

    }).then((res)=>res.json()).then((res)=>{
      console.log({res})
      if(res?.token){
        localStorage.setItem('token',res.token)
        navigate('/admin/institution')
      }
    })
  }

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
                    
                    <input className='login-form-input' type="email" name="email" value={email} onChange={(e)=>{setEmail(e?.target?.value)}} placeholder="E-mail" required />
                    <RxLockClosed size={24} className='login-form-icon' />
                </div>
                <div className='login-form-div'>
                    <input className='login-form-input' type="password" value={password}  name="password"  onChange={(e)=>setPassword(e?.target?.value)}  placeholder="Password" minlength="8" required />
                    <HiOutlineMail size={24} className='login-form-icon' />
                </div>
                
                <button className='login-form-button' type="button" onClick={onSubmit}>Login</button>
            </form>
            <Link to='#'>Forgot Password?</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginHero
