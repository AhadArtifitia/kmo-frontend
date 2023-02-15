import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import StudentsCornerBody from '../components/studentsCornerPage/StudentsCornerBody'
import StudentsCornerHero from '../components/studentsCornerPage/StudentsCornerHero'

const StudentsCorner = () => {
  return (
    <div>
        <Nav />
        <StudentsCornerHero />
        <StudentsCornerBody />
        <Footer />
    </div>
  )
}

export default StudentsCorner
