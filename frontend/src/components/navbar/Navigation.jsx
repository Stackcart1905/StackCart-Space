import { Button } from "../ui/button"

// Navigation component - Professional shadcn/ui design
function Navigation() {
  return (
    <nav className="flex justify-between items-center px-6 lg:px-12 py-4 bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-slate-200">
      {/* Logo section */}
      <div className="flex items-center space-x-3">
        <div className="relative">

          {/* Refined Logo SVG - Professional Navy & Emerald */}

          <svg width="40" height="40" viewBox="0 0 40 40" className="relative z-10">

            {/* Gradient definitions */}
            <defs>
              <linearGradient id="navLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E3A8A" />
                <stop offset="50%" stopColor="#1E40AF" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
              <linearGradient id="navCodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Background container */}
            <rect width="40" height="40" rx="8" fill="url(#navLogoGradient)" opacity="0.1"/>
            
            {/* Shopping cart body - more accurate proportions */}
            <rect x="8" y="14" width="20" height="12" rx="2" 
                  fill="none" 
                  stroke="url(#navLogoGradient)" 
                  strokeWidth="2" 
                  strokeLinecap="round"/>
            
            {/* Cart handle */}
            <path d="M6 10h4l1 4" 
                  fill="none" 
                  stroke="url(#navLogoGradient)" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
            
            {/* Cart wheels - better positioned */}
            <circle cx="13" cy="30" r="2" fill="url(#navCodeGradient)" opacity="0.8"/>
            <circle cx="23" cy="30" r="2" fill="url(#navCodeGradient)" opacity="0.8"/>
            
            {/* Code brackets - cleaner design */}
            <path d="M12 18l-2 2 2 2" 
                  stroke="url(#navCodeGradient)" 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  filter="url(#glow)"/>
            <path d="M24 18l2 2-2 2" 
                  stroke="url(#navCodeGradient)" 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  filter="url(#glow)"/>
            
            {/* Central code element - forward slash */}
            <path d="M19 18l-2 4" 
                  stroke="url(#navLogoGradient)" 
                  strokeWidth="2" 
                  strokeLinecap="round"/>
            
            {/* Digital transformation arrow */}
            <path d="M15 8l3 3-3 3" 
                  stroke="url(#navCodeGradient)" 
                  strokeWidth="1.5" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  opacity="0.7"/>
          </svg>
          
          {/* Refined glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-emerald-500/5 rounded-lg"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-emerald-600 bg-clip-text text-transparent">
            Code to Cart
          </span>
          <span className="hidden sm:block text-xs text-slate-500 font-medium tracking-wider">
            BUILD • MARKET • SELL
          </span>
        </div>
      </div>
      
      {/* Menu items */}
      <div className="hidden md:flex gap-8 items-center">
        <a href="#home" className="text-slate-700 hover:text-blue-900 font-medium transition-all duration-200 hover:scale-105">
          Home
        </a>
        <a href="#about" className="text-slate-700 hover:text-blue-900 font-medium transition-all duration-200 hover:scale-105">
          About
        </a>
        <a href="#services" className="text-slate-700 hover:text-blue-900 font-medium transition-all duration-200 hover:scale-105">
          Services
        </a>
        <a href="#portfolio" className="text-slate-700 hover:text-blue-900 font-medium transition-all duration-200 hover:scale-105">
          Portfolio
        </a>
        <a href="#pricing" className="text-slate-700 hover:text-blue-900 font-medium transition-all duration-200 hover:scale-105">
          Pricing
        </a>
        <a href="#contact" className="text-slate-700 hover:text-blue-900 font-medium transition-all duration-200 hover:scale-105">
          Contact
        </a>
        
        {/* CTA Button */}
        <Button className="bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          Get Started
        </Button>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <Button variant="ghost" className="p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </nav>
  )
}

export default Navigation
