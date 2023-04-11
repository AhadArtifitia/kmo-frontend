import './ActivityStyles.css'
// import img from '../../images/alumniImg.png'
import React from 'react'

const Activity = () => {
  const [activities, setActivities] = React.useState([])
  const token = localStorage.getItem('token')

  React.useEffect(()=>{
    fetchAllCareer()
  },[])

  const fetchAllCareer=async()=>{
    await fetch('https://backend.kmokoduvally.com/api/admin/alumni',{  
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(Array.isArray(res)&&res?.length>0){
        setActivities(res)
      }
    })
  }

  return (
    
    <div>
    {activities.map((activity,index)=>(
        <div className='activity'>
          <div className='activity-content'>
            <h2>{activity.name}</h2>
            <p>{activity.description}</p>
          </div>
          <div className='activity-img'>
            <img src={activity.imageUrl} alt='alumni image' />
          </div>
        </div>
    ))}
    </div>

  )
}

export default Activity
