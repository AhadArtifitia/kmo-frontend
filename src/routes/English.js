import React from 'react'
import CourseHero from '../components/coursesPage/CourseHero'
import EnglishDetails from '../components/englishPage/EnglishDetails'
import EnglishHeader from '../components/englishPage/EnglishHeader'
import HomeFooter from '../components/Footer'
import Nav from '../components/Nav'

const English = () => {
  return (
    <div>
      <Nav />
      <CourseHero />
      <EnglishHeader />
      <EnglishDetails />
      <HomeFooter />
    </div>
  )
}

export default English
