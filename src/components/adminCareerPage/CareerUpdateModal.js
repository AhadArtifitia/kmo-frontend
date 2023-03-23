import './CareerUpdateModalStyles.css'
import React from 'react'

const CareerUpdateModal = ({setUpdateCareerModal, formValues, setFormValues, setCareers, defaultValues, setDefaultValues}) => {
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
        fetch(`https://backend.kmokoduvally.com/api/admin/career/${defaultValues._id}`, {
          method: 'PUT',
          headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
            },
          body: JSON.stringify(formValues)
        })
        .then(response => {
            // update table data
            setCareers(prevState => {
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

        setUpdateCareerModal(false)
    }

    function popModal() {
        setUpdateCareerModal(false)
    }
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            {/* <div className='titleCloseBtn'>
                <button className='titleClose-btn' onClick={ closeModal }>X</button>
            </div> */}
            <div className='modal-title'>
                <h3>Update Career</h3>
            </div>
            <div className='modal-body'>
                <form onSubmit={handleSubmit} className='modal-body-from'>
                    <label htmlFor="name" className='modal-body-from-label'>
                        Department:
                        <input className='modal-body-from-input' type="text" id="department" name="department" value={formValues.department} onChange={handleChange} required />
                    </label>
                    <label htmlFor="hod" className='modal-body-from-label'>
                        Level:
                        <input className='modal-body-from-input' type="text" id="level" name="level" value={formValues.level} onChange={handleChange} />
                    </label>
                    <label htmlFor="courses" className='modal-body-from-label'>
                        Type:
                        <input className='modal-body-from-input' type="text" id="text" name="type" value={formValues.type} onChange={handleChange} />
                    </label>
                    <label htmlFor="capacity" className='modal-body-from-label'>
                        Experience:
                        <input className='modal-body-from-input' type="text" id="experience" name="experience" value={formValues.experience} onChange={handleChange} />
                    </label>
                    <label htmlFor="capacity" className='modal-body-from-label'>
                        Updated:
                        <input className='modal-body-from-input' type="date" id="updated" name="updated" value={formValues.updated} onChange={handleChange} />
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

export default CareerUpdateModal
