import './InstitutionAddModal.css'
import React from 'react'
import Objectives from '../aboutPage/Objectives'

const InstitutionModal = ({ setInstModal, setObjects, objects }) => {
    const token = localStorage.getItem('token')

    function closeModal() {
        setInstModal(false)
    }

    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: '',
        location: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };
    
    const handleSubmit = e => {
        e.preventDefault();

        fetch('http://localhost:8000/api/admin/institution', {
          method: 'POST',
          headers: { 
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json' 
        },
          body: JSON.stringify(formData)
        })
        .then((res) => {
            setObjects([...objects, formData]);
        })
        .then((res)=> {
            console.log(res)
            if(res?.token){
                localStorage.setItem('token',res.token)
            }
        })
        .catch(error => console.error(error));

        setInstModal(false)
    };
    
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            {/* <div className='titleCloseBtn'>
                <button className='titleClose-btn' onClick={ closeModal }>X</button>
            </div> */}
            <div className='modal-title'>
                <h3>Add Institute</h3>
            </div>
            <div className='modal-body'>
                <form onSubmit={handleSubmit} className='modal-body-from'>
                    <label className='modal-body-from-label'>
                        Name:
                        <input className='modal-body-from-input' type="text" name="name" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Phone:
                        <input className='modal-body-from-input' type="text" name="phone" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Email:
                        <input className='modal-body-from-input' type="email" name="email" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Location:
                        <input className='modal-body-from-input' type="text" name="location" onChange={handleChange} />
                    </label>
                    <div className='modal-footer'>
                        <button type="submit" className='modalFooter-btn' id='cancelBtn' onClick={ closeModal } >Cancel</button>
                        <button type="submit" className='modalFooter-btn'>Submit</button>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default InstitutionModal
