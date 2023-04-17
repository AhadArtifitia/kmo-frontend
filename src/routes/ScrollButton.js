import React from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';
import './ScrollButton.css'

const ScrollButton = () => {
    const [visible, setVisible] = React.useState(false)
  
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 1000){
        setVisible(true)
        } 
        else if (scrolled <= 1000){
        setVisible(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        });
    };
    
    window.addEventListener('scroll', toggleVisible);
  return (
    <>
        <FaArrowCircleUp onClick={scrollToTop} className='scroll-btn' size={30} style={{display: visible ? 'inline' : 'none'}} />
    </>
  )
}

export default ScrollButton
