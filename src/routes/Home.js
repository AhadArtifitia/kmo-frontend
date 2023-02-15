import React from 'react'
import HomeAcademic from '../components/homePage/HomeAcademic'
import HomeEvents from '../components/homePage/HomeEvents'
import HomeFooter from '../components/Footer'
import HomeHero from '../components/homePage/HomeHero'
import HomeInstitutions from '../components/homePage/HomeInstitutions'
import HomeLaboratory from '../components/homePage/HomeLaboratory'
import HomeNav from '../components/homePage/HomeNav'
import HomeStudents from '../components/homePage/HomeStudents'

const First = () => {
  return (
    <div>
        <HomeHero />
        <HomeNav />
        <HomeInstitutions />
        <HomeAcademic />
        <HomeLaboratory />
        <HomeEvents />
        <HomeStudents />
        <HomeFooter />
    </div>
  )
}

export default First
