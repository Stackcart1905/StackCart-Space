import Navigation from "../navbar/Navigation";
import Footer from "../footer/Footer";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowUpRight, TrendingUp, Users, DollarSign, Eye } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      screenshot: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      title: "Modern Fashion Store",
      description: "Complete e-commerce solution with payment integration and inventory management.",
      tag: "Fashion Store",
      category: "E-commerce",
      duration: "3 months",
      results: {
        revenue: "300%",
        traffic: "250%",
        conversion: "180%"
      },
      beforeAfter: {
        before: "Basic static site with no online sales",
        after: "Full e-commerce with 300% increase in sales"
      },
      successStory: "Helped a local boutique go from $5K to $20K monthly revenue in 6 months.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"]
    },
    {
      id: 2,
      screenshot: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      title: "Electronics Marketplace",
      description: "Multi-vendor platform with advanced search and filtering capabilities.",
      tag: "Electronics",
      category: "Marketplace",
      duration: "4 months",
      results: {
        revenue: "400%",
        traffic: "350%",
        conversion: "220%"
      },
      beforeAfter: {
        before: "No online presence, losing customers to competitors",
        after: "Leading online electronics store with 500+ products"
      },
      successStory: "Increased customer base by 400% and reduced customer acquisition cost by 60%.",
      technologies: ["Vue.js", "Laravel", "PayPal", "MySQL"]
    },
    {
      id: 3,
      screenshot: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
      title: "Restaurant Chain Website",
      description: "Online ordering system with location-based menus and delivery tracking.",
      tag: "Restaurant",
      category: "Food Service",
      duration: "2 months",
      results: {
        revenue: "200%",
        traffic: "180%",
        conversion: "160%"
      },
      beforeAfter: {
        before: "Phone orders only, missed 70% of potential customers",
        after: "Full online ordering system with mobile app"
      },
      successStory: "Online orders now make up 80% of total sales, doubled revenue during pandemic.",
      technologies: ["React Native", "Express", "PostgreSQL", "Stripe"]
    },
    {
      id: 4,
      screenshot: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      title: "Professional Services Firm",
      description: "Corporate website with client portal and appointment booking system.",
      tag: "Professional Services",
      category: "Corporate",
      duration: "2.5 months",
      results: {
        revenue: "150%",
        traffic: "200%",
        conversion: "190%"
      },
      beforeAfter: {
        before: "Outdated website, manual appointment scheduling",
        after: "Modern site with automated booking and client management"
      },
      successStory: "Reduced admin workload by 50% and increased client inquiries by 200%.",
      technologies: ["Next.js", "Firebase", "Tailwind", "Calendly API"]
    },
    {
      id: 5,
      screenshot: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80",
      title: "Fitness Studio Platform",
      description: "Class booking system with membership management and online payments.",
      tag: "Fitness",
      category: "Health & Fitness",
      duration: "3.5 months",
      results: {
        revenue: "180%",
        traffic: "220%",
        conversion: "170%"
      },
      beforeAfter: {
        before: "Paper-based booking, payment collection issues",
        after: "Digital platform with automated billing and scheduling"
      },
      successStory: "Streamlined operations and increased membership retention by 35%.",
      technologies: ["Angular", "Node.js", "Stripe", "Socket.io"]
    },
    {
      id: 6,
      screenshot: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      title: "Local Services Directory",
      description: "Community platform connecting local businesses with customers.",
      tag: "Directory",
      category: "Local Business",
      duration: "4 months",
      results: {
        revenue: "250%",
        traffic: "300%",
        conversion: "200%"
      },
      beforeAfter: {
        before: "Scattered local businesses with no central platform",
        after: "Unified directory with 200+ verified local businesses"
      },
      successStory: "Created a thriving local ecosystem, 10K+ monthly active users.",
      technologies: ["React", "Django", "PostgreSQL", "Google Maps API"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <div 
        className="relative text-white py-24 overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2426&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Portfolio & 
            <span className="text-blue-400"> Case Studies</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover how we've transformed businesses with cutting-edge web solutions. 
            Real projects, real results, real success stories.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 rounded-xl">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.screenshot}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800">
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  {/* Header */}
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="text-xs mb-3">
                      {project.tag}
                    </Badge>
                  </div>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">{project.description}</p>

                  {/* Results - Compact */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <span className="text-sm font-bold text-green-600">+{project.results.revenue}</span>
                      <p className="text-xs text-gray-600">Revenue</p>
                    </div>
                    <div className="text-center">
                      <span className="text-sm font-bold text-blue-600">+{project.results.traffic}</span>
                      <p className="text-xs text-gray-600">Traffic</p>
                    </div>
                    <div className="text-center">
                      <span className="text-sm font-bold text-purple-600">+{project.results.conversion}</span>
                      <p className="text-xs text-gray-600">Conversion</p>
                    </div>
                  </div>

                  {/* Success Story - Compact */}
                  <div className="mb-4 p-3 bg-yellow-50 rounded-lg border-l-3 border-yellow-400">
                    <p className="text-xs text-gray-700">{project.successStory}</p>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-all duration-300">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;
