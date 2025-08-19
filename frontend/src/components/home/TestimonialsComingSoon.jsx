import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'

function TestimonialsComingSoon() {
  // Placeholder brand logos for companies you're targeting or have worked with
  const targetBrands = [
    { name: "Enterprise Solutions", placeholder: true },
    { name: "Tech Innovations", placeholder: true },
    { name: "Digital Commerce", placeholder: true },
    { name: "Growth Partners", placeholder: true },
    { name: "Scale Ventures", placeholder: true },
    { name: "Future Tech", placeholder: true }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Client Success Stories
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Building Success Stories Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're working with amazing clients to deliver exceptional e-commerce solutions. 
            Their success stories are coming soon!
          </p>
        </div>

        {/* Coming Soon Testimonials */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample testimonial cards showing what's coming */}
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Client Testimonials</h3>
                <p className="text-gray-600 text-sm">
                  Amazing feedback from our satisfied clients coming soon. 
                  We're building something special together!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Success Metrics</h3>
                <p className="text-gray-600 text-sm">
                  Impressive results and ROI statistics from our completed projects 
                  will be showcased here.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-200 md:col-span-2 lg:col-span-1">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Case Studies</h3>
                <p className="text-gray-600 text-sm">
                  Detailed success stories showcasing our problem-solving approach 
                  and innovative solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partnership Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Ready to Partner with Industry Leaders
          </h3>
          
          {/* Placeholder Brand Logos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-12">
            {targetBrands.map((brand, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 w-full max-w-[140px]"
              >
                <div className="w-full h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded flex items-center justify-center">
                  <span className="text-gray-500 text-xs font-medium text-center px-2">
                    {brand.name}
                  </span>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="inline-block w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h4 className="text-2xl font-bold mb-4">Be Our Next Success Story</h4>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied clients who have transformed their business 
              with our custom e-commerce solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
                View Our Work
              </button>
            </div>
          </div>
        </div>

        {/* Commitment Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-600">Commitment to Quality</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Dedicated Support</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
            <div className="text-gray-600">Innovative Solutions</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">1st</div>
            <div className="text-gray-600">Priority: Your Success</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsComingSoon
