import './InstitutionSearchStyles.css'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const InstitutionSearch = ({setInstModal, instSearch, setInstSearch}) => {

  function handleSearch(event) {
    setInstSearch(event.target.value);
  }
  
  function popModal() {
    setInstModal(true)
  }
  return (
    <div className='admin-institution-search-container'>
        <div className='admin-institution-search'>
            <h2>Institutions</h2>
            <div className='admin-search-input-btn'>
                <div className='admin-inst-search-box'>
                    <input className='admin-inst-search-input' type='text' value={instSearch} onChange={handleSearch} name='search' placeholder='Search institute' />
                    <IoIosSearch size={24} className='admin-search-logo' />
                </div>
                <button className='admin-add-inst-btn' onClick={popModal}>Add Institute</button>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default InstitutionSearch


