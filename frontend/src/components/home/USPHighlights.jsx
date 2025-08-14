import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"

// USP Highlights component 
function USPHighlights() {
  const services = [
    {
      icon: "🚀",
      title: "Website & App Development",
      description: "Build modern, mobile-ready stores that showcase your products beautifully",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: "⚡",
      title: "Product Listing",
      description: "Get your products online fast with professional catalogs and detailed descriptions",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description: "Bring customers to your store with SEO, social media, and targeted advertising",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: "🎯",
      title: "Analytics & Support",
      description: "Track growth, get help anytime with 24/7 support and detailed analytics",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ]

  return (
    <section className="px-6 lg:px-12 py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      
      {/* Section title */}
      <div className="text-center mb-16 relative">
        {/* <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          🔥 Our Core Services
        </Badge> */}
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          Everything You Need to{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Succeed Online
          </span>
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          From concept to conversion, we handle every aspect of your online business journey
        </p>
      </div>
      
      {/* Services grid - 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative">
        {services.map((service, index) => (
          <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white">
            <CardHeader className="text-center">
              <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                  {service.icon}
                </div>
              </div>
              <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      
    </section>
  )
}

export default USPHighlights
