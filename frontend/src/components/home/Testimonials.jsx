import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '../ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { Badge } from '../ui/badge'

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Sample testimonials data - replace with real data when available
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "CEO, TechnoVision Solutions",
      company: "TechnoVision Solutions",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "StackCart transformed our e-commerce vision into reality. Their attention to detail and professional approach exceeded our expectations. The custom solution they built has increased our sales by 150%.",
      date: "March 2024"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Founder, Digital Bharat",
      company: "Digital Bharat",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Working with StackCart was a game-changer for our business. They delivered a robust, scalable platform that handles our growing customer base effortlessly. Highly recommended!",
      date: "February 2024"
    },
    {
      id: 3,
      name: "Arjun Patel",
      role: "Marketing Director, Fashion Bazaar",
      company: "Fashion Bazaar",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "The team at StackCart understood our unique requirements and delivered beyond expectations. The user experience is seamless, and our customers love the new platform.",
      date: "January 2024"
    },
    {
      id: 4,
      name: "Kavya Reddy",
      role: "COO, GreenTech India",
      company: "GreenTech India",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Professional, reliable, and innovative. StackCart helped us launch our marketplace faster than we thought possible. The ongoing support has been exceptional.",
      date: "December 2023"
    }
  ]

  // Sample brand logos - replace with actual client logos
  const brands = [
    { name: "TechnoVision", logo: "/api/placeholder/120/60" },
    { name: "Digital Bharat", logo: "/api/placeholder/120/60" },
    { name: "Fashion Bazaar", logo: "/api/placeholder/120/60" },
    { name: "GreenTech India", logo: "/api/placeholder/120/60" },
    { name: "InnovateIndia", logo: "/api/placeholder/120/60" },
    { name: "NextGen Solutions", logo: "/api/placeholder/120/60" }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [testimonials.length])

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-emerald-500' : 'text-slate-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-900 hover:bg-blue-200">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about working with StackCart.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="mx-4 bg-white border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row items-start gap-8">
                        {/* Testimonial Content */}
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            {renderStars(testimonial.rating)}
                          </div>
                          <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">
                            "{testimonial.text}"
                          </blockquote>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <Avatar className="w-12 h-12">
                                <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                <AvatarFallback className="bg-blue-100 text-blue-900 font-semibold">
                                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="font-semibold text-slate-900">{testimonial.name}</div>
                                <div className="text-sm text-slate-600">{testimonial.role}</div>
                                <div className="text-sm text-blue-900">{testimonial.company}</div>
                              </div>
                            </div>
                            <div className="text-sm text-slate-500 hidden sm:block">
                              {testimonial.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative w-5 h-5 rounded-full border-2 transition-all duration-300 ease-in-out transform ${
                  currentSlide === index 
                    ? 'border-blue-900 bg-blue-900 scale-110 shadow-lg shadow-blue-200' 
                    : 'border-slate-300 bg-transparent hover:border-emerald-600 hover:bg-emerald-50 hover:scale-105'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {/* Inner dot for active state */}
                <span 
                  className={`absolute inset-1 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-white opacity-100' 
                      : 'bg-emerald-600 opacity-0 scale-50'
                  }`}
                />
                
                {/* Animated ring for active state */}
                {currentSlide === index && (
                  <span className="absolute -inset-1 rounded-full border border-blue-300 animate-ping opacity-75"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-900 mb-12">
            Trusted by Industry Leaders
          </h3>
          
          {/* Brand Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-200 transition-all duration-200 w-full max-w-[140px]"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-full h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-200"
                />
                {/* Placeholder overlay for demo */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-slate-400 text-xs font-medium">
                  {brand.name}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          {/* <div className="mt-12 text-center">

            <p className="text-slate-600 mb-4">Ready to join our success stories?</p>
            <button className="bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Your Project
            </button>

          </div> */}


        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-emerald-600 bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-slate-600">Happy Clients</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-emerald-600 bg-clip-text text-transparent mb-2">100+</div>
            <div className="text-slate-600">Projects Completed</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-emerald-600 bg-clip-text text-transparent mb-2">98%</div>
            <div className="text-slate-600">Client Satisfaction</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-emerald-600 bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-slate-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
