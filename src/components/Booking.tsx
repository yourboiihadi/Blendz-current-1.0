import React from 'react'
import { Calendar, Clock, Scissors } from 'lucide-react'

const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-5xl font-bold mb-8 text-primary font-playfair">Reserve Your Experience</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-text">Indulge in the HusseinBlendz difference. Our master barbers are ready to transform your look and elevate your style to unprecedented heights.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Calendar className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary">Flexible Scheduling</h3>
            <p className="text-text">Book your preferred time slot</p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary">Punctual Service</h3>
            <p className="text-text">We value your time as much as you do</p>
          </div>
          <div className="flex flex-col items-center">
            <Scissors className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-primary">Expert Craftsmanship</h3>
            <p className="text-text">Experience the pinnacle of barbering</p>
          </div>
        </div>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2 text-primary">Name</label>
            <input type="text" id="name" className="w-full p-2 rounded-md bg-secondary text-text input-focus" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-2 text-primary">Email</label>
            <input type="email" id="email" className="w-full p-2 rounded-md bg-secondary text-text input-focus" required />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-left mb-2 text-primary">Preferred Date</label>
            <input type="date" id="date" className="w-full p-2 rounded-md bg-secondary text-text input-focus" required />
          </div>
          <div className="mb-4">
            <label htmlFor="service" className="block text-left mb-2 text-primary">Service</label>
            <select id="service" className="w-full p-2 rounded-md bg-secondary text-text input-focus" required>
              <option value="">Select a service</option>
              <option value="haircut">Signature Haircut</option>
              <option value="haircut-beard">Haircut & Beard Sculpting</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-primary text-background px-8 py-3 rounded-full font-semibold text-lg hover:bg-accent transition duration-300 btn-hover">
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  )
}

export default Booking