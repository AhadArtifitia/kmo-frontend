import './SearchFeeStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const SearchFee = () => {
  return (
    <div className='fee-search-header'>
        <div className='box-container'>
            <table className='elements-container'>
                <tr>
                    <td>
                        <input type="text" placeholder='Search courses' className='search' />
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

export default SearchFee
