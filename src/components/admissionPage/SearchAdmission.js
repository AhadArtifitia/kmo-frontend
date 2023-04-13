import './SearchAdmissionStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const SearchAdmission = () => {
  return (
    <div className='search-header'>
        <div className='search-h2'>
            <h2>Apply for Admission</h2>
        </div>
        {/* <div className='box-container'>
            <table className='elements-container'>
                <tr>
                    <td>
                        <input type="text" placeholder='Search admission' className='search' />
                    </td>
                    <td>
                        <Link to='#'>
                            <FaSearch size={20} style={{ color:'#003B7B' }} />
                        </Link>
                    </td>
                </tr>
            </table>
        </div> */}
    </div>
  )
}

export default SearchAdmission
