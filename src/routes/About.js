import React from 'react'
import Hero from '../components/aboutPage/Hero.js'
import Nav from '../components/Nav.js'
import Mentors from '../components/aboutPage/Mentors.js'
import Vision from '../components/aboutPage/Vision.js'
import Values from '../components/aboutPage/Values.js'
import History from '../components/aboutPage/History.js'
import Institu from '../components/aboutPage/Institu.js'
import Objectives from '../components/aboutPage/Objectives.js'
import Footer from '../components/Footer.js'

const About = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Mentors />
      <Vision />
      <Values />
      <History />
      <Institu />
      <Objectives />
      <Footer />
    </div>
  )
}

export default About
