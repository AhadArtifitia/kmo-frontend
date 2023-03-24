import React from 'react'
import CourseHero from '../components/coursesPage/CourseHero'
import CourseList from '../components/coursesPage/CourseList'
import SearchCourses from '../components/coursesPage/SearchCourses'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Courses = () => {
  const [courseSearch, setCourseSearch] = React.useState('')
  return (
    <div>
      <Nav />
      <CourseHero />
      <SearchCourses courseSearch={courseSearch} setCourseSearch={setCourseSearch} />
      <CourseList courseSearch={courseSearch} />
      <Footer />
    </div>
  )
}

export default Courses
