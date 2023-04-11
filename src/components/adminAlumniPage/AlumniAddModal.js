import './AlumniAddModalStyles.css'
import React from 'react'

const AlumniAddModal = ({setAddAlumniModal, alumnis, setAlumnis}) => {
    const token = localStorage.getItem('token')
    
    const [formData, setFormData] = React.useState({
        name: '',
        description: '',
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
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("image", formData.image);

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        fetch('https://backend.kmokoduvally.com/api/admin/alumni', {   
          method: 'POST',
          headers,
          body: data, 
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // update existing table with new data
            setAlumnis([...alumnis, formData]);
        })
        .catch(error => console.error(error));

        setAddAlumniModal(false)
    };

    function popModal() {
        setAddAlumniModal(false)
    }

  return (
    <div className='modalBackground'>
        <div className='alumni-modalContainer'>
            {/* <div className='titleCloseBtn'>
                <button className='titleClose-btn' onClick={ closeModal }>X</button>
            </div> */}
            <div className='modal-title'>
                <h3>Add Alumni</h3>
            </div>
            <div className='modal-body'>
                <form onSubmit={handleSubmit} className='modal-body-from'>
                    <label className='modal-body-from-label'>
                        Name:
                        <input className='modal-body-from-input' type="text" name="name" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Description:
                        <textarea className='modal-body-from-input' rows='3' type="text" name="description" onChange={handleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        Image:
                        <input className='modal-body-from-input' type="file" name="image" onChange={handleImageChange} accept="image/*" />
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

export default AlumniAddModal
