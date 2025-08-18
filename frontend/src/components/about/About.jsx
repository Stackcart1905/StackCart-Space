import Navigation from "../navbar/Navigation";
import Footer from "../footer/Footer";
import { Crown, Code, Monitor, Palette, Server } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navigation />

      {/* Hero Section with background */}
      <section
        className="relative h-72 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative text-5xl font-extrabold">About Us</h1>
      </section>

      {/* Main Content */}
      <main className="flex-1 px-6 md:px-20 py-16">
        {/* Company Story */}
        <section className="mb-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6 text-emerald-600">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Code to Cart was founded with one mission: to simplify the way
            businesses bring their products online. We believe that every idea
            deserves a place in the digital marketplace. What started as a small
            initiative to help local sellers has now grown into a platform that
            empowers entrepreneurs, startups, and established businesses alike
            to launch beautiful, functional, and scalable online stores.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="p-8 bg-gradient-to-r from-blue-50 to-white shadow-lg rounded-2xl hover:scale-105 transition">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to make e-commerce accessible to everyone, no
              matter their technical background. We aim to provide user-friendly
              tools and solutions that transform ideas into successful online
              stores.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-r from-emerald-50 to-white shadow-lg rounded-2xl hover:scale-105 transition">
            <h2 className="text-2xl font-bold mb-4 text-emerald-600">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to become the go-to platform for creators and
              entrepreneurs worldwide—where anyone can turn their passion into a
              thriving online business.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-extrabold mb-10 text-center text-gray-900">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Founder & CEO */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition group">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Crown className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Anshu Raj</h3>
              <p className="text-orange-600 font-semibold mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Leading StackCart with vision and innovation, driving the company's strategic growth and empowering businesses to thrive online.
              </p>
            </div>

            {/* Technical Lead */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition group">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Rohit Anand</h3>
              <p className="text-blue-600 font-semibold mb-3">Technical Lead</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Architecting robust solutions and leading our development team to deliver cutting-edge e-commerce platforms with excellence.
              </p>
            </div>

            {/* Frontend Developer - Milind */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition group">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Monitor className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Milind Singh</h3>
              <p className="text-emerald-600 font-semibold mb-3">Frontend Developer</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Creating beautiful, responsive user interfaces that deliver exceptional user experiences across all devices and platforms.
              </p>
            </div>

            {/* Frontend Developer - Ritika */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition group">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Ritika Kumtia</h3>
              <p className="text-pink-600 font-semibold mb-3">Frontend Developer</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Crafting intuitive and engaging frontend solutions with attention to detail and modern design principles.
              </p>
            </div>

            {/* Backend Developer */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition group md:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Server className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Prince Singh</h3>
              <p className="text-purple-600 font-semibold mb-3">Backend Developer</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Building scalable backend systems and APIs that power our e-commerce solutions with security and performance in mind.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
