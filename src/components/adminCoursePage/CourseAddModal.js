import './CourseAddModalStyles.css'
import React from 'react'

const CourseAddModal = ({setAddCourseModal, courses, setCourses}) => {
    const token = localStorage.getItem('token')
    
    const [formData, setFormData] = React.useState({
        name: '',
        department: '',
        duration: '',
        fees: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        fetch('https://backend.kmokoduvally.com/api/admin/course', {
          method: 'POST',
          headers: { 
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json' 
        },
          body: JSON.stringify(formData)
        })
        .then((res) => {
            setCourses([...courses, formData]);
        })
        .then((res)=> {
            console.log(res)
            if(res?.token){
                localStorage.setItem('token',res.token)
            }
        })
        .catch(error => console.error(error));

        setAddCourseModal(false)
    };

    function popModal() {
        setAddCourseModal(false)
    }
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            {/* <div className='titleCloseBtn'>
                <button className='titleClose-btn' onClick={ closeModal }>X</button>
            </div> */}
            <div className='modal-title'>
                <h3>Add Course</h3>
            </div>
            <div className='modal-body'>
                <form onSubmit={handleSubmit} className='modal-body-from'>
                    <label className='modal-body-from-label'>
                        Name:
                        <input className='modal-body-from-input' type="text" name="name" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Department:
                        <input className='modal-body-from-input' type="text" name="department" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Duration:
                        <input className='modal-body-from-input' type="text" name="duration" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Fees:
                        <input className='modal-body-from-input' type="number" name="fees" onChange={handleChange} />
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

export default CourseAddModal
