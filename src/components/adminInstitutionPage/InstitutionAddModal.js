import './InstitutionAddModal.css'
import React from 'react'

const InstitutionModal = ({ setInstModal, setObjects, objects }) => {
    const token = localStorage.getItem('token')

    function closeModal() {
        setInstModal(false)
    }

    const [formData, setFormData] = React.useState({
        name: "",
        description: "",
        email: "",
        phone: "",
        location: "",
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", formData.name);
        data.append("description", formData.description);
        data.append("email", formData.email);
        data.append("phone", formData.phone);
        data.append("location", formData.location);
        data.append("image", formData.image);

        const headers = {
            Authorization: `Bearer ${token}`,
          };
      
        fetch("https://backend.kmokoduvally.com/api/admin/institution", { 
          method: "POST",
          headers,
          body: data,
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // update existing table with new data
            setObjects([...objects, formData]);
        })
        .catch((error) => {
            console.error("Error:", error);
        });

        setInstModal(false)
    };

    //     .then((res)=> {
    //         console.log(res)
    //         if(res?.token){
    //             localStorage.setItem('token',res.token)
    //         }
    //     })

    
  return (
    <div className='modalBackground'>
        <div className='inst-modalContainer'>
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
                        Description:
                        <textarea className='modal-body-from-input' rows='3' type="text" name='description'  onChange={handleChange} />
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
                    <label className='modal-body-from-label'>
                        Image:
                        <input className='modal-body-from-input' type="file" name="image" onChange={handleImageChange} accept="image/*" />
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

