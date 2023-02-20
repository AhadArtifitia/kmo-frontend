import React from 'react'
import CareerList from '../../components/adminCareerPage/CareerList'
import CareerSearch from '../../components/adminCareerPage/CareerSearch'
import AdminNav from '../../components/AdminNav'
import SideNav from '../../components/SideNav'

const AdminCareer = () => {
  return (
    <div>
        <AdminNav />
        <SideNav />
        <CareerSearch />
        <CareerList />
    </div>
  )
}

export default AdminCareer
