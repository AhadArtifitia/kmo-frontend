import './HomeAcademicStyles.css'
import React from 'react'

const HomeAcademic = () => {
  return (
    <div className='academic'>
        <div className='academic-body'>
            <h2>Academic Programs</h2>
            <p>Lorem ipsum dolor sit amet. Sed impedit quaerat id velit explicabo ut praesentium quidem 
                33 consequatur vero et maiores distinctio est numquam dolorem et quia voluptatum.</p>
            <div className='academic-section'>
                <input type='submit' name='Higher Secondary' className='academic-btn' value='Higher Secondary' />
                <input type='submit' name='Bachelor' className='academic-btn' value='Bachelor' />
                <input type='submit' name='Masters' className='academic-btn' value='Masters' />
            </div>
            <div className='academic-card-container'>
                <div className='academic-card'>
                    <p>Ba English(Ba)</p>
                    <button className='aca-button'>Bachelor</button>
                </div>
                <div className='academic-card'>
                    <p>Ba English(Ba)</p>
                    <button className='aca-button'>Bachelor</button>
                </div>
                <div className='academic-card'>
                    <p>Ba English(Ba)</p>
                    <button className='aca-button'>Bachelor</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAcademic
