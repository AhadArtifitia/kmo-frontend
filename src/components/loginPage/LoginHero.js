import './LoginHeroStyles.css'
import img from '../../images/instHero.png'
import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { RxLockClosed } from 'react-icons/rx'
import { HiOutlineMail } from 'react-icons/hi'

const LoginHero = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const [responseMessage, setResponseMessage] = useState('');
  const navigate = useNavigate()

  const onSubmit=(e)=>{
    e?.preventDefault()
    let obj={
      email:email,
      password:password
    }

    fetch('https://backend.kmokoduvally.com/api/admin/login',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(obj)

    })
    .then((res)=>res.json())
    .then((res)=>{
      if(res?.token){
        setResponseMessage('Login successful!');
        localStorage.setItem('token',res.token)
        localStorage.setItem('admin',obj.email)
        navigate('/admin/institution')
      } else {
        // error
        console.log('Invalid username or password!');
        setResponseMessage('Invalid username or password!');
      }
    })
    .catch(error => {
      setResponseMessage('An error occurred while logging in!');
    });
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
                {responseMessage && <p>{responseMessage}</p>}
            </form>
            {/* <Link to='#'>Forgot Password?</Link> */}
        </div>
      </div>
    </div>
  )
}

export default LoginHero
