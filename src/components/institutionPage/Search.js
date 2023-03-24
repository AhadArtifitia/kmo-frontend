import './SearchStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Search = ({instSearch, setInstSearch}) => {
    function handleSearch(event) {
        setInstSearch(event.target.value);
    }
  return (
    <div className='inst-search-header'>
        <div className='search-h2'>
            <h2>Institutions</h2>
        </div>
        <div className='box-container'>
            <table className='elements-container'>
                <tr>
                    <td>
                        <input type="text" value={instSearch} onChange={handleSearch} placeholder='Search institution' className='search' />
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

export default Search
