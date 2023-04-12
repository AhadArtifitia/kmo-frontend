import React from 'react'
import DepartmentAddModal from '../../components/adminDepartmentPage/DepartmentAddModal'
import DepartmentList from '../../components/adminDepartmentPage/DepartmentList'
import DepartmentSearch from '../../components/adminDepartmentPage/DepartmentSearch'
import DepartmentUpdateModal from '../../components/adminDepartmentPage/DepartmentUpdateModal'
import AdminNav from '../../components/AdminNav'
import SideNav from '../../components/SideNav'

const AdminDepartments = () => {
  const [departments, setDepartments] = React.useState([])
  const [addDepModal, setAddDepModal] = React.useState(false)
  const [defaultValues, setDefaultValues] = React.useState({});
  const [formValues, setFormValues] = React.useState(defaultValues);
  const [updateDepModal, setUpdateDepModal] = React.useState(false)
  const [depSearch, setDepSearch] = React.useState('')
  const token = localStorage.getItem('token')

  React.useEffect(()=>{
    fetchAllDepartment()
  },[])

  const fetchAllDepartment=async()=>{
    await fetch('https://backend.kmokoduvally.com/api/admin/department',{ 
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log({res})
      if(Array.isArray(res)&&res?.length>0){
        setDepartments(res)
      }
    })
  }

  return (
    <div>
      <AdminNav />
      <SideNav />
      <DepartmentSearch setAddDepModal={setAddDepModal} depSearch={depSearch} setDepSearch={setDepSearch} />
      <DepartmentList departments={departments} depSearch={depSearch} setUpdateDepModal={setUpdateDepModal} setDefaultValues={setDefaultValues} setFormValues={setFormValues} setDepartments={setDepartments} />
      {addDepModal && <DepartmentAddModal setAddDepModal={setAddDepModal} departments={departments} setDepartments={setDepartments} /> }
      {updateDepModal && <DepartmentUpdateModal setUpdateDepModal={setUpdateDepModal} formValues={formValues} setFormValues={setFormValues} setDepartments={setDepartments} defaultValues={defaultValues} setDefaultValues={setDefaultValues} />}
    </div>
  )
}

export default AdminDepartments
