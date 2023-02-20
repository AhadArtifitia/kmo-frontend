import React from 'react'
import AdminNav from '../../components/AdminNav'
import SideNav from '../../components/SideNav'
import CourseSearch from '../../components/adminCoursePage/CourseSearch'
import CourseList from '../../components/adminCoursePage/CourseList'

const AdminCourse = () => {
  return (
    <div>
      <SideNav />
      <AdminNav />
      <CourseSearch />
      <CourseList />
    </div>
  )
}

export default AdminCourse
