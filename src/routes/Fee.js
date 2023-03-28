import React from 'react'
import FeeHero from '../components/feePage/FeeHero'
import FeeStructure from '../components/feePage/FeeStructure'
import SearchFee from '../components/feePage/SearchFee'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Fee = () => {
  const [courseSearch, setCourseSearch] = React.useState('')
  return (
    <div>
      <Nav />
      <FeeHero />
      <SearchFee courseSearch={courseSearch} setCourseSearch={setCourseSearch} />
      <FeeStructure courseSearch={courseSearch} />
      <Footer />
    </div>
  )
}

export default Fee
