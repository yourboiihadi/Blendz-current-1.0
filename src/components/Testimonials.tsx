import React, { useRef, useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: "John Doe",
    quote: "HusseinBlendz transformed my look completely. The attention to detail is unmatched!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "Jane Smith",
    quote: "I've never felt more confident. The team here truly understands what it means to craft a personalized style.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  },
  {
    name: "Mike Johnson",
    quote: "From the moment I walked in, I knew I was in good hands. The experience was top-notch from start to finish.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "Emily Davis",
    quote: "HusseinBlendz doesn't just cut hair, they craft confidence. I leave feeling like a new person every time!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "Alex Rodriguez",
    quote: "The level of expertise here is unparalleled. They don't just follow trends, they set them.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    name: "Sarah Thompson",
    quote: "I've been to many barbers, but HusseinBlendz is in a league of their own. Absolutely worth every penny!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
  }
]

const Testimonials = () => {
  const scrollRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        setShowLeftArrow(scrollLeft > 0)
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
      }
    }

    scrollRef.current?.addEventListener('scroll', handleScroll)
    return () => scrollRef.current?.removeEventListener('scroll', handleScroll)
  }, [])

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = current.clientWidth * 0.8
      current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-secondary relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 text-primary font-playfair">Client Testimonials</h2>
        <div className="relative">
          {showLeftArrow && (
            <button 
              onClick={() => scroll(-1)} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-background rounded-full p-2 z-10 shadow-lg transition-all duration-300 hover:bg-accent"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          {showRightArrow && (
            <button 
              onClick={() => scroll(1)} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-background rounded-full p-2 z-10 shadow-lg transition-all duration-300 hover:bg-accent"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
          <div 
            ref={scrollRef} 
            className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide scroll-smooth px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-primary hover:shadow-lg transform hover:-translate-y-2 flex-shrink-0 w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)]">
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                  <div>
                    <p className="text-primary font-semibold">{testimonial.name}</p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-text mb-4 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials