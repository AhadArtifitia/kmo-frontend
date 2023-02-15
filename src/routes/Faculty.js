import React from 'react'
import FacultiesHero from '../components/facultiesPage/FacultiesHero'
import FacultyHeader from '../components/facultiesPage/FacultyHeader'
import FacultyMembers from '../components/facultiesPage/FacultyMembers'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Faculty = () => {
  return (
    <div>
        <Nav />
        <FacultiesHero />
        <FacultyHeader />
        <FacultyMembers />
        <Footer />
    </div>
  )
}

export default Faculty
