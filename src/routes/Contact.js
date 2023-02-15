import React from 'react'
import ContactHero from '../components/contactusPage/ContactHero'
import Message from '../components/contactusPage/Message'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Contact = () => {
  return (
    <div>
      <Nav />
      <ContactHero />
      <Message />
      <Footer />
    </div>
  )
}

export default Contact
