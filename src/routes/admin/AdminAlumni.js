import React from 'react'
import AlumniAddModal from '../../components/adminAlumniPage/AlumniAddModal'
import AlumniHeader from '../../components/adminAlumniPage/AlumniHeader'
import AlumniList from '../../components/adminAlumniPage/AlumniList'
import AlumniUpdateModal from '../../components/adminAlumniPage/AlumniUpdateModal'
import AdminNav from '../../components/AdminNav'
import SideNav from '../../components/SideNav'

const AdminAlumni = () => {
  const [alumnis, setAlumnis] = React.useState([])
  const [addAlumniModal, setAddAlumniModal] = React.useState(false)
  const [defaultValues, setDefaultValues] = React.useState({});
  const [formValues, setFormValues] = React.useState(defaultValues);
  const [updateAlumniModal, setUpdateAlumniModal] = React.useState(false)
  const token = localStorage.getItem('token')

  React.useEffect(()=>{
    fetchAllAlumni()
  },[])

  const fetchAllAlumni=async()=>{
    await fetch('https://backend.kmokoduvally.com/api/admin/alumni',{  
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(Array.isArray(res)&&res?.length>0){
        setAlumnis(res)
      }
    })
  }

  return (
    <div>
        <AdminNav />
        <SideNav />
        <AlumniHeader setAddAlumniModal={setAddAlumniModal} />
        <AlumniList alumnis={alumnis} setUpdateAlumniModal={setUpdateAlumniModal} setAlumnis={setAlumnis} setFormValues={setFormValues} setDefaultValues={setDefaultValues} />
        {addAlumniModal &&  <AlumniAddModal setAddAlumniModal={setAddAlumniModal} alumnis={alumnis} setAlumnis={setAlumnis} />}
        {updateAlumniModal && <AlumniUpdateModal setUpdateAlumniModal={setUpdateAlumniModal} formValues={formValues} setFormValues={setFormValues} setAlumnis={setAlumnis} defaultValues={defaultValues} setDefaultValues={setDefaultValues} />}
    </div>
  )
}

export default AdminAlumni
