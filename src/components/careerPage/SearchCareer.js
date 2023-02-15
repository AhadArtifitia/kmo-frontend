import './SearchCareerStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const SearchCareer = () => {
  return (
    <div className='search-header'>
        <div className='search-h2'>
            <h2>CAREER - Job Opportunites</h2>
        </div>
        <div className='box-container'>
            <table className='elements-container'>
                <tr>
                    <td>
                        <input type="text" placeholder='Search jobs' className='search' />
                    </td>
                    <td>
                        <Link to='#'>
                            <FaSearch size={20} style={{ color:'#003B7B' }} />
                        </Link>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default SearchCareer
