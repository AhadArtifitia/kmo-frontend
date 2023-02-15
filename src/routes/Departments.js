import React from 'react'
import HomeFooter from '../components/Footer'
import Nav from '../components/Nav'
import DepartmentsOrphanage from '../components/institutionPage/Departments.js'
import DepartmentsSchool from '../components/institutionPage/DepartmentsSchool.js'
import DepartmentsCollege from '../components/institutionPage/DepartmentsCollege.js'
import Blank from '../components/institutionPage/Blank.js'

const Departments = () => {
  return (
    <div>
        <Nav />
        <DepartmentsOrphanage />
        <Blank />
        <DepartmentsSchool />
        <Blank />
        <DepartmentsCollege />
        <Blank />
        <HomeFooter />
    </div>
  )
}

export default Departments
