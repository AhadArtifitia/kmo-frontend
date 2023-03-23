import './BannerAddModalStyles.css'
import React from 'react'

const BannerAddModal = ({setAddBannerModal}) => {
    const token = localStorage.getItem('token')

    const [image, setImage] = React.useState(null);
    const [title, setTitle] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', title);
        fetch('https://backend.kmokoduvally.com/api/admin/banner', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`, 
        },
        body: formData,
        })
        .then((response) => {
            if (response.ok) {
            alert('Image uploaded successfully!');
            } else {
            alert('Image upload failed!');
            }
        })
        .catch((error) => {
            console.error(error);
            alert('Image upload failed!');
        });

        setAddBannerModal(false)
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    function popModal() {
        setAddBannerModal(false)
    }
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            {/* <div className='titleCloseBtn'>
                <button className='titleClose-btn' onClick={ closeModal }>X</button>
            </div> */}
            <div className='modal-title'>
                <h3>Upload New Banner</h3>
            </div>
            <div className='modal-body'>
                <form onSubmit={handleSubmit} className='modal-body-from'>
                    <label className='banner-modal-body-from-label'>
                        Title:
                        <input className='modal-body-from-input' type="text" name="title" value={title} onChange={handleTitleChange} />
                    </label>
                    <label className='modal-body-from-label'>
                        testImages:
                        <input className='modal-body-from-input' type="file" name="testImages" accept="image/png, image/jpeg" onChange={handleImageChange} />
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

export default BannerAddModal


