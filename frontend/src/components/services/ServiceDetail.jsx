import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { 
  ArrowLeft, 
  Check, 
  Star,
  Clock,
  Users,
  Award
} from "lucide-react";

function ServiceDetail({ service, onBack }) {
  if (!service) return null;

  const Icon = service.icon;
  const colors = getColorClasses(service.color);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Back Button */}
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-8 hover:bg-gray-100"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Services
      </Button>

      {/* Service Header */}
      <div className={`${colors.bg} rounded-2xl p-8 mb-8`}>
        <div className="flex items-start gap-6">
          <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{service.title}</h1>
            <p className={`text-xl ${colors.text} font-medium mb-4`}>{service.subtitle}</p>
            <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
            <div className="flex items-center gap-4 mt-6">
              <Badge className={`${colors.text} bg-white border-2 ${colors.border}`}>
                {service.pricing}
              </Badge>
              <Badge variant="outline">
                <Clock className="w-3 h-3 mr-1" />
                {service.deliveryTime}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Benefits */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start">
                  <Check className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Features & Process */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="w-5 h-5 text-blue-500 mr-2" />
              What's Included
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{feature}</span>
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Button className={`bg-gradient-to-r ${colors.gradient} px-8 py-3 text-lg`}>
          Get Started with {service.title}
        </Button>
      </div>
    </div>
  );
}

// Helper function for colors (same as in Services component)
function getColorClasses(color) {
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
}

export default ServiceDetail;
