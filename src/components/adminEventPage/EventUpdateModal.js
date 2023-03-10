import './EventUpdateModalStyles.css'
import React from 'react'

const EventUpdateModal = ({setUpdateEventModal, formValues, setFormValues, setEvents, defaultValues, setDefaultValues}) => {
  const token = localStorage.getItem('token')

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({
          ...formValues,
          [name]: value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8000/api/admin/event/${defaultValues._id}`, {
          method: 'PUT',
          headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
            },
          body: JSON.stringify(formValues)
        })
        .then(response => {
            // update table data
            setEvents(prevState => {
              const updatedData = prevState.map(row => {
                if (row._id === defaultValues._id) {
                  // update the edited row
                  return { ...row, ...formValues };
                } else {
                  return row;
                }
              });
              return updatedData;
            });
        })
        .then(data => setDefaultValues(data))
        .catch(error => console.error(error));

        setUpdateEventModal(false)
    }

    function popModal() {
      setUpdateEventModal(false)
    }
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            {/* <div className='titleCloseBtn'>
                <button className='titleClose-btn' onClick={ closeModal }>X</button>
            </div> */}
            <div className='modal-title'>
                <h3>Update Event</h3>
            </div>
            <div className='modal-body'>
                <form onSubmit={handleSubmit} className='modal-body-from'>
                    <label htmlFor="name" className='modal-body-from-label'>
                        Title:
                        <input className='modal-body-from-input' type="text" id="title" name="title" value={formValues.title} onChange={handleChange} required />
                    </label>
                    <label htmlFor="hod" className='modal-body-from-label'>
                        Organizer:
                        <input className='modal-body-from-input' type="text" id="organizer" name="organizer" value={formValues.organizer} onChange={handleChange} />
                    </label>
                    <label htmlFor="courses" className='modal-body-from-label'>
                        Type:
                        <input className='modal-body-from-input' type="text" id="type" name="type" value={formValues.type} onChange={handleChange} />
                    </label>
                    <label htmlFor="capacity" className='modal-body-from-label'>
                        Category:
                        <input className='modal-body-from-input' type="text" id="category" name="category" value={formValues.category} onChange={handleChange} />
                    </label>
                    <label htmlFor="capacity" className='modal-body-from-label'>
                        Location:
                        <input className='modal-body-from-input' type="text" id="location" name="location" value={formValues.location} onChange={handleChange} />
                    </label>
                    <label htmlFor="capacity" className='modal-body-from-label'>
                        Datetime:
                        <input className='modal-body-from-input' type="text" id="datetime" name="datetime" value={formValues.datetime} onChange={handleChange} />
                    </label>
                    <div className='modal-footer'>
                        <button type="reset" className='modalFooter-btn' id='cancelBtn' onClick={ popModal } >Cancel</button>
                        <button type="submit" className='modalFooter-btn'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EventUpdateModal
