import './GalleryBodyStyles.css'
import React from 'react'
import { AiOutlineCamera } from 'react-icons/ai'
import { AiOutlineZoomIn, AiOutlineZoomOut } from 'react-icons/ai'


const GalleryBody = () => {
    const [gallerys, setGallerys] = React.useState([])

    const token = localStorage.getItem('token')

    React.useEffect(()=>{
        fetchAllGallerys()
    },[])

    const fetchAllGallerys=async()=>{
        await fetch('https://backend.kmokoduvally.com/api/admin/gallery',{
            method:'GET',
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        })
        .then((res)=>res.json())
        .then((res)=>{
        if(Array.isArray(res)&&res?.length>0){
            setGallerys(res)
        }
        })
    }

    const [isPopupVisible, setIsPopupVisible] = React.useState(false);

    function togglePopup() {
        setIsPopupVisible(!isPopupVisible);
    }

  return (
    <div className='gallery-body'>
        {/* <div className='gallery-section'>
            <input type='submit' name='all' className='course-btn' value='All' />
            <input type='submit' name='hs' className='course-btn' value='Images' />
            <input type='submit' name='hss' className='course-btn' value='Videos' />
        </div> */}
        <div className='gallery-container'>
            <div className='gallery-row'>
                {gallerys.map((gallery,index)=> ( 
                    <>
                    <div className='gallery-row-img'>
                        <img id='gallery-img' src={gallery.imageUrl} alt='gallery image' />
                        <div className='gallery-img-overlay'>
                            <div className='overlay-zoomicon'>
                                <button onClick={togglePopup} className='overlay-zoomicon-btn'><AiOutlineZoomIn size={20} style={{ color:'#fff', cursor:'pointer' }} /></button>
                            </div>
                            <div className='overlay-cameraicon'>
                                {/* <AiOutlineCamera size={20} style={{ color:'#fff' }} /> */}
                            </div>
                        </div>
                    </div>
                    {isPopupVisible && (
                        <div className="popup">
                            <img src={gallery.imageUrl} alt='gallery image' />
                            <button onClick={togglePopup}><AiOutlineZoomOut size={20} style={{ color:'#fff', cursor:'pointer' }} /></button>
                        </div>
                    )}
                    </>
                ))}
            </div>
        </div>
      
    </div>
  )
}

export default GalleryBody


