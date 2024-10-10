import React from 'react'
import { Instagram, MapPin, Phone, Mail } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    if (target === 'store') {
      navigate('/store')
    } else if (location.pathname === '/') {
      const element = document.getElementById(target)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${target}`)
    }
  }

  return (
    <footer className="bg-secondary py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-primary font-playfair">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#services" onClick={(e) => handleQuickLinkClick(e, 'services')} className="text-text hover:text-primary transition duration-300">Services</a></li>
              <li><a href="#gallery" onClick={(e) => handleQuickLinkClick(e, 'gallery')} className="text-text hover:text-primary transition duration-300">Gallery</a></li>
              <li><a href="#testimonials" onClick={(e) => handleQuickLinkClick(e, 'testimonials')} className="text-text hover:text-primary transition duration-300">Testimonials</a></li>
              <li><a href="#booking" onClick={(e) => handleQuickLinkClick(e, 'booking')} className="text-text hover:text-primary transition duration-300">Book Now</a></li>
              <li><a href="/store" onClick={(e) => handleQuickLinkClick(e, 'store')} className="text-text hover:text-primary transition duration-300">Store</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-primary font-playfair">Store Hours</h3>
            <p className="text-text mb-2">Monday - Friday: 9am - 7pm</p>
            <p className="text-text mb-2">Saturday: 10am - 6pm</p>
            <p className="text-text mb-2">Sunday: Closed</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-6 text-primary font-playfair">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 mr-3 text-primary" />
                <span className="text-text">Hamilton, Ontario</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3 text-primary" />
                <a href="tel:289-689-3879" className="text-text hover:text-primary transition duration-300">289-689-3879</a>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3 text-primary" />
                <a href="mailto:husseinmk314@gmail.com" className="text-text hover:text-primary transition duration-300">husseinmk314@gmail.com</a>
              </div>
            </div>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="https://www.instagram.com/husseinblendz/" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition duration-300">
                <Instagram className="w-8 h-8" />
              </a>
              <a href="https://www.tiktok.com/@husseinblendz_" target="_blank" rel="noopener noreferrer" className="text-text hover:text-primary transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-text">&copy; {new Date().getFullYear()} HusseinBlendz. All rights reserved.</p>
          <p className="mt-2 text-text">Crafted with precision for exceptional grooming experiences.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer