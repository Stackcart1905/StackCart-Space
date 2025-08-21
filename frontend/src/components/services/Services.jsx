import Navigation from "../navbar/Navigation";
import Footer from "../footer/Footer";
import { Button } from "../ui/button";
import { Card, CardContent, CardTitle } from "../ui/card";
import { 
  Globe, 
  ShoppingCart, 
  TrendingUp, 
  Palette, 
  Headphones, 
  ArrowRight,
  Users,
  Zap,
  Shield,
  Award
} from "lucide-react";

function Services() {
  const services = [
    {
      id: 1,
      title: "Website Development",
      subtitle: "Responsive & SEO-friendly",
      description: "Custom websites that look stunning on all devices and rank high on search engines.",
      icon: Globe,
      color: "blue"
    },
    {
      id: 2,
      title: "Product Listing & Catalog",
      subtitle: "Complete catalog setup",
      description: "Professional product catalogs with advanced search and inventory management.",
      icon: ShoppingCart,
      color: "emerald"
    },
    {
      id: 3,
      title: "Digital Marketing",
      subtitle: "Social media, SEO & ads",
      description: "Comprehensive marketing strategies to boost your online presence and sales.",
      icon: TrendingUp,
      color: "purple"
    },
    {
      id: 4,
      title: "Branding & Graphics",
      subtitle: "Complete visual identity",
      description: "Professional branding and graphic design to make your business stand out.",
      icon: Palette,
      color: "pink"
    },
    {
      id: 5,
      title: "Customer Support",
      subtitle: "24/7 support systems",
      description: "Complete customer support systems with chat, helpdesk, and knowledge base.",
      icon: Headphones,
      color: "orange"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-600",
        gradient: "from-blue-500 to-blue-600",
        hover: "hover:bg-blue-100"
      },
      emerald: {
        bg: "bg-emerald-50",
        border: "border-emerald-200", 
        text: "text-emerald-600",
        gradient: "from-emerald-500 to-emerald-600",
        hover: "hover:bg-emerald-100"
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        text: "text-purple-600", 
        gradient: "from-purple-500 to-purple-600",
        hover: "hover:bg-purple-100"
      },
      pink: {
        bg: "bg-pink-50",
        border: "border-pink-200",
        text: "text-pink-600",
        gradient: "from-pink-500 to-pink-600", 
        hover: "hover:bg-pink-100"
      },
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-600",
        gradient: "from-orange-500 to-orange-600",
        hover: "hover:bg-orange-100"
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" 
            alt="Services Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Our <span className="text-yellow-400 drop-shadow-lg">Services</span>
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Transform your business with our comprehensive e-commerce solutions
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of services designed to help your business thrive online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              const colors = getColorClasses(service.color);
              
              return (
                <Card 
                  key={service.id}
                  className={`group relative overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer`}
                >
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    
                    <p className={`text-sm font-medium ${colors.text} mb-3`}>
                      {service.subtitle}
                    </p>
                    
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* <Button 
                      className={`w-full bg-gradient-to-r ${colors.gradient} hover:shadow-lg transition-all duration-300 group text-sm`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button> */}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results through expertise, innovation, and dedication
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified professionals with years of experience"
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                description: "Quick turnaround times without compromising quality"
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Enterprise-grade security and 99.9% uptime"
              },
              {
                icon: Award,
                title: "Award-Winning",
                description: "Recognized for excellence in web development"
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Services;
