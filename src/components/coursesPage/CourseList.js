import './CourseListStyles.css'
import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const CourseList = ({courseSearch}) => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

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
    <div className='course-list'>
        {/* <div className={ click ? 'list-section active' : 'list-section' }>
            <input type='submit' name='all' className='course-btn' value='ALL' />
            <input type='submit' name='hs' className='course-btn' value='HS' />
            <input type='submit' name='hss' className='course-btn' value='HSS' />
            <input type='submit' name='ba' className='course-btn' value='B.A' />
            <input type='submit' name='bcom' className='course-btn' value='B.COM' />
            <input type='submit' name='bba' className='course-btn' value='BBA' />
            <input type='submit' name='bsc' className='course-btn' value='B.SC' />
            <input type='submit' name='bed' className='course-btn' value='B.Ed' />
        </div>
        <div className='list-section-hamburger' onClick={ handleClick }>
            {
              click ? 
                (<FaTimes size={20} style={{ color:'#fff' }} />) : (<FaBars size={20} style={{ color:`var(--theemColor)` }} />)
            }
        </div> */}
        {filteredCourses.map((course, index)=> (
          <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">{course.name}</a>
          </div>
        ))}
          
    </div>
  )
}

export default CourseList
