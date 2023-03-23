import './GalleryBodyStyles.css'
import img1 from '../../images/gallery1.png'
import img2 from '../../images/gallery2.png'
import img3 from '../../images/gallery3.png'
import img4 from '../../images/gallery4.png'
import img5 from '../../images/gallery5.png'
import img6 from '../../images/gallery6.png'
import React from 'react'
import { AiOutlineCamera } from 'react-icons/ai'
import { AiOutlineZoomIn } from 'react-icons/ai'


const galleryBody = () => {
  return (
    <div className='gallery-body'>
        <div className='gallery-section'>
            <input type='submit' name='all' className='course-btn' value='All' />
            <input type='submit' name='hs' className='course-btn' value='Images' />
            <input type='submit' name='hss' className='course-btn' value='Videos' />
        </div>
        <div className='gallery-container'>
            <div className='gallery-row'>
                <div className='gallery-row-img'>
                    <img src={img1} alt='gallery image' />
                    <div className='gallery-img-overlay'>
                        <div className='overlay-zoomicon'>
                            <AiOutlineZoomIn size={20} style={{ color:'#fff' }} />
                        </div>
                        <div className='overlay-cameraicon'>
                            {/* <AiOutlineCamera size={20} style={{ color:'#fff' }} /> */}
                        </div>
                    </div>
                </div>
                <div className='gallery-row-img'>
                    <img src={img2} alt='gallery image' />
                    <div className='gallery-img-overlay'>
                        <div className='overlay-zoomicon'>
                            <AiOutlineZoomIn size={20} style={{ color:'#fff' }} />
                        </div>
                        <div className='overlay-cameraicon'>
                            {/* <AiOutlineCamera size={20} style={{ color:'#fff' }} /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='gallery-row'>
                <div className='gallery-row-img'>
                    <img src={img3} alt='gallery image' />
                    <div className='gallery-img-overlay'>
                        <div className='overlay-zoomicon'>
                            <AiOutlineZoomIn size={20} style={{ color:'#fff' }} />
                        </div>
                        <div className='overlay-cameraicon'>
                            {/* <AiOutlineCamera size={20} style={{ color:'#fff' }} /> */}
                        </div>
                    </div>
                </div>
                <div className='gallery-row-img'>
                    <img src={img4} alt='gallery image' />
                    <div className='gallery-img-overlay'>
                        <div className='overlay-zoomicon'>
                            <AiOutlineZoomIn size={20} style={{ color:'#fff' }} />
                        </div>
                        <div className='overlay-cameraicon'>
                            {/* <AiOutlineCamera size={20} style={{ color:'#fff' }} /> */}
                        </div>
                    </div>
                </div>                
            </div>
            <div className='gallery-row'>
                <div className='gallery-row-img'>
                    <img src={img5} alt='gallery image' />
                    <div className='gallery-img-overlay'>
                        <div className='overlay-zoomicon'>
                            <AiOutlineZoomIn size={20} style={{ color:'#fff' }} />
                        </div>
                        <div className='overlay-cameraicon'>
                            {/* <AiOutlineCamera size={20} style={{ color:'#fff' }} /> */}
                        </div>
                    </div>
                </div>
                <div className='gallery-row-img'>
                    <img src={img6} alt='gallery image' />
                    <div className='gallery-img-overlay'>
                        <div className='overlay-zoomicon'>
                            <AiOutlineZoomIn size={20} style={{ color:'#fff' }} />
                        </div>
                        <div className='overlay-cameraicon'>
                            {/* <AiOutlineCamera size={20} style={{ color:'#fff' }} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default galleryBody
