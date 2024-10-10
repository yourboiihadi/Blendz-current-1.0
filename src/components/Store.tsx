import React from 'react'
import { ShoppingCart, Star } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { motion } from 'framer-motion'

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Hair Pomade",
    price: 24.99,
    description: "High-hold, low-shine pomade for classic styles.",
    image: "https://images.unsplash.com/photo-1597854710119-a5a3e0ad2d0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    rating: 4.8,
    reviews: 127,
    category: "Styling"
  },
  {
    id: 2,
    name: "Beard Oil",
    price: 19.99,
    description: "Nourishing oil for a soft and manageable beard.",
    image: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
    rating: 4.6,
    reviews: 89,
    category: "Grooming"
  },
  {
    id: 3,
    name: "Professional Clippers",
    price: 129.99,
    description: "High-quality clippers for precise cuts.",
    image: "https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
    rating: 4.9,
    reviews: 203,
    category: "Equipment"
  }
]

const Store = () => {
  const { addToCart } = useCart()

  const handleAddToCart = (product: Product) => {
    addToCart({ ...product, quantity: 1 })
  }

  return (
    <section id="store" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-primary font-playfair"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          HusseinBlendz Store
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-2">{product.name}</h3>
                <p className="text-text text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-text text-sm ml-1">{product.rating} ({product.reviews} reviews)</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-primary text-background py-3 rounded-full hover:bg-accent transition-colors duration-300 flex items-center justify-center text-lg font-semibold"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Store