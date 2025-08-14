import { Badge } from "../ui/badge"
import { Card, CardContent } from "../ui/card"

// How It Works component - Professional shadcn/ui design
function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "💡",
      title: "You Share Your Business Idea",
      description: "Tell us about your business, products, and vision for your online store",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      icon: "🛠️",
      title: "We Build Your Custom Platform",
      description: "Custom website development with all your products listed and optimized",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      icon: "📢",
      title: "We Market Your Products",
      description: "Strategic digital marketing campaigns to drive traffic and customers",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      number: "04",
      icon: "💰",
      title: "You Start Getting Sales",
      description: "Watch your business grow with continuous sales and ongoing support",
      gradient: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="px-6 lg:px-12 py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      
      {/* Section title */}
      <div className="text-center mb-16 relative">
        
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          How It{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Works
          </span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Our proven 4-step process takes you from idea to profitable online business
        </p>
      </div>
      
      {/* Steps container - Enhanced Timeline */}
      <div className="max-w-7xl mx-auto relative">
        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 rounded-full transform -translate-y-1/2"></div>
            
            {/* Steps */}
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      {/* Step number and icon */}
                      <div className="relative mb-6">
                        <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {step.icon}
                        </div>
                        <Badge className={`absolute -top-2 -right-2 bg-gradient-to-br ${step.gradient} text-white text-sm`}>
                          {step.number}
                        </Badge>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-24 w-1 h-16 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              )}
              
              <Card className="ml-6 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                      {step.icon}
                    </div>
                    <Badge className={`mt-2 bg-gradient-to-br ${step.gradient} text-white text-xs`}>
                      {step.number}
                    </Badge>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  )
}

export default HowItWorks
