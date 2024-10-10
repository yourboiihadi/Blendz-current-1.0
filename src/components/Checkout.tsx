import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { CreditCard, Lock } from 'lucide-react'

interface FormData {
  name: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}

interface Errors {
  [key: string]: string;
}

const Checkout: React.FC = () => {
  const { cart, getCartTotal, clearCart } = useCart()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  })
  const [errors, setErrors] = useState<Errors>({})
  const [currentStep, setCurrentStep] = useState(1)

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Name is required'
      case 'email':
        return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value) ? '' : 'Invalid email address'
      case 'address':
        return value.trim() ? '' : 'Address is required'
      case 'city':
        return value.trim() ? '' : 'City is required'
      case 'zipCode':
        return /^\d{5}(-\d{4})?$/.test(value) ? '' : 'Invalid ZIP code'
      case 'cardNumber':
        return /^\d{16}$/.test(value) ? '' : 'Invalid card number'
      case 'expiryDate':
        return /^(0[1-9]|1[0-2])\/\d{2}$/.test(value) ? '' : 'Invalid expiry date (MM/YY)'
      case 'cvv':
        return /^\d{3,4}$/.test(value) ? '' : 'Invalid CVV'
      default:
        return ''
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validateField(key, formData[key as keyof FormData])
      if (error) acc[key] = error
      return acc
    }, {} as Errors)

    if (Object.keys(formErrors).length === 0) {
      console.log('Order submitted:', { ...formData, cart, total: getCartTotal() })
      alert('Thank you for your order! This is a demo, so no actual payment has been processed.')
      clearCart()
    } else {
      setErrors(formErrors)
    }
  }

  const steps = ['Shipping', 'Payment', 'Review']

  return (
    <div className="py-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary font-playfair">Checkout</h2>
        
        <div className="flex justify-center mb-8">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index + 1 <= currentStep ? 'bg-primary text-background' : 'bg-gray-600 text-text'
              }`}>
                {index + 1}
              </div>
              <span className={`mx-2 ${index + 1 <= currentStep ? 'text-primary' : 'text-text'}`}>{step}</span>
              {index < steps.length - 1 && (
                <div className={`w-12 h-1 ${index + 1 < currentStep ? 'bg-primary' : 'bg-gray-600'}`}></div>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-secondary p-8 rounded-lg shadow-xl">
          {currentStep === 1 && (
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Shipping Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-2 rounded bg-background text-text border ${errors.name ? 'border-red-500' : 'border-gray-700'} focus:border-primary`}
                  />
                  {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-2 rounded bg-background text-text border ${errors.email ? 'border-red-500' : 'border-gray-700'} focus:border-primary`}
                  />
                  {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-text mb-1">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={`w-full p-2 rounded bg-background text-text border ${errors.address ? 'border-red-500' : 'border-gray-700'} focus:border-primary`}
                  />
                  {errors.address && <p className="mt-1 text-red-500 text-sm">{errors.address}</p>}
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-text mb-1">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full p-2 rounded bg-background text-text border ${errors.city ? 'border-red-500' : 'border-gray-700'} focus:border-primary`}
                  />
                  {errors.city && <p className="mt-1 text-red-500 text-sm">{errors.city}</p>}
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-text mb-1">ZIP Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    className={`w-full p-2 rounded bg-background text-text border ${errors.zipCode ? 'border-red-500' : 'border-gray-700'} focus:border-primary`}
                  />
                  {errors.zipCode && <p className="mt-1 text-red-500 text-sm">{errors.zipCode}</p>}
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Payment Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-text mb-1">Card Number</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className={`w-full p-2 pl-10 rounded bg-background text-text border ${errors.cardNumber ? 'border-red-500' : 'border-gray-700'} focus:border-primary`}
                    />
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                  </div>
                  {errors.cardNumber && <p className="mt-1 text-red-500 text-sm">{errors.cardNumber}</p>}
                </div>
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-text mb-1">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className={`w-full p-2 rounded bg-background text-text border ${errors.expiryDate ? 'border-red-500' : 'border-gray-700'} focus:border-primary`}
                  />
                  {errors.expiryDate && <p className="mt-1 text-red-500 text-sm">{errors.expiryDate}</p>}
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-text mb-1">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    className={`w-full p-2 rounded bg-background text-text border ${errors.cvv ? 'border-red-500' : 'border-gray-700'} focus:border-primary`}
                  />
                  {errors.cvv && <p className="mt-1 text-red-500 text-sm">{errors.cvv}</p>}
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Order Summary</h3>
              <div className="bg-background rounded-lg p-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center mb-4 pb-4 border-b border-gray-700 last:border-b-0 last:mb-0 last:pb-0">
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                      <div>
                        <p className="text-text font-medium">{item.name}</p>
                        <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-text font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <div className="flex justify-between items-center text-lg font-semibold mt-4 pt-4 border-t border-gray-700">
                  <span className="text-primary">Total</span>
                  <span className="text-primary">${getCartTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="bg-gray-600 text-white px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-700 transition duration-300"
              >
                Previous
              </button>
            )}
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="bg-primary text-background px-8 py-3 rounded-full font-semibold text-lg hover:bg-accent transition duration-300 ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="bg-primary text-background px-8 py-3 rounded-full font-semibold text-lg hover:bg-accent transition duration-300 flex items-center justify-center ml-auto"
              >
                <Lock className="mr-2" size={20} />
                Place Order Securely
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout