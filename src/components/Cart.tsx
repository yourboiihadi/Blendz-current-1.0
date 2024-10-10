import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { Trash2, Minus, Plus } from 'lucide-react'

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart()

  return (
    <div className="py-16 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary font-playfair">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-text text-lg">Your cart is empty. <Link to="/store" className="text-primary hover:underline">Continue shopping</Link></p>
        ) : (
          <>
            <div className="bg-secondary rounded-lg shadow-md overflow-hidden mb-6">
              {cart.map((item, index) => (
                <div key={item.id} className={`p-6 ${index !== cart.length - 1 ? 'border-b border-gray-700' : ''}`}>
                  <div className="bg-background bg-opacity-20 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                        <div>
                          <h3 className="text-lg font-semibold text-primary mb-1">{item.name}</h3>
                          <p className="text-text text-sm">${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center bg-secondary rounded-full p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-primary hover:text-accent transition duration-300 w-6 h-6 flex items-center justify-center"
                            disabled={item.quantity <= 1}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="mx-2 text-text text-sm font-semibold w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-primary hover:text-accent transition duration-300 w-6 h-6 flex items-center justify-center"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-primary font-bold text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-accent hover:text-red-500 transition duration-300"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mb-6">
              <Link to="/store" className="text-primary hover:underline text-sm">
                Continue Shopping
              </Link>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">Total: ${getCartTotal().toFixed(2)}</p>
              </div>
            </div>
            <div className="text-center">
              <Link
                to="/checkout"
                className="bg-primary text-background px-8 py-3 rounded-full font-semibold text-lg hover:bg-accent transition duration-300 inline-block shadow-md"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart