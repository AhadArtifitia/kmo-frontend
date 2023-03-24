import React from 'react'
import Footer from '../components/Footer'
import CareerHero from '../components/careerPage/CareerHero'
import Oppertunities from '../components/careerPage/Oppertunities'
import SearchCareer from '../components/careerPage/SearchCareer'
import Nav from '../components/Nav'

const Career = () => {
  const [careerSearch, setCareerSearch] = React.useState('')
  return (
    <div>
      <Nav />
      <CareerHero />
      <SearchCareer careerSearch={careerSearch} setCareerSearch={setCareerSearch} />
      <Oppertunities careerSearch={careerSearch} />
      <Footer />
    </div>
  )
}

export default Career
