import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

// Hero Section component - Professional shadcn/ui design
function HeroSection() {
  return (
    <section className="relative px-6 lg:px-12 py-20 min-h-[90vh] bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-900 to-emerald-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-br from-emerald-500 to-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-75"></div>

      <div className="relative flex flex-col lg:flex-row items-center max-w-7xl mx-auto gap-12">
        {/* Left side - Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Main heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            From{" "}
            <span className="bg-gradient-to-r from-blue-900 to-emerald-600 bg-clip-text text-transparent">
              Code to Cart
            </span>
            <br />
            <span className="text-3xl lg:text-5xl">
              Your Complete Online Selling Solution
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            We build your store, market your products, and grow your sales — all
            in one place. Transform your business idea into a thriving online
            empire.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* <Button size="lg" className="bg-gradient-to-r from-blue-900 to-emerald-600 hover:from-blue-800 hover:to-emerald-500 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              🚀 Get Started Now
            </Button> */}

            {/* <Button variant="outline" size="lg" className="text-blue-900 border-blue-900 hover:bg-blue-50 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              📅 Book Free Demo
            </Button> */}
          </div>
        </div>

        {/* Right side - Enhanced Illustration */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8 text-center">
                {/* Process Flow Illustration */}
                <div className="space-y-6">
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      💻
                    </div>
                    <p className="text-slate-700 font-semibold mt-3">
                      Code & Design
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-900 to-emerald-600"></div>
                  </div>

                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-600 to-emerald-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      🛒
                    </div>
                    <p className="text-slate-700 font-semibold mt-3">
                      E-commerce Store
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-emerald-600 to-slate-600"></div>
                  </div>

                  <div className="relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-slate-600 to-slate-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg ">
                      📈
                    </div>
                    <p className="text-slate-700 font-semibold mt-3">
                      Sales Growth
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
