import './CourseListStyles.css'
import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const CourseList = ({courseSearch}) => {

  const [level, setLevel] = React.useState('all');

  function handleCategoryChange(event) {
    setLevel(event.target.value)
  }

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
        <div className={ click ? 'list-section active' : 'list-section' }>
            <label><input type='radio' name='level' checked={level === 'all'} onChange={handleCategoryChange} className='list-section-radio' value='all' />All</label>
            <label><input type='radio' name='level' checked={level === 'masters'} onChange={handleCategoryChange} className='list-section-radio' value='masters' />Masters</label>
            <label><input type='radio' name='level' checked={level === 'bachelors'} onChange={handleCategoryChange} className='list-section-radio' value='bachelors' />Bachelors</label>
            <label><input type='radio' name='level' checked={level === 'hss'} onChange={handleCategoryChange} className='list-section-radio' value='hss' />HSS</label>
        </div>
        <div className='list-section-hamburger' onClick={ handleClick }>
            {
              click ? 
                (<FaTimes size={20} style={{ color:'#fff' }} />) : (<FaBars size={20} style={{ color:`var(--theemColor)` }} />)
            }
        </div>
        {filteredCourses.map((course, index)=> {
          if (level === 'all' || course.level === level) {
            return (
              <div class="list-group">
                <a href="/courses/english" class="list-group-item list-group-item-action">{course.name}</a>
              </div>
            )
          } else {
            return null;
          }
        })}
    </div>
  )
}

export default CourseList
