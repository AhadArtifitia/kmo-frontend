import React from 'react'
import AlumniHero from '../components/alumniPage/AlumniHero'
import Activity from '../components/alumniPage/Activity'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Alumni = () => {
  return (
    <div>
        <Nav />
        <AlumniHero />
        <Activity />
        <Footer />
    </div>
  )
}

export default Alumni
