import Navigation from "../navbar/Navigation";
import Footer from "../footer/Footer";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send
} from "lucide-react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in your web development services.";
    const phoneNumber = "1234567890"; // Replace with your actual WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <div 
        className="relative text-white py-24 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2074&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In 
            <span className="text-blue-400"> Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss your project and create something amazing together.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Side - Contact Form */}
            <div>
              <Card className="shadow-xl border-0 rounded-2xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Mail className="w-6 h-6 mr-3" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-blue-100 mt-2">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          required
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 9876654321"
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <Label htmlFor="business-type" className="text-sm font-medium text-gray-700">
                          Business Type
                        </Label>
                        <select 
                          id="business-type"
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                        >
                          <option value="">Select your business type</option>
                          <option value="ecommerce">E-commerce</option>
                          <option value="restaurant">Restaurant</option>
                          <option value="fashion">Fashion</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="education">Education</option>
                          <option value="technology">Technology</option>
                          <option value="real-estate">Real Estate</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={5}
                        required
                        className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>

                  
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Map and Contact Info */}
            <div className="space-y-8">
              
              {/* Google Maps Embed */}
              <Card className="shadow-xl border-0 rounded-2xl overflow-hidden">
                <div className="h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.228624842691!2d77.15203101508237!3d28.69460398240248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d030866062d81%3A0x9f2d09f40c1b13e5!2sPacific%20Mall%20NSP%20Pitampura!5e0!3m2!1sen!2sin!4v1692360728000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="shadow-xl border-0 rounded-2xl">
                <CardHeader className="bg-gray-900 text-white p-6">
                  <CardTitle className="text-xl font-bold">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        NSP Pacific Mall<br />
                        Pitampura<br />
                        Delhi, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600 text-sm">+91 9897654345</p>
                      <p className="text-gray-500 text-xs">Mon - Sat, 9AM - 6PM IST</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600 text-sm">hello@stackcart.com</p>
                      <p className="text-gray-500 text-xs">We reply within 24 hours</p>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white transition-colors duration-300"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-lg flex items-center justify-center text-white transition-colors duration-300"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-lg flex items-center justify-center text-white transition-colors duration-300"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-lg flex items-center justify-center text-white transition-colors duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
