import React from "react";
import { motion } from "framer-motion";

import cartLogo from "../../assets/icons/cart.png";
import certificateLogo from "../../assets/icons/certificate.png";
import platformLogo from "../../assets/icons/platform.png";

function OurWork() {
  const projects = [
    {
      title: "Satkar Restaurant",
      desc: "A modern e-commerce platform for a restaurant, enabling online orders and deliveries.",
      link: "https://satkar-restaurant.vercel.app/",
      logo: cartLogo,
    },
    {
      title: "PSR Enterprises",
      desc: "A modern e-commerce platform for a dry fruits, enabling online orders.",
      link: "https://www.psrenterprises.store/",
      logo: cartLogo,
    },
    {
      title: "Gledam",
      desc: "A modern e-commerce platform for a Protein, enabling online orders and deliveries.",
      link: "https://gledam.vercel.app/",
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

  // Duplicate array for infinite loop effect
  const repeatedProjects = [...projects, ...projects];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
        <p className="text-gray-600 mb-10">
          Here’s a glimpse of the impactful projects we’ve delivered for our
          clients.
        </p>

        {/* Auto-scroll container */}
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }} // moves half way (since we doubled items)
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {repeatedProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white min-w-[300px] rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex-shrink-0"
            >
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
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg bg-white hover:bg-blue-600 hover:text-white transition"
                >
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default OurWork;
