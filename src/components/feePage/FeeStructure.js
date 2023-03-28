import './FeeStructureStyles.css'
import React from 'react'

const FeeStructure = ({courseSearch}) => {
    const [courses, setCourses] = React.useState([])
    const token = localStorage.getItem('token')

    React.useEffect(()=>{
        fetchAllCourse()
    },[])

    const fetchAllCourse=async()=>{
        await fetch('https://backend.kmokoduvally.com/api/admin/course',{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
        .then((res)=>res.json())
        .then((res)=>{
        if(Array.isArray(res)&&res?.length>0){
            setCourses(res)
        }
        })
    }

    const filteredCourses = courses.filter(item => 
        item.name.toLowerCase().includes(courseSearch.toLowerCase()) 
      );

  return (
    <div className='fee-structure'>
        <div className='fee-structure-header'>
            <h2>Course</h2>
            <h2>Duration</h2>
            <h2>Fees</h2>
        </div>
        <hr />
        <div className='fee-structure-body'>
            {filteredCourses.map((course, index)=> (
                <>
                    <div className='fee-body-row'>
                        <p>{course.name}</p>
                        <p>{course.duration}</p>
                        <p>{course.fees}</p>
                    </div>
                    <hr />
                </>
                
            ))}
            
            
            <br />
        </div>
    </div>
  )
}

export default FeeStructure
