import React from "react";
import { motion } from "framer-motion";

// Logos (make sure they exist in src/assets/icons/)
import cartLogo from "../../assets/icons/cart.png";
import certificateLogo from "../../assets/icons/certificate.png";
import platformLogo from "../../assets/icons/platform.png";

function OurWork() {
  const projects = [
    {
      title: "StackCart Space (Code to Cart)",
      desc: "A modern eCommerce solution helping businesses build, market & sell online.",
      link: "https://www.stackcart.space/",
      logo: cartLogo,
    },
    {
      title: "Certificate Validation",
      desc: "A secure certificate verification platform to validate credentials online.",
      link: "https://stackcart-certify.vercel.app/",
      logo: certificateLogo,
    },
    {
      title: "StackCart Platform",
      desc: "A scalable platform for managing and growing online businesses.",
      link: "https://stack-cart-platforms.vercel.app/",
      logo: platformLogo,
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
        <p className="text-gray-600 mb-10">
          Here’s a glimpse of the impactful projects we’ve delivered for our clients.
        </p>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {/* Logo & Title */}
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src={project.logo}
                    alt="logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">{project.desc}</p>

                {/* Visit Project Button with "More About" style */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg bg-white hover:bg-blue-600 hover:text-white transition"
                >
                  Visit Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurWork;
