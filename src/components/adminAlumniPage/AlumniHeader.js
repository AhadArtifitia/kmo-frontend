import './AlumniHeaderStyles.css'
import React from 'react'

const AlumniHeader = ({setAddAlumniModal}) => {
    function popModal() {
        setAddAlumniModal(true)
    }
  return (
    <div className='admin-alumni-search-container'>
        <div className='admin-alumni-search'>
            <h2>Alumni</h2>
            <div className='admin-search-input-btn'>
                <button onClick={popModal} className='admin-add-alumni-btn'>Add Alumni</button>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default AlumniHeader
