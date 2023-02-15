import React from 'react'
import AdministrationMembers from '../components/administrationPage/AdministrationMembers'
import AdministrationHero from '../components/administrationPage/AdministrationHero'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Administration = () => {
  return (
    <div>
      <Nav />
      <AdministrationHero />
      <AdministrationMembers />
      <Footer />
    </div>
  )
}

export default Administration
