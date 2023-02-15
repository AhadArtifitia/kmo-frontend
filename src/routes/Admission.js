import React from 'react'
import AdmissionBody from '../components/admissionPage/AdmissionBody'
import AdmissionHero from '../components/admissionPage/AdmissionHero'
import SearchAdmission from '../components/admissionPage/SearchAdmission'
import Footer from '../components/Footer'
import Blank from '../components/institutionPage/Blank'
import Nav from '../components/Nav'

const Admission = () => {
  return (
    <div>
        <Nav />
        <AdmissionHero />
        <SearchAdmission />
        <AdmissionBody />
        <Blank />
        <Footer />
    </div>
  )
}

export default Admission
