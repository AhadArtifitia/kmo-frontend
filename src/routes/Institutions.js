import React from 'react'
import InstHero from '../components/institutionPage/InstHero.js'
import Orphanage from '../components/institutionPage/Orphanage.js'
import Search from '../components/institutionPage/Search.js'
import Nav from '../components/Nav.js'
import Departments from '../components/institutionPage/Departments.js'
import School from '../components/institutionPage/School.js'
import DepartmentsSchool from '../components/institutionPage/DepartmentsSchool.js'
import College from '../components/institutionPage/College.js'
import DepartmentsCollege from '../components/institutionPage/DepartmentsCollege.js'
import Footer from '../components/Footer.js'
import Blank from '../components/institutionPage/Blank.js'

const Institutions = () => {
  return (
    <div>
      <Nav />
      <InstHero />
      <Search />
      <Orphanage />
      <Departments />
      <School />
      <DepartmentsSchool />
      <College />
      <DepartmentsCollege />
      <Blank />
      <Footer />
    </div>
  )
}

export default Institutions
