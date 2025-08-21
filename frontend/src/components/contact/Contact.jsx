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
  Send,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { useState } from "react";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: "", // 'success' or 'error'
    message: "",
  });

  const showNotification = (type, message) => {
    setNotification({
      show: true,
      type,
      message,
    });

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get form data
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      // Call backend API
      const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        showNotification(
          "success",
          "Message sent successfully! We'll get back to you within 24 hours."
        );
        e.target.reset(); // Clear the form
      } else {
        showNotification(
          "error",
          "Failed to send message. Please try again or contact us directly."
        );
      }
    } catch (error) {
      showNotification(
        "error",
        "An unexpected error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = "Hi! I'm interested in your web development services.";
    const phoneNumber = "1234567890"; // Replace with your actual WhatsApp number
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Notification Toast */}
      {notification.show && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border-l-4 min-w-80 transform transition-all duration-300 ${
            notification.type === "success"
              ? "bg-green-50 border-green-400 text-green-800"
              : "bg-red-50 border-red-400 text-red-800"
          }`}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              {notification.type === "success" ? (
                <CheckCircle className="h-5 w-5 text-green-400" />
              ) : (
                <XCircle className="h-5 w-5 text-red-400" />
              )}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{notification.message}</p>
            </div>
            <div className="ml-auto pl-3">
              <button
                onClick={() =>
                  setNotification((prev) => ({ ...prev, show: false }))
                }
                className="inline-flex text-gray-400 hover:text-gray-600"
              >
                <XCircle className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div
        className="relative text-white py-24 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2074&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In
            <span className="text-blue-400"> Touch</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss your project and
            create something amazing together.
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
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </CardHeader>

                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="name"
                          className="text-sm font-medium text-gray-700"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          required
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-sm font-medium text-gray-700"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-sm font-medium text-gray-700"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 9876654321"
                          className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="business-type"
                          className="text-sm font-medium text-gray-700"
                        >
                          Business Type
                        </Label>
                        <select
                          id="business-type"
                          name="businessType"
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
                      <Label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700"
                      >
                        Project Details *
                      </Label>
                      <Textarea
                        id="projectDetails"
                        name="projectDetails"
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.2947418861944!2d77.09583731508205!3d28.70184938239947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b85b4b6c5a7%3A0x4b8b4b8b4b8b4b8b!2sSector%205%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1692360728000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location - Sector 5, Rohini, Delhi"
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
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Office Address
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Sector-5, Rohini
                        <br />
                        Delhi-110085
                        <br />
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
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-600 text-sm">+91 9289916169</p>
                      <p className="text-gray-500 text-xs">
                        Mon - Sat, 9AM - 6PM IST
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h4>
                      <p className="text-gray-600 text-sm">info@stackcart.in</p>
                      <p className="text-gray-500 text-xs">
                        We reply within 24 hours
                      </p>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Follow Us
                    </h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/p/StackCart-61572672278830/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center text-white transition-colors duration-300"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-slate-700 hover:bg-slate-800 rounded-lg flex items-center justify-center text-white transition-colors duration-300"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/stackcart11/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-lg flex items-center justify-center text-white transition-colors duration-300"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/stackcart-in/"
                        target="_blank"
                        rel="noopener noreferrer"
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
