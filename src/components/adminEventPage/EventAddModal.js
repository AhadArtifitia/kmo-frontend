import './EventAddModalStyles.css'
import React from 'react'

const EventAddModal = ({setAddEventModal, events, setEvents}) => {
    const token = localStorage.getItem('token')
    
    const [formData, setFormData] = React.useState({
        title: '',
        organizer: '',
        type: '',
        category: '',
        location: '',
        datetime: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        fetch('https://backend.kmokoduvally.com/api/admin/event', {
          method: 'POST',
          headers: { 
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json' 
        },
          body: JSON.stringify(formData)
        })
        .then((res) => {
            setEvents([...events, formData]);
        })
        .then((res)=> {
            console.log(res)
            if(res?.token){
                localStorage.setItem('token',res.token)
            }
        })
        .catch(error => console.error(error));

        setAddEventModal(false)
    };

    function popModal() {
        setAddEventModal(false)
    }

  return (
    <div className='modalBackground'>
        <div className='event-modalContainer'>
            {/* <div className='titleCloseBtn'>
                <button className='titleClose-btn' onClick={ closeModal }>X</button>
            </div> */}
            <div className='modal-title'>
                <h3>Add Event</h3>
            </div>
            <div className='modal-body'>
                <form onSubmit={handleSubmit} className='modal-body-from'>
                    <label className='modal-body-from-label'>
                        Title:
                        <input className='modal-body-from-input' type="text" name="title" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Organizer:
                        <input className='modal-body-from-input' type="text" name="organizer" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Type:
                        <input className='modal-body-from-input' type="text" name="type" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Category:
                        <input className='modal-body-from-input' type="text" name="category" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Location:
                        <input className='modal-body-from-input' type="text" name="location" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Datetime:
                        <input className='modal-body-from-input' type="text" name="datetime" onChange={handleChange} />
                    </label>
                    <div className='modal-footer'>
                        <button type="submit" className='modalFooter-btn' id='cancelBtn' onClick={popModal} >Cancel</button>
                        <button type="submit" className='modalFooter-btn'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EventAddModal
