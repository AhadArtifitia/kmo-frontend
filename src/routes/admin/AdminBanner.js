import React from 'react'
import BannerImages from '../../components/adminBannerPage/BannerImages'
import BannerSearch from '../../components/adminBannerPage/BannerSearch'
import AdminNav from '../../components/AdminNav'
import SideNav from '../../components/SideNav'

const AdminBanner = () => {
  return (
    <div>
      <AdminNav />
      <SideNav />
      <BannerSearch />
      <BannerImages />
    </div>
  )
}

export default AdminBanner
