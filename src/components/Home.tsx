import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Gallery from './Gallery'
import Testimonials from './Testimonials'
import Booking from './Booking'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Booking />
    </>
  )
}

export default Home