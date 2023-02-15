import React from 'react'
import HomeFooter from '../components/Footer'
import GalleryHero from '../components/galleryPage/GalleryHero'
import GalleryBody from '../components/galleryPage/GalleryBody'
import Nav from '../components/Nav'

const Gallery = () => {
  return (
    <div>
      <Nav />
      <GalleryHero />
      <GalleryBody />
      <HomeFooter />
    </div>
  )
}

export default Gallery
