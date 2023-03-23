import './HomeInstitutionsStyles.css'
import React from 'react'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

const HomeInstitutions = () => {
    const [institutions, setInstitutions] = React.useState([])
    const token = localStorage.getItem('token')

    React.useEffect(()=>{
        fetchAllInstitutions()
    },[])

    const fetchAllInstitutions=async()=>{
        await fetch('https://backend.kmokoduvally.com/api/admin/institution',{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
        .then((res)=>res.json())
        .then((res)=>{
        if(Array.isArray(res)&&res?.length>0){
            setInstitutions(res)
        }
        })
    }
  return (
    <div className='institutions'>
        <div className='institutions-top'>
            <div className='institutions-title'>
                <h2>Institutions</h2>
                <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            </div>
            <div className='institutions-img'>
                {institutions.map((institution,index)=>{
                    if (institution.name === 'KMO Orphanage') {
                        return <>
                                    <img src={institution.imageUrl} alt='institutions image' />
                                    <div className='institutions-img-overlay'>
                                        <h5>{institution.name}</h5>
                                        <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 
                                            33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
                                        <FaPhoneAlt size={20} style={{ color:'#fff', marginLeft:'0rem' }} />
                                        <FaEnvelope size={20} style={{ color:'#fff', marginLeft:'1.5rem' }} />
                                        <MdLocationOn size={20} style={{ color:'#fff', marginLeft:'1.5em' }} />
                                    </div>
                                </>
                    }
                        return null;      
                })}
                
            </div>
        </div>
        <br />
        <div className='institutions-bottom'>
            <div className='institutions-img'>
                {institutions.map((institution,index)=>{
                    if (institution.name === 'KMO Higher Secondary School') {
                        return <>
                                    <img src={institution.imageUrl} alt='institutions image' />
                                    <div className='institutions-img-overlay'>
                                        <h5>{institution.name}</h5>
                                        <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 
                                            33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
                                        <FaPhoneAlt size={20} style={{ color:'#fff', marginLeft:'0rem' }} />
                                        <FaEnvelope size={20} style={{ color:'#fff', marginLeft:'1.5rem' }} />
                                        <MdLocationOn size={20} style={{ color:'#fff', marginLeft:'1.5em' }} />
                                    </div>
                                </>
                    }
                        return null;      
                })}               
            </div>
            <div className='institutions-img'>
                {institutions.map((institution,index)=>{
                    if (institution.name === 'KMO Arts and Science College') {
                        return <>
                                    <img src={institution.imageUrl} alt='institutions image' />
                                    <div className='institutions-img-overlay'>
                                        <h5>{institution.name}</h5>
                                        <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 
                                            33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
                                        <FaPhoneAlt size={20} style={{ color:'#fff', marginLeft:'0rem' }} />
                                        <FaEnvelope size={20} style={{ color:'#fff', marginLeft:'1.5rem' }} />
                                        <MdLocationOn size={20} style={{ color:'#fff', marginLeft:'1.5em' }} />
                                    </div>
                                </>
                    }
                        return null;      
                })}
                
            </div>
        </div>
    </div>
  )
}

export default HomeInstitutions
