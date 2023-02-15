import './CourseListStyles.css'
import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const CourseList = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className='course-list'>
        <div className={ click ? 'list-section active' : 'list-section' }>
            <input type='submit' name='all' className='course-btn' value='ALL' />
            <input type='submit' name='hs' className='course-btn' value='HS' />
            <input type='submit' name='hss' className='course-btn' value='HSS' />
            <input type='submit' name='ba' className='course-btn' value='B.A' />
            <input type='submit' name='bcom' className='course-btn' value='B.COM' />
            <input type='submit' name='bba' className='course-btn' value='BBA' />
            <input type='submit' name='bsc' className='course-btn' value='B.SC' />
            <input type='submit' name='bed' className='course-btn' value='B.Ed' />
        </div>
        <div className='list-section-hamburger' onClick={ handleClick }>
            {
              click ? 
                (<FaTimes size={20} style={{ color:'#fff' }} />) : (<FaBars size={20} style={{ color:`var(--theemColor)` }} />)
            }
        </div>
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action">8th</a>
            <a href="#" class="list-group-item list-group-item-action">9th</a>
            <a href="#" class="list-group-item list-group-item-action">SSLC</a>
            <a href="#" class="list-group-item list-group-item-action">SCIENCE</a>
            <a href="#" class="list-group-item list-group-item-action">COMMERCE</a>
            <a href="#" class="list-group-item list-group-item-action">HUMANITIES</a>
            <a href="courses/english" class="list-group-item list-group-item-action">B.A English</a>
            <a href="#" class="list-group-item list-group-item-action">B.A Economics</a>
            <a href="#" class="list-group-item list-group-item-action">B.Com Co-operation</a>
            <a href="#" class="list-group-item list-group-item-action">B.Sc Zoology</a>
        </div>
    </div>
  )
}

export default CourseList
