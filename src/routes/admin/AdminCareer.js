import React from 'react'
import CareerAddModal from '../../components/adminCareerPage/CareerAddModal'
import CareerList from '../../components/adminCareerPage/CareerList'
import CareerSearch from '../../components/adminCareerPage/CareerSearch'
import CareerUpdateModal from '../../components/adminCareerPage/CareerUpdateModal'
import AdminNav from '../../components/AdminNav'
import SideNav from '../../components/SideNav'

const AdminCareer = () => {
  const [careers, setCareers] = React.useState([])
  const [addCareerModal, setAddCareerModal] = React.useState(false)
  const [defaultValues, setDefaultValues] = React.useState({});
  const [formValues, setFormValues] = React.useState(defaultValues);
  const [updateCareerModal, setUpdateCareerModal] = React.useState(false)
  const token = localStorage.getItem('token')

  React.useEffect(()=>{
    fetchAllCareer()
  },[])

  const fetchAllCareer=async()=>{
    await fetch('https://backend.kmokoduvally.com/api/admin/career',{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(Array.isArray(res)&&res?.length>0){
        setCareers(res)
      }
    })
  }

  return (
    <div>
        <AdminNav />
        <SideNav />
        <CareerSearch setAddCareerModal={setAddCareerModal} />
        <CareerList careers={careers} setUpdateCareerModal={setUpdateCareerModal} setCareers={setCareers} setFormValues={setFormValues} setDefaultValues={setDefaultValues} />
        {addCareerModal && <CareerAddModal careers={careers} setCareers={setCareers} setAddCareerModal={setAddCareerModal} />}
        {updateCareerModal && <CareerUpdateModal setUpdateCareerModal={setUpdateCareerModal} formValues={formValues} setFormValues={setFormValues} setCareers={setCareers} defaultValues={defaultValues} setDefaultValues={setDefaultValues} />}
    </div>
  )
}

export default AdminCareer
