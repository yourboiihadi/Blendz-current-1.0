import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Barber Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold mb-6 text-shadow font-playfair text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Elevate Your Style
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-10 text-shadow max-w-2xl mx-auto text-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience the art of precision grooming at HusseinBlendz, where every cut is a masterpiece.
        </motion.p>
        <motion.a 
          href="#booking" 
          className="bg-primary text-background px-10 py-4 rounded-full font-semibold text-lg hover:bg-accent transition duration-300 transform hover:scale-105 inline-block btn-hover"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Book Your Experience
        </motion.a>
      </div>
    </section>
  )
}

export default Hero