import './CareerAddModalStyles.css'
import React from 'react'

const CareerAddModal = ({setAddCareerModal, careers, setCareers}) => {
    const token = localStorage.getItem('token')
    
    const [formData, setFormData] = React.useState({
        department: '',
        level: '',
        type: '',
        experience: '',
        updated: '',
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        fetch('https://backend.kmokoduvally.com/api/admin/career', {
          method: 'POST',
          headers: { 
            'Authorization':`Bearer ${token}`,
            'Content-Type': 'application/json' 
        },
          body: JSON.stringify(formData)
        })
        .then((res) => {
            setCareers([...careers, formData]);
        })
        .then((res)=> {
            console.log(res)
            if(res?.token){
                localStorage.setItem('token',res.token)
            }
        })
        .catch(error => console.error(error));

        setAddCareerModal(false)
    };

    function popModal() {
        setAddCareerModal(false)
    }

  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            {/* <div className='titleCloseBtn'>
                <button className='titleClose-btn' onClick={ closeModal }>X</button>
            </div> */}
            <div className='modal-title'>
                <h3>Add Career</h3>
            </div>
            <div className='modal-body'>
                <form onSubmit={handleSubmit} className='modal-body-from'>
                    <label className='modal-body-from-label'>
                        Department:
                        <input className='modal-body-from-input' type="text" name="department" onChange={handleChange} required />
                    </label>
                    <label className='modal-body-from-label'>
                        Level:
                        <input className='modal-body-from-input' type="text" name="level" onChange={handleChange} required />
                    </label>
                    <label className='modal-body-from-label'>
                        Type:
                        <input className='modal-body-from-input' type="text" name="type" onChange={handleChange} required />
                    </label>
                    <label className='modal-body-from-label'>
                        Experience:
                        <input className='modal-body-from-input' type="text" name="experience" onChange={handleChange} required />
                    </label>
                    <label className='modal-body-from-label'>
                        Updated:
                        <input className='modal-body-from-input' type="date" name="updated" onChange={handleChange} required />
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

export default CareerAddModal
