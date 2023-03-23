import React from 'react'
import AdminNav from '../../components/AdminNav'
import SideNav from '../../components/SideNav'
import CourseSearch from '../../components/adminCoursePage/CourseSearch'
import CourseList from '../../components/adminCoursePage/CourseList'
import CourseAddModal from '../../components/adminCoursePage/CourseAddModal'
import CourseUpdateModal from '../../components/adminCoursePage/CourseUpdateModal'

const AdminCourse = () => {
  const [courses, setCourses] = React.useState([])
  const [addCourseModal, setAddCourseModal] = React.useState(false)
  const [defaultValues, setDefaultValues] = React.useState({});
  const [formValues, setFormValues] = React.useState(defaultValues);
  const [updateCourseModal, setUpdateCourseModal] = React.useState(false)
  const [courseSearch, setCourseSearch] = React.useState('')
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

  return (
    <div>
      <SideNav />
      <AdminNav />
      <CourseSearch setAddCourseModal={setAddCourseModal} courseSearch={courseSearch} setCourseSearch={setCourseSearch} />
      <CourseList courses={courses} courseSearch={courseSearch} setUpdateCourseModal={setUpdateCourseModal} setCourses={setCourses} setFormValues={setFormValues} setDefaultValues={setDefaultValues} />
      {addCourseModal && <CourseAddModal setAddCourseModal={setAddCourseModal} courses={courses} setCourses={setCourses} />}
      {updateCourseModal && <CourseUpdateModal setUpdateCourseModal={setUpdateCourseModal} formValues={formValues} setFormValues={setFormValues} setCourses={setCourses} defaultValues={defaultValues} setDefaultValues={setDefaultValues} />}
    </div>
  )
}

export default AdminCourse
