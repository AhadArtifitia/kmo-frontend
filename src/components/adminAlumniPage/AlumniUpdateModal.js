import './AlumniUpdateModalStyles.css'
import React from 'react'

const AlumniUpdateModal = ({setUpdateAlumniModal, formValues, setFormValues, setAlumnis, defaultValues, setDefaultValues}) => {
    const token = localStorage.getItem('token')

    const handleChange = (alumni) => {
        const { name, value } = alumni.target;
        setFormValues({
          ...formValues,
          [name]: value
        });
    }

    const handleSubmit = (alumni) => {
        alumni.preventDefault();
        fetch(`https://backend.kmokoduvally.com/api/admin/alumni/${defaultValues._id}`, { 
          method: 'PUT',
          headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
            },
          body: JSON.stringify(formValues)
        })
        .then(response => {
            // update table data
            setAlumnis(prevState => {
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

        setUpdateAlumniModal(false)
    }

    function popModal() {
        setUpdateAlumniModal(false)
    }

  return (
    <div className='modalBackground'>
        <div className='alumni-modalContainer'>
            {/* <div className='titleCloseBtn'>
                <button className='titleClose-btn' onClick={ closeModal }>X</button>
            </div> */}
            <div className='modal-title'>
                <h3>Update Alumni</h3>
            </div>
            <div className='modal-body'>
                <form onSubmit={handleSubmit} className='modal-body-from'>
                    <label htmlFor="name" className='modal-body-from-label'>
                        Name:
                        <input className='modal-body-from-input' type="text" id="name" name="name" value={formValues.name} onChange={handleChange} required />
                    </label>
                    <label htmlFor="description" className='modal-body-from-label'>
                        Description:
                        <textarea className='modal-body-from-input' rows='3' type="text" id="description" name="description" value={formValues.description} onChange={handleChange} />
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

export default AlumniUpdateModal
