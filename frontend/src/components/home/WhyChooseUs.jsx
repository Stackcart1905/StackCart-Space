import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"

// Why Choose Us component 
function WhyChooseUs() {
  const features = [
    {
      icon: "🎯",
      title: "End-to-End Service",
      description: "From coding to marketing - we handle everything so you can focus on your business",
      gradient: "from-blue-900 to-blue-700"
    },
    {
      icon: "⚡",
      title: "Fast Delivery",
      description: "Get your online store up and running in just 2-3 weeks, not months",
      gradient: "from-emerald-600 to-emerald-500"
    },
    {
      icon: "💰",
      title: "Affordable Plans",
      description: "Quality service at prices that small and medium businesses can afford",
      gradient: "from-slate-600 to-slate-500"
    },
    {
      icon: "🕒",
      title: "24/7 Support",
      description: "Round-the-clock technical support whenever you need help or have questions",
      gradient: "from-blue-800 to-emerald-600"
    },
    {
      icon: "🎓",
      title: "Industry Expertise",
      description: "Years of experience in e-commerce development and digital marketing",
      gradient: "from-emerald-700 to-blue-800"
    },
    {
      icon: "📈",
      title: "Scalable Solutions",
      description: "Platforms that grow with your business from startup to enterprise level",
      gradient: "from-slate-700 to-emerald-600"
    }
  ]

  return (
    <section className="px-6 lg:px-12 py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-br from-blue-200 to-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      
      {/* Section title */}
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-emerald-600 to-blue-900 bg-clip-text text-transparent">
            Code to Cart?
          </span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We're different because we handle everything from building to selling with unmatched expertise
        </p>
      </div>
      
      {/* Features grid - 6 points in a 3x2 layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16 relative">
        {features.map((feature, index) => (
          <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white">
            <CardHeader className="text-center">
              <div className="relative mb-4">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
    </section>
  )
}

export default WhyChooseUs
