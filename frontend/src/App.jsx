import { useState, useEffect } from 'react'
import HomePage from './components/home/HomePage'
import About from './components/about/About'
import Services from './components/services/Services'
import PricingPlans from './components/pricing/PricingPlans'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import { 
  TermsConditions, 
  PrivacyPolicy, 
  ContactUs, 
  CancellationRefundPolicy 
} from './components/policies'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Simple routing based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home'
      setCurrentPage(hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange() // Set initial page

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'services':
        return <Services />
      case 'portfolio':
        return <Portfolio />
      case 'pricing':
        return <PricingPlans />
      case 'contact':
        return <Contact />
      case 'terms':
        return <TermsConditions />
      case 'privacy':
        return <PrivacyPolicy />
      case 'shipping':
        return <ShippingDeliveryPolicy />
      case 'contact-us':
        return <ContactUs />
      case 'refund':
        return <CancellationRefundPolicy />
      case 'home':
      default:
        return <HomePage />
    }
  }

  return renderPage()
}

export default App
