import './CourseUpdateModalStyles.css'
import React from 'react'

const CourseUpdateModal = ({setUpdateCourseModal, formValues, setFormValues, setCourses, defaultValues, setDefaultValues}) => {
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
        fetch(`http://localhost:3000/api/admin/course/${defaultValues._id}`, { //https://backend.kmokoduvally.com
          method: 'PUT',
          headers:{
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json'
            },
          body: JSON.stringify(formValues)
        })
        .then(response => {
            // update table data
            setCourses(prevState => {
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

        setUpdateCourseModal(false)
    }

    function popModal() {
        setUpdateCourseModal(false)
    }
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            {/* <div className='titleCloseBtn'>
                <button className='titleClose-btn' onClick={ closeModal }>X</button>
            </div> */}
            <div className='modal-title'>
                <h3>Update Course</h3>
            </div>
            <div className='modal-body'>
                <form onSubmit={handleSubmit} className='modal-body-from'>
                    <label htmlFor="name" className='modal-body-from-label'>
                        Name:
                        <input className='modal-body-from-input' type="text" id="name" name="name" value={formValues.name} onChange={handleChange} required />
                    </label>
                    <label htmlFor="level" className='modal-body-from-label'>
                        Level:
                        <input className='modal-body-from-radio' type="radio" id="level" name="level" value='hss' checked={formValues.level === 'hss' ? true : false} onChange={handleChange} />
                        <label for="hss">HSS</label> <br/>
                        <input className='modal-body-from-radio' type="radio" id="level" name="level" value='bachelors' checked={formValues.level === 'bachelors' ? true : false} onChange={handleChange} />
                        <label for="bachelor">Bachelors</label> <br/>
                        <input className='modal-body-from-radio' type="radio" id="level" name="level" value='masters' checked={formValues.level === 'masters' ? true : false} onChange={handleChange} />
                        <label for="masters">Masters</label>
                    </label>
                    <label htmlFor="hod" className='modal-body-from-label'>
                        Department:
                        <input className='modal-body-from-input' type="text" id="department" name="department" value={formValues.department} onChange={handleChange} />
                    </label>
                    <label htmlFor="courses" className='modal-body-from-label'>
                        Duration:
                        <input className='modal-body-from-input' type="text" id="duration" name="duration" value={formValues.duration} onChange={handleChange} />
                    </label>
                    <label htmlFor="capacity" className='modal-body-from-label'>
                        Fees:
                        <input className='modal-body-from-input' type="number" id="fees" name="fees" value={formValues.fees} onChange={handleChange} />
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

export default CourseUpdateModal
