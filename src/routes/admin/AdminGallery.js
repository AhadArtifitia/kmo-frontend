import React from 'react'
import GalleryAddModal from '../../components/adminGalleryPage/GalleryAddModal'
import GalleryFiles from '../../components/adminGalleryPage/GalleryFiles'
import GalleryHeader from '../../components/adminGalleryPage/GalleryHeader'
import AdminNav from '../../components/AdminNav'
import SideNav from '../../components/SideNav'

const AdminGallery = () => {
    const [gallerys, setGallerys] = React.useState([])
    const [addGalleryModal, setAddGalleryModal] = React.useState(false)
    const [defaultValues, setDefaultValues] = React.useState({});
    const [formValues, setFormValues] = React.useState(defaultValues);
    const token = localStorage.getItem('token')

    React.useEffect(()=>{
    fetchAllGallery()
    },[])

    const fetchAllGallery=async()=>{
    await fetch('https://backend.kmokoduvally.com/api/admin/gallery',{  
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(Array.isArray(res)&&res?.length>0){
            setGallerys(res)
        }
    })
    }

  return (
    <div>
        <AdminNav />
        <SideNav />
        <GalleryHeader setAddGalleryModal={setAddGalleryModal} />
        <GalleryFiles gallerys={gallerys} setGallerys={setGallerys}  />
        {addGalleryModal && <GalleryAddModal setAddGalleryModal={setAddGalleryModal} gallerys={gallerys} setGallerys={setGallerys} />}

    </div>
  )
}

export default AdminGallery
