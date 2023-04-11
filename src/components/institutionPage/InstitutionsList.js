import './InstitutionsListStyles.css'
import React from 'react'

const InstitutionsList = ({institutions, instSearch}) => {
    const filteredDepartments = institutions.filter(item => 
        item.name.toLowerCase().includes(instSearch.toLowerCase()) 
    );
  return (
    
    <div className='institution-list'>
        {filteredDepartments.map((institution,index)=> (
            <>
            <div className='institution-list-header'>
                <h2>{institution.name}</h2>
            </div>
            <div className='institution-list-body'>
                <div className='institution-list-content'>
                    <h4>{institution.name}</h4>
                    <p>{institution.description}</p>
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
