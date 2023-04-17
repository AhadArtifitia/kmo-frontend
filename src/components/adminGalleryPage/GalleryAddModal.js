import './GalleryAddModalStyles.css'
import React from 'react'

const GalleryAddModal = ({setAddGalleryModal, gallerys, setGallerys}) => {
    const token = localStorage.getItem('token')
    
    const [formData, setFormData] = React.useState({
        name: '',
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
        data.append("image", formData.image);

        const headers = {
            Authorization: `Bearer ${token}`,
        };

        fetch('https://backend.kmokoduvally.com/api/admin/gallery', {   
          method: 'POST',
          headers,
          body: data, 
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // update existing table with new data
            setGallerys([...gallerys, formData]);
        })
        .catch(error => console.error(error));

        setAddGalleryModal(false)
    };

    function popModal() {
        setAddGalleryModal(false)
    }

  return (
    <div className='modalBackground'>
        <div className='gallery-modalContainer'>
            {/* <div className='titleCloseBtn'>
                <button className='titleClose-btn' onClick={ closeModal }>X</button>
            </div> */}
            <div className='modal-title'>
                <h3>Add File</h3>
            </div>
            <div className='modal-body'>
                <form onSubmit={handleSubmit} className='modal-body-from'>
                    <label className='modal-body-from-label'>
                        Name:
                        <input className='modal-body-from-input' type="text" name="name" onChange={handleChange} required />
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

export default GalleryAddModal
