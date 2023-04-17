import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import './Error.css'

const Error = () => {
  return (
    <>
    <Nav />
    <div className='error'>
      <h1>404 | This page could not be found!</h1>
    </div>
    <Footer />
    </>
  )
}

export default Error
