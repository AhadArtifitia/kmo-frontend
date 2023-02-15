import React from 'react'
import CourseHero from '../components/coursesPage/CourseHero'
import CourseList from '../components/coursesPage/CourseList'
import SearchCourses from '../components/coursesPage/SearchCourses'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Courses = () => {
  return (
    <div>
      <Nav />
      <CourseHero />
      <SearchCourses />
      <CourseList />
      <Footer />
    </div>
  )
}

export default Courses
