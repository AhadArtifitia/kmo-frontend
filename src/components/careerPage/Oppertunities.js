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
        <h5>Ready for your career in KMO Groups? Forward your CV on <a href={`mailto:info.kmokoduvally@gmail.com`}>info.kmokoduvally@gmail.com</a>.</h5>
  
        <table className='oppertunities-table'>
          <tr className='oppertunities-table-tr'>
            <th>OPENINGS</th>
            <th>LISTED DATE</th>
          </tr>
        
        {filteredCourses.map((career,index)=>(   
          <tr className='oppertunities-table-tr'>
            <td>{career.level}</td>
            <td>{career.updated}</td>
          </tr>   
          // <div class="list-group p-1">
          //   <a href="#" class="list-group-item list-group-item-secondary">{career.level}</a>
          // </div>
        ))}

        </table>
    </div>
  )
}

export default Oppertunities
