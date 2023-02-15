import React from 'react'
import FeeHero from '../components/feePage/FeeHero'
import FeeStructure from '../components/feePage/FeeStructure'
import SearchFee from '../components/feePage/SearchFee'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Fee = () => {
  return (
    <div>
      <Nav />
      <FeeHero />
      <SearchFee />
      <FeeStructure />
      <Footer />
    </div>
  )
}

export default Fee
