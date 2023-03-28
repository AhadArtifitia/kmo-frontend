import './OppertunitiesStyles.css'
import React from 'react'

const Oppertunities = ({careerSearch}) => {

  const [careers, setCareers] = React.useState([])
  const token = localStorage.getItem('token')

  React.useEffect(()=>{
    fetchAllCareer()
  },[])

  const fetchAllCareer=async()=>{
    await fetch('https://backend.kmokoduvally.com/api/admin/career',{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(Array.isArray(res)&&res?.length>0){
        setCareers(res)
      }
    })
  }

  const filteredCourses = careers.filter(item => 
    item.level.toLowerCase().includes(careerSearch.toLowerCase()) 
  );

  return (
    <div className='oppertunities'>
        <p>Ready for your career in KMO Groups? You are just a click away now.</p>
        {filteredCourses.map((career,index)=>(
          <div class="list-group p-1">
            <a href="#" class="list-group-item list-group-item-secondary">{career.level}</a>
          </div>
        ))}
    </div>
  )
}

export default Oppertunities
