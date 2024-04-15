import './HomeInstitutionsStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
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
        .then(res => {
            if(Array.isArray(res)&&res?.length>0){
                setInstitutions(res)
            }
            const flexContainer = document.querySelector('.flex-container');
        // .then((res)=>{
        // if(Array.isArray(res)&&res?.length>0){
        //     setInstitutions(res)
        // }
        })
    }
  return (
    <div className='institutions'>

        <div className='institutions-title'>
            <div>
                <h2>INSTITUTIONS</h2>
                {/* <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 
                    consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p> */}
            </div>
        </div>

        {institutions.map((institution,index) => (
            <div className='institutions-img'>
                <img src={institution.imageUrl} alt='institutions image' />
                <div className='institutions-img-overlay'>
                    <h5>{institution.name}</h5>
                    <p>{institution.description}</p>
                    <a href={`tel:${institution.phone}`}><FaPhoneAlt size={20} className='institutions-img-overlay-icon' style={{ marginLeft:'0rem' }} /></a>
                    <a href={`mailto:${institution.email}`}><FaEnvelope size={20} className='institutions-img-overlay-icon' style={{ marginLeft:'1.5rem' }} /></a>
                    <Link to={institution.location}><MdLocationOn size={20} className='institutions-img-overlay-icon' style={{ marginLeft:'1.5em' }} /></Link>
                </div>
            </div>
        ))}
    </div>
  )
}

export default HomeInstitutions
