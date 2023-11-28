import React from 'react'
import Card from '../components/Card'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PhotoCarousel from '../components/PhotoCarousel'



function HomePage() {
  return (<>
    <Header />
    <PhotoCarousel/>
    <Card />
    <Footer />
  </>
  )
}

export default HomePage