import React from 'react'
import DepartmentList from '../../components/adminDepartmentPage/DepartmentList'
import DepartmentSearch from '../../components/adminDepartmentPage/DepartmentSearch'
import AdminNav from '../../components/AdminNav'
import SideNav from '../../components/SideNav'

const AdminDepartments = () => {
  return (
    <div>
      <AdminNav />
      <SideNav />
      <DepartmentSearch />
      <DepartmentList />
    </div>
  )
}

export default AdminDepartments
