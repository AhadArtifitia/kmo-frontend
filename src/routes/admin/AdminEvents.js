import React from 'react'
import EventList from '../../components/adminEventPage/EventList'
import EventSearch from '../../components/adminEventPage/EventSearch'
import AdminNav from '../../components/AdminNav'
import SideNav from '../../components/SideNav'

const AdminEvents = () => {
  return (
    <div>
      <AdminNav />
      <SideNav />
      <EventSearch />
      <EventList />
    </div>
  )
}

export default AdminEvents
