import React from 'react'
import { Scissors } from 'lucide-react'
import { motion } from 'framer-motion'
import { useScrollToSection } from '../hooks/useScrollToSection'

const services = [
  {
    name: 'Signature Haircut',
    price: '$50',
    icon: Scissors,
    description: 'Experience the art of precision with our signature haircut. Tailored to perfection, this service includes a thorough consultation, expert cutting techniques, and styling to enhance your unique features.',
    features: ['Personalized consultation', 'Premium products', 'Hot towel refresh', 'Styling tips']
  },
  {
    name: 'Haircut & Beard Sculpting',
    price: '$75',
    icon: Scissors,
    description: 'Elevate your entire look with our comprehensive haircut and beard sculpting service. Achieve harmony between your hair and facial hair, expertly crafted to accentuate your best features.',
    features: ['Full haircut service', 'Beard trim and shape', 'Hot lather straight razor lineup', 'Moisturizing treatment']
  },
]

const Services = () => {
  const scrollToSection = useScrollToSection()

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-primary font-playfair"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Signature Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-background p-8 rounded-lg shadow-2xl transition-all duration-300 hover:shadow-primary hover:shadow-lg transform hover:-translate-y-2"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <service.icon className={`w-12 h-12 mr-4 text-primary ${index === 1 ? 'transform rotate-90' : ''}`} />
                <h3 className="text-3xl font-semibold text-primary">{service.name}</h3>
              </div>
              <p className="text-text mb-6 text-lg">{service.description}</p>
              <ul className="mb-6 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-text">
                    <Scissors className="w-5 h-5 mr-2 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <p className="text-primary text-3xl font-bold">{service.price}</p>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="bg-primary text-background px-6 py-2 rounded-full font-semibold hover:bg-accent transition duration-300 transform hover:scale-105 btn-hover"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services