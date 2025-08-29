import { Separator } from "../ui/separator"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"

// Footer component 
function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 lg:px-12 pt-10 pb-4 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div>
      
      {/* Main footer content */}
      <div className="relative">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto mb-5">

          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">

                {/* Refined Logo SVG - More accurate design */}
                <svg width="48" height="48" viewBox="0 0 48 48" className="relative z-10">

                  {/* Gradient definitions */}
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="50%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#A78BFA" />
                    </linearGradient>
                    <filter id="footerGlow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Background container with rounded corners */}
                  <rect width="48" height="48" rx="12" fill="url(#logoGradient)" opacity="0.1"/>
                  <rect x="4" y="4" width="40" height="40" rx="8" fill="url(#logoGradient)" opacity="0.08"/>
                  
                  {/* Shopping cart body - accurate proportions */}
                  <rect x="10" y="17" width="24" height="14" rx="2" 
                        fill="none" 
                        stroke="url(#logoGradient)" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"/>
                  
                  {/* Cart handle - realistic design */}
                  <path d="M8 12h5l1.5 5" 
                        fill="none" 
                        stroke="url(#logoGradient)" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"/>
                  
                  {/* Cart wheels - properly positioned */}
                  <circle cx="16" cy="36" r="2.5" fill="url(#codeGradient)" opacity="0.9"/>
                  <circle cx="28" cy="36" r="2.5" fill="url(#codeGradient)" opacity="0.9"/>
                  
                  {/* Code brackets - clean and prominent */}
                  <path d="M15 21l-3 3 3 3" 
                        stroke="url(#codeGradient)" 
                        strokeWidth="3" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        filter="url(#footerGlow)"/>
                  <path d="M29 21l3 3-3 3" 
                        stroke="url(#codeGradient)" 
                        strokeWidth="3" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        filter="url(#footerGlow)"/>
                  
                  {/* Central transformation element - forward slash */}
                  <path d="M23 21l-3 6" 
                        stroke="url(#logoGradient)" 
                        strokeWidth="2.5" 
                        strokeLinecap="round"/>
                  
                  {/* Transformation arrow - showing code to commerce flow */}
                  <path d="M18 9l4 4-4 4" 
                        stroke="url(#codeGradient)" 
                        strokeWidth="2" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        opacity="0.8"/>
                  
                  {/* Digital dots for tech feel */}
                  <circle cx="20" cy="24" r="1" fill="url(#codeGradient)" opacity="0.6"/>
                  <circle cx="24" cy="24" r="1" fill="url(#codeGradient)" opacity="0.6"/>
                </svg>
                
                {/* Enhanced glow background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl blur-lg"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Code to Cart
                </span>
                <span className="text-xs text-slate-400 font-medium tracking-wider">
                  BUILD • MARKET • SELL
                </span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Your complete online selling solution. We build, we market, you sell. Transform your business with our proven system.
            </p>
            
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#home" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 duration-200">
                → Home
              </a>
              <a href="#about" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 duration-200">
                → About Us
              </a>
              <a href="#services" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 duration-200">
                → Services
              </a>
              <a href="#portfolio" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 duration-200">
                → Portfolio
              </a>
              <a href="#contact" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 duration-200">
                → Contact
              </a>
            </div>
          </div>
          
          {/* Company Policies */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">
              Company Policies
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#privacy" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 duration-200">
                → Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 duration-200">
                → Terms & Conditions
              </a>
              
              <a href="#refund" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 duration-200">
                → Refund Policy
              </a>
              <a href="#contact-us" className="text-slate-400 hover:text-white transition-colors hover:translate-x-1 duration-200">
                → Contact Us
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">
              Our Services
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-blue-400">🚀</span>
                <span>Website Development</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-purple-400">⚡</span>
                <span>Product Listing</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-green-400">📈</span>
                <span>Digital Marketing</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-orange-400">🎯</span>
                <span>Analytics & Support</span>
              </div>
            </div>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">
              Get In Touch
            </h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  📧
                </div>
                <span className="text-sm">support@stackcart.in</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 bg-green-600/20 rounded-lg flex items-center justify-center">
                  📞
                </div>
                <span className="text-sm">+91 9289916169</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  📍
                </div>
                <span className="text-sm">Sector-5 ,Rohini,Delhi-110085, IN</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              {/* Twitter (X) */}
              <a href="https://x.com/StackCart11" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center hover:scale-110 hover:from-slate-600 hover:to-slate-700 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-white group-hover:text-slate-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/stackcart11/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-white group-hover:text-pink-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.989.016 6.756.072 5.526.127 4.706.333 3.999.63c-.723.319-1.274.687-1.85 1.266C1.569 2.472 1.2 3.023.881 3.746c-.297.707-.503 1.527-.558 2.757C.266 7.736.25 8.143.25 11.764s.016 4.028.072 5.261c.055 1.23.261 2.05.558 2.757.319.723.687 1.274 1.266 1.85.576.576 1.127.944 1.85 1.263.707.297 1.527.503 2.757.558 1.233.056 1.64.072 5.261.072s4.028-.016 5.261-.072c1.23-.055 2.05-.261 2.757-.558.723-.319 1.274-.687 1.85-1.263.576-.576.944-1.127 1.263-1.85.297-.707.503-1.527.558-2.757.056-1.233.072-1.64.072-5.261s-.016-4.028-.072-5.261c-.055-1.23-.261-2.05-.558-2.757-.319-.723-.687-1.274-1.263-1.85C19.481.569 18.93.201 18.207-.118c-.707-.297-1.527-.503-2.757-.558C14.217.016 13.81 0 10.189 0h1.828zM12.017 2.162c3.556 0 3.976.016 5.382.072 1.298.059 2.003.274 2.473.456.622.242 1.065.532 1.53.997.465.465.755.908.997 1.53.182.47.397 1.175.456 2.473.056 1.406.072 1.826.072 5.382s-.016 3.976-.072 5.382c-.059 1.298-.274 2.003-.456 2.473-.242.622-.532 1.065-.997 1.53-.465.465-.908.755-1.53.997-.47.182-1.175.397-2.473.456-1.406.056-1.826.072-5.382.072s-3.976-.016-5.382-.072c-1.298-.059-2.003-.274-2.473-.456-.622-.242-1.065-.532-1.53-.997-.465-.465-.755-.908-.997-1.53-.182-.47-.397-1.175-.456-2.473C2.178 15.993 2.162 15.573 2.162 12.017s.016-3.976.072-5.382c.059-1.298.274-2.003.456-2.473.242-.622.532-1.065.997-1.53.465-.465.908-.755 1.53-.997.47-.182 1.175-.397 2.473-.456 1.406-.056 1.826-.072 5.382-.072zM12.017 5.838a6.179 6.179 0 1 0 0 12.358 6.179 6.179 0 0 0 0-12.358zm0 10.188a4.009 4.009 0 1 1 0-8.018 4.009 4.009 0 0 1 0 8.018zm7.846-10.405a1.441 1.441 0 1 1-2.883 0 1.441 1.441 0 0 1 2.883 0z"/>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/stackcart-in/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-white group-hover:text-blue-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="https://www.facebook.com/p/StackCart-61572672278830/" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl flex items-center justify-center hover:scale-110 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 cursor-pointer group">
                <svg className="w-5 h-5 text-white group-hover:text-blue-100" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="bg-slate-700 mb-4" />
        
        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-center md:text-left">
            © 2025 Code to Cart. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm text-center md:text-right">
            Made with <span className="text-red-500 animate-pulse">❤️</span> in India
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
