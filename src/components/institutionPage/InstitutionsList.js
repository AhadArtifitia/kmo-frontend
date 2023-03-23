import './InstitutionsListStyles.css'
import React from 'react'

const InstitutionsList = ({institutions}) => {
  return (
    
    <div className='institution-list'>
        {institutions.map((institution,index)=> (
            <>
            <div className='institution-list-header'>
                <h2>{institution.name}</h2>
            </div>
            <div className='institution-list-body'>
                <div className='institution-list-content'>
                    <h4>KMO  HSS</h4>
                    <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum. Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
                </div>
                <div className='institution-list-img'>
                    <img src={institution.imageUrl} alt='school image' />
                </div>
            </div>
            </>
        ))}
        

        
    </div>
  )
}

export default InstitutionsList
