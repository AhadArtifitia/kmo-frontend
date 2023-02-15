import './OrphanageStyles.css'
import img from '../../images/orphanageImg.png'
import React from 'react'

const Orphanage = () => {
  return (
    <div className='orphanage'>
        <div className='orphanage-header'>
            <h2>KMO Orphanage</h2>
        </div>
        <div className='orphanage-body'>
            <div className='orphanage-content'>
                <h4>KMO Orphanage</h4>
                <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum. Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            </div>
            <div className='orphanage-img'>
                <img src={img} alt='orphanage image' />
            </div>
        </div>
    </div>
  )
}

export default Orphanage
