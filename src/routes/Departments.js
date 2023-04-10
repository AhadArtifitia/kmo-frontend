import React from 'react'
import HomeFooter from '../components/Footer'
import Nav from '../components/Nav'
import Blank from '../components/institutionPage/Blank.js'
import Department from '../components/departmentPage/Department'

const Departments = () => {
  const [departments, setDepartments] = React.useState([])

  const token = localStorage.getItem('token')

  React.useEffect(()=>{
    fetchAllDepartments()
  },[])

  const fetchAllDepartments=async()=>{
    await fetch('https://backend.kmokoduvally.com/api/admin/department',{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(Array.isArray(res)&&res?.length>0){
        setDepartments(res)
      }
    })
  }

  return (
    <div>
        <Nav />
        <Department departments={departments} />
        <HomeFooter />
    </div>
  )
}

export default Departments
