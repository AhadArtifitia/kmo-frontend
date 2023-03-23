import React from 'react'
import InstitutionList from '../../components/adminInstitutionPage/InstitutionList'
import InstitutionSearch from '../../components/adminInstitutionPage/InstitutionSearch'
import AdminNav from '../../components/AdminNav'
import SideNav from '../../components/SideNav'
import InstitutionModal from '../../components/adminInstitutionPage/InstitutionAddModal'
import InstitutionUpdateModal from '../../components/adminInstitutionPage/InstitutionUpdateModal'

const AdminInstitution = () => {
  const [instModal, setInstModal] = React.useState(false)
  const [updateInstModal, setUpdateInstModal] = React.useState(false)
  const [defaultValues, setDefaultValues] = React.useState({});
  const [objects, setObjects] = React.useState([]);
  const [formValues, setFormValues] = React.useState(defaultValues);
  const [instSearch, setInstSearch] = React.useState('')
  const token = localStorage.getItem('token')

  React.useEffect(()=>{
    fetchAllInstitution()
  },[])

  const fetchAllInstitution=async()=>{
    await fetch('https://backend.kmokoduvally.com/api/admin/institution',{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    }).then((res)=>res.json()).then((res)=>{
        console.log({res})
        if(Array.isArray(res)&&res?.length>0){
            setObjects(res)
        }
    })
  }

  return (
    <div>
      <SideNav />
      <AdminNav />
      <InstitutionSearch setInstModal={setInstModal} instSearch={instSearch} setInstSearch={setInstSearch} />
      <InstitutionList setUpdateInstModal={setUpdateInstModal} instSearch={instSearch} setDefaultValues={setDefaultValues} objects={objects} setObjects={setObjects} setFormValues={setFormValues} />
      {instModal && <InstitutionModal setInstModal={setInstModal} setObjects={setObjects} objects={objects} />}
      {updateInstModal && <InstitutionUpdateModal setUpdateInstModal={setUpdateInstModal} defaultValues={defaultValues} setDefaultValues={setDefaultValues} formValues={formValues} setFormValues={setFormValues} setObjects={setObjects} />}
    </div>
  )
}

export default AdminInstitution
