import React from 'react'
import BannerAddModal from '../../components/adminBannerPage/BannerAddModal'
import BannerImages from '../../components/adminBannerPage/BannerImages'
import BannerSearch from '../../components/adminBannerPage/BannerSearch'
import AdminNav from '../../components/AdminNav'
import SideNav from '../../components/SideNav'

const AdminBanner = () => {
  const [banners, setBanners] = React.useState([])
  const [addBannerModal, setAddBannerModal] = React.useState(false)
  const token = localStorage.getItem('token')

  React.useEffect(()=>{
    fetchAllBanner()
  },[])

  const fetchAllBanner=async()=>{
    await fetch('https://backend.kmokoduvally.com/api/admin/banner',{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'image/png'
        },
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res);
      if(Array.isArray(res)&&res?.length>0){
        setBanners(res)
      }
    })
  }

  return (
    <div>
      <AdminNav />
      <SideNav />
      <BannerSearch setAddBannerModal={setAddBannerModal} />
      <BannerImages banners={banners} setBanners={setBanners} />
      {addBannerModal && <BannerAddModal setAddBannerModal={setAddBannerModal} />}
    </div>
  )
}

export default AdminBanner
