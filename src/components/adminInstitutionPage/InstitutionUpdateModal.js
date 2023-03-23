import './InstitutionUpdateModalStyles.css'
import React from 'react'

const InstitutionUpdateModal = ({setUpdateInstModal, defaultValues, setDefaultValues, formValues, setFormValues, setObjects}) => {
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
        fetch(`https://backend.kmokoduvally.com/api/admin/institution/${defaultValues._id}`, {
          method: 'PUT',
          headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
            },
          body: JSON.stringify(formValues)
        })
        .then(response => {
            // update table data
            setObjects(prevState => {
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

        setUpdateInstModal(false)
    }

    function closeModal() {
        setUpdateInstModal(false)
    }

  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            {/* <div className='titleCloseBtn'>
                <button className='titleClose-btn' onClick={ closeModal }>X</button>
            </div> */}
            <div className='modal-title'>
                <h3>Update Institute</h3>
            </div>
            <div className='modal-body'>
                <form onSubmit={handleSubmit} className='modal-body-from'>
                    <label htmlFor="name" className='modal-body-from-label'>
                        Name:
                        <input className='modal-body-from-input' type="text" id="name" name="name" value={formValues.name} onChange={handleChange} required />
                    </label>
                    <label htmlFor="phone" className='modal-body-from-label'>
                        Phone:
                        <input className='modal-body-from-input' type="text" id="phone" name="phone" value={formValues.phone} onChange={handleChange} />
                    </label>
                    <label htmlFor="email" className='modal-body-from-label'>
                        Email:
                        <input className='modal-body-from-input' type="email" id="email" name="email" value={formValues.email} onChange={handleChange} />
                    </label>
                    <label htmlFor="location" className='modal-body-from-label'>
                        Location:
                        <input className='modal-body-from-input' type="text" id="location" name="location" value={formValues.location} onChange={handleChange} />
                    </label>
                    <div className='modal-footer'>
                        <button type="reset" className='modalFooter-btn' id='cancelBtn' onClick={ closeModal } >Cancel</button>
                        <button type="submit" className='modalFooter-btn'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default InstitutionUpdateModal
