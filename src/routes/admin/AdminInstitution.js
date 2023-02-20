import React from 'react'
import InstitutionList from '../../components/adminInstitutionPage/InstitutionList'
import InstitutionSearch from '../../components/adminInstitutionPage/InstitutionSearch'
import AdminNav from '../../components/AdminNav'
import SideNav from '../../components/SideNav'

const AdminInstitution = () => {
  return (
    <div>
      <SideNav />
      <AdminNav />
      <InstitutionSearch />
      <InstitutionList />
    </div>
  )
}

export default AdminInstitution
