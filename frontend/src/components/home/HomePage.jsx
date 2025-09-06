// HomePage component - putting all sections together
import Navigation from '../navbar/Navigation'
import HeroSection from './HeroSection'
import USPHighlights from './USPHighlights'
import WhyChooseUs from './WhyChooseUs'
import Footer from '../footer/Footer'
import HowItWorks from './HowItWorks'
import Testimonials from './Testimonials'
import OurWork from "./OurWork"; 
function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navigation />
      
      
      <main className="flex-1">
        <HeroSection />
        <USPHighlights />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
          <OurWork />
      </main>
      
      
      <Footer />
    </div>
  )
}

export default HomePage
