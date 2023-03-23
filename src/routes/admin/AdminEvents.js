import React from 'react'
import EventAddModal from '../../components/adminEventPage/EventAddModal'
import EventList from '../../components/adminEventPage/EventList'
import EventSearch from '../../components/adminEventPage/EventSearch'
import EventUpdateModal from '../../components/adminEventPage/EventUpdateModal'
import AdminNav from '../../components/AdminNav'
import SideNav from '../../components/SideNav'

const AdminEvents = () => {
  const [events, setEvents] = React.useState([])
  const [addEventModal, setAddEventModal] = React.useState(false)
  const [defaultValues, setDefaultValues] = React.useState({});
  const [formValues, setFormValues] = React.useState(defaultValues);
  const [updateEventModal, setUpdateEventModal] = React.useState(false)
  const token = localStorage.getItem('token')

  React.useEffect(()=>{
    fetchAllEvent()
  },[])

  const fetchAllEvent=async()=>{
    await fetch('https://backend.kmokoduvally.com/api/admin/event',{
        method:'GET',
        headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(Array.isArray(res)&&res?.length>0){
        setEvents(res)
      }
    })
  }

  return (
    <div>
      <AdminNav />
      <SideNav />
      <EventSearch setAddEventModal={setAddEventModal} />
      <EventList events={events} setUpdateEventModal={setUpdateEventModal} setEvents={setEvents} setFormValues={setFormValues} setDefaultValues={setDefaultValues} />
      {addEventModal && <EventAddModal setAddEventModal={setAddEventModal} events={events} setEvents={setEvents} />}
      {updateEventModal && <EventUpdateModal setUpdateEventModal={setUpdateEventModal} formValues={formValues} setFormValues={setFormValues} setEvents={setEvents} defaultValues={defaultValues} setDefaultValues={setDefaultValues} /> }
    </div>
  )
}

export default AdminEvents
