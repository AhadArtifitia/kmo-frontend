import './HomeHeroStyles.css'
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import logo from '../../images/kmo-logo-white.png'
import hero1 from '../../images/cover.png'
import hero2 from '../../images/instHero.png'
import hero3 from '../../images/courseHero.png'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const HomeHero = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='home-hero'>
        <div className='home-hero-img'>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={hero1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={hero2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={hero3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

        <div className='home-hero-container'>
            <div className='home-hero-logo'>
                <img src={logo} />
            </div>
            <ul className={ click ? 'home-hero-nav active':'home-hero-nav' }>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About us</Link>
                </li>
                <li>
                    <Link to='/institutions'>Institutions</Link>
                </li>
                <li>
                    <Link to='/courses'>Courses</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact us</Link>
                </li>
                <li>
                    <Link to='/career'>Career</Link>
                </li>
            </ul>
            <div className='home-hero-hamburger' onClick={ handleClick }>
                {
                    click ? 
                        (<FaTimes size={20} style={{ color:'#fff' }} />) : (<FaBars size={20} style={{ color:'#fff' }} />)
                }
            </div>
            
        </div>
        <div className='home-hero-title'>
            <h5>Welcome to</h5>
            <h2>KMO <br /> GROUPS</h2>
        </div>
    </div>
  )
}

export default HomeHero
