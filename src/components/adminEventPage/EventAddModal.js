import './EventAddModalStyles.css'
import React from 'react'

const EventAddModal = ({setAddEventModal, events, setEvents}) => {
    const token = localStorage.getItem('token')
    
    const [formData, setFormData] = React.useState({
        title: '',
        organizer: '',
        type: '',
        category: '',
        description: '',
        location: '',
        datetime: '',
        image: null,
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleImageChange = (e) => {
        setFormData({
          ...formData,
          image: e.target.files[0],
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const data = new FormData();
        data.append("title", formData.title);
        data.append("organizer", formData.organizer);
        data.append("type", formData.type);
        data.append("category", formData.category);
        data.append("description", formData.description);
        data.append("location", formData.location);
        data.append("datetime", formData.datetime);
        data.append("image", formData.image);

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        fetch('https://backend.kmokoduvally.com/api/admin/event', {  
          method: 'POST',
          headers,
          body: data, 
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // update existing table with new data
            setEvents([...events, formData]);
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
                        <input className='modal-body-from-input' type="text" name="title" onChange={handleChange} required />
                    </label>
                    <label className='modal-body-from-label'>
                        Organizer:
                        <input className='modal-body-from-input' type="text" name="organizer" onChange={handleChange} required />
                    </label>
                    <label className='modal-body-from-label'>
                        Type:
                        <input className='modal-body-from-input' type="text" name="type" onChange={handleChange} required />
                    </label>
                    <label className='modal-body-from-label'>
                        Category:
                        <input className='modal-body-from-input' type="text" name="category" onChange={handleChange} required />
                    </label>
                    <label className='modal-body-from-label'>
                        Description:
                        <textarea className='modal-body-from-input' rows='3' type="text" name="description" onChange={handleChange} required />
                    </label>
                    <label className='modal-body-from-label'>
                        Location:
                        <input className='modal-body-from-input' type="text" name="location" onChange={handleChange} required />
                    </label>
                    <label className='modal-body-from-label'>
                        Datetime:
                        <input className='modal-body-from-input' type="text" name="datetime" onChange={handleChange} required />
                    </label>
                    <label className='modal-body-from-label'>
                        Image:
                        <input className='modal-body-from-input' type="file" name="image" onChange={handleImageChange} accept="image/*" required />
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
