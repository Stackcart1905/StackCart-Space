import Navigation from "../navbar/Navigation";
import Footer from "../footer/Footer";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  ArrowRight,
  Globe,
  ShoppingCart,
  TrendingUp,
  MessageCircle
} from "lucide-react";

function PricingPlans() {
  const plans = [
    {
      name: 'Starter Plan',
      subtitle: 'Perfect for small businesses',
      description: 'Basic site + listing',
      icon: Globe,
      price: 4999,
      originalPrice: 6999,
      popular: false,
      color: 'blue',
      features: [
        'Responsive Website (5 pages)',
        'Product Listing (up to 50 products)',
        'Basic SEO Setup',
        'Contact Form Integration',
        'Mobile-Optimized Design',
        'SSL Certificate',
        '1 Month Free Support',
        'Basic Analytics'
      ],
      notIncluded: [
        'Advanced Marketing',
        'Custom Integrations',
        'Priority Support'
      ]
    },
    {
      name: 'Growth Plan',
      subtitle: 'Most popular choice',
      description: 'Site + marketing',
      icon: TrendingUp,
      price: 8999,
      originalPrice: 11999,
      popular: true,
      color: 'emerald',
      features: [
        'Everything in Starter Plan',
        'Unlimited Products',
        'Social Media Marketing Setup',
        'Google Ads Campaign Setup',
        'Email Marketing Integration',
        'Advanced Analytics Dashboard',
        'Payment Gateway Integration',
        'Inventory Management System',
        '3 Months Free Support',
        'SEO Optimization'
      ],
      notIncluded: [
        'Custom Integrations',
        'White-label Solution'
      ]
    },
    {
      name: 'Premium Plan',
      subtitle: 'Complete business solution',
      description: 'Everything + analytics',
      icon: Crown,
      price: 12999,
      originalPrice: 17999,
      popular: false,
      color: 'purple',
      features: [
        'Everything in Growth Plan',
        'Advanced Analytics & Reports',
        'Custom API Integrations',
        'Priority 24/7 Support',
        'Performance Optimization',
        'Security Monitoring',
        'Backup & Recovery',
        'A/B Testing Tools',
        'Multi-language Support',
        'Custom Dashboard',
        '6 Months Free Support',
        'White-label Solution'
      ],
      notIncluded: []
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-200',
        button: 'bg-blue-600 hover:bg-blue-700',
        gradient: 'from-blue-500 to-blue-600',
        ring: 'ring-blue-500'
      },
      emerald: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-600',
        border: 'border-emerald-200',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        gradient: 'from-emerald-500 to-emerald-600',
        ring: 'ring-emerald-500'
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200',
        button: 'bg-purple-600 hover:bg-purple-700',
        gradient: 'from-purple-500 to-purple-600',
        ring: 'ring-purple-500'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div 
        className="relative text-white py-24 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Choose Your Perfect
            <span className="text-blue-400"> Plan</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
            Transparent pricing for every business size. No hidden fees, no surprises. 
            Start small and scale as you grow.
          </p>
          <Badge className="bg-green-500 text-white text-sm px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            Limited Time: 30% OFF All Plans
          </Badge>
        </div>
      </div>

      {/* Pricing Cards - 3 Column Layout */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const colors = getColorClasses(plan.color);
              
              return (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden transition-all duration-500 hover:shadow-2xl border-0 rounded-2xl group ${
                    plan.popular 
                      ? `ring-2 ${colors.ring} scale-105 shadow-2xl` 
                      : 'hover:scale-105 shadow-xl'
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className={`absolute top-0 left-0 right-0 bg-gradient-to-r ${colors.gradient} text-white text-center py-3 text-sm font-semibold`}>
                      <Star className="w-4 h-4 inline mr-2" />
                      MOST POPULAR CHOICE
                    </div>
                  )}
                  
                  {/* Header */}
                  <CardHeader className={`${colors.bg} ${plan.popular ? 'pt-16' : 'pt-8'} pb-6 text-center`}>
                    <div className="flex items-center justify-center mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </CardTitle>
                    <p className={`${colors.text} font-semibold text-lg mb-2`}>
                      {plan.subtitle}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-8">
                    {/* Pricing */}
                    <div className="text-center mb-8 p-6 bg-gray-50 rounded-2xl">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-4xl font-bold text-gray-900">
                          ₹{plan.price}
                        </span>
                        {plan.originalPrice && (
                          <span className="text-lg text-gray-500 line-through">
                            ₹{plan.originalPrice}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm">One-time payment</p>
                      {plan.originalPrice && (
                        <Badge className="mt-2 bg-green-100 text-green-700">
                          Save ₹{plan.originalPrice - plan.price}
                        </Badge>
                      )}
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        What's Included:
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Not Included */}
                      {plan.notIncluded.length > 0 && (
                        <div className="mt-6">
                          <h5 className="text-sm font-medium text-gray-500 mb-3">Not included in this plan:</h5>
                          <ul className="space-y-2">
                            {plan.notIncluded.map((feature, i) => (
                              <li key={i} className="flex items-start gap-3 opacity-60">
                                <div className="w-5 h-5 rounded-full border-2 border-gray-300 mt-0.5 flex-shrink-0"></div>
                                <span className="text-gray-500 text-sm line-through">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className={`w-full ${colors.button} text-white font-semibold py-4 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl`}
                    >
                      {plan.popular ? 'Get Started Now' : 'Choose This Plan'}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <p className="text-center text-xs text-gray-500 mt-3">
                      30-day money-back guarantee
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {/* Contact for Custom Quote */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-100">
              <MessageCircle className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Need Something Custom?</h3>
              <p className="text-gray-600 mb-6">
                Have specific requirements? Let's discuss a custom solution tailored to your business needs.
              </p>
              {/* <Button variant="outline" className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-xl transition-all duration-300">
                <MessageCircle className="w-4 h-4 mr-2" />
                Contact us for custom quotes
              </Button> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PricingPlans;
