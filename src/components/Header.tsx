import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Scissors, Menu, X, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useScrollToSection } from '../hooks/useScrollToSection'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { cart } = useCart()
  const location = useLocation()
  const navigate = useNavigate()
  const scrollToSection = useScrollToSection()

  const navItems = ['Services', 'Gallery', 'Testimonials', 'Booking', 'Store']

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleStoreClick = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate('/store')
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 100)
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background bg-opacity-90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Scissors className="w-10 h-10 mr-2 text-primary" />
            <span className="text-3xl font-bold font-playfair text-primary">HusseinBlendz</span>
          </Link>
          <div className="flex items-center">
            <nav className={`hidden md:flex space-x-1 mr-4`}>
              {navItems.map((item) => (
                item === 'Store' ? (
                  <a
                    key={item}
                    href="/store"
                    onClick={handleStoreClick}
                    className="px-6 py-2 rounded-full text-background bg-primary hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-semibold text-sm uppercase tracking-wider border-2 border-primary hover:border-accent"
                  >
                    {item}
                  </a>
                ) : (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="px-3 py-2 rounded-full text-text hover:text-primary hover:bg-secondary transition duration-300"
                  >
                    {item}
                  </button>
                )
              ))}
            </nav>
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-primary" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-background rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
            <button
              className="ml-4 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background">
          <nav className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3 py-2 text-text hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header