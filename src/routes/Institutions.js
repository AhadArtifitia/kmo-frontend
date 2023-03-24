import React from 'react'
import InstHero from '../components/institutionPage/InstHero.js'
import Search from '../components/institutionPage/Search.js'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer.js'
import Blank from '../components/institutionPage/Blank.js'
import InstitutionsList from '../components/institutionPage/InstitutionsList.js'

const Institutions = () => {
  const [institutions, setInstitutions] = React.useState([])
  const [instSearch, setInstSearch] = React.useState('')

  const token = localStorage.getItem('token')

  React.useEffect(()=>{
    fetchAllInstitutions()
  },[])

  const fetchAllInstitutions=async()=>{
    await fetch('https://backend.kmokoduvally.com/api/admin/institution',{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(Array.isArray(res)&&res?.length>0){
        setInstitutions(res)
      }
    })
  }

  return (
    <div>
      <Nav />
      <InstHero />
      <Search instSearch={instSearch} setInstSearch={setInstSearch} />
      <InstitutionsList institutions={institutions} instSearch={instSearch} />
      {/* <Blank /> */}
      <Footer />
    </div>
  )
}

export default Institutions
