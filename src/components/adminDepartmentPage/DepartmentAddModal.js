import './DepartmentAddModalStyles.css'
import React from 'react'

const DepartmentAddModal = ({setAddDepModal, departments, setDepartments}) => {
    const token = localStorage.getItem('token')
    
    const [formData, setFormData] = React.useState({
        name: '',
        description: '',
        hod: '',
        courses: '',
        capacity: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        fetch('https://backend.kmokoduvally.com/api/admin/department', {  
          method: 'POST',
          headers: { 
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json' 
        },
          body: JSON.stringify(formData)
        })
        .then((res) => {
            setDepartments([...departments, formData]);
        })
        .then((res)=> {
            console.log(res)
            if(res?.token){
                localStorage.setItem('token',res.token)
            }
        })
        .catch(error => console.error(error));

        setAddDepModal(false)
    };
    
    function popModal() {
        setAddDepModal(false)
    }

  return (
    <div className='modalBackground'>
        <div className='dep-modalContainer'>
            {/* <div className='titleCloseBtn'>
                <button className='titleClose-btn' onClick={ closeModal }>X</button>
            </div> */}
            <div className='modal-title'>
                <h3>Add Department</h3>
            </div>
            <div className='modal-body'>
                <form onSubmit={handleSubmit} className='modal-body-from'>
                    <label className='modal-body-from-label'>
                        Name:
                        <input className='modal-body-from-input' type="text" name="name" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Description:
                        <textarea className='modal-body-from-input' rows='3' type="text" name='description'  onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        HOD:
                        <input className='modal-body-from-input' type="text" name="hod" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Courses:
                        <input className='modal-body-from-input' type="text" name="courses" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Capacity:
                        <input className='modal-body-from-input' type="number" name="capacity" onChange={handleChange} />
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

export default DepartmentAddModal

