import './HomeFeaturesStyles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from 'react-icons/md'
import img1 from '../../images/fimg1.png'
import img2 from '../../images/fimg2.png'
import img3 from '../../images/fimg3.png'
import img4 from '../../images/fimg4.png'
import img5 from '../../images/fimg5.png'


const HomeFeatures = () => {
  return (
    <div className='home-features'>
      <h1>KMO Groups at the pace of change and grow from there</h1>
      <p>Lorem Ipsum is simply dummy text.</p>

      <div className='home-features-a'>
            <div className='home-features-a-img'>
                <img src={img1} />
            </div>
            <div className='home-features-a-list'>
                <h3>What is Lorem Ipsum</h3>
                <ul>
                    <li>Lorem Ipsum is simply dummy text</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the </li>
                    <Link to='#'>Learn More<MdKeyboardArrowRight size={25} /></Link>
                </ul>
            </div>
      </div>

      <div className='home-features-a'>
            <div className='home-features-a-list'>
                <h3>What is Lorem Ipsum</h3>
                <ul>
                    <li>Lorem Ipsum is simply dummy text</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the </li>
                    <Link to='#'>Learn More<MdKeyboardArrowRight size={25} /></Link>
                </ul>
            </div>
            <div className='home-features-a-img'>
                <img src={img2} />
            </div>
      </div>

      <div className='home-features-a'>
            <div className='home-features-a-img'>
                <img src={img3} />
            </div>
            <div className='home-features-a-list'>
                <h3>What is Lorem Ipsum</h3>
                <ul>
                    <li>Lorem Ipsum is simply dummy text</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the </li>
                    <Link to='#'>Learn More<MdKeyboardArrowRight size={25} /></Link>
                </ul>
            </div>
      </div>

      <div className='home-features-a'>
            <div className='home-features-a-list'>
                <h3>What is Lorem Ipsum</h3>
                <ul>
                    <li>Lorem Ipsum is simply dummy text</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the </li>
                    <Link to='#'>Learn More<MdKeyboardArrowRight size={25} /></Link>
                </ul>
            </div>
            <div className='home-features-a-img'>
                <img src={img4} />
            </div>
      </div>

      <div className='home-features-a'>
            <div className='home-features-a-img'>
                <img src={img5} />
            </div>
            <div className='home-features-a-list'>
                <h3>What is Lorem Ipsum</h3>
                <ul>
                    <li>Lorem Ipsum is simply dummy text</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
                    <li>Lorem Ipsum is simply dummy text of the </li>
                    <Link to='#'>Learn More<MdKeyboardArrowRight size={25} /></Link>
                </ul>
            </div>
      </div>
      
    </div>
  )
}

export default HomeFeatures
