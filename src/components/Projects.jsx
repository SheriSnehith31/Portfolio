import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "SNIST JARVIS",
      description:
        "A SNIST Jarvis assistant built using Python and PyQt5 with features like app control, email, and weather updates.",
      imageUrl: "/images/google.png", // Replace with your project image URLs
      link: "https://github.com/SheriSnehith31/JARVIS", // Replace with the link to the project
      tech: "Python, PyQt5, OpenCV, MediaPipe",
    },
    {
      title: "Traffic Sign Classification",
      description:
        "A traffic sign recognition system developed using deep neural networks for accurate detection and classification of road signs.",
      imageUrl: "/images/cafe.png", // Replace with your project image URLs
      link: "https://github.com/SheriSnehith31/traffic-sign-recognition", // Replace with the link to the project
      tech: "Dnn, TensorFlow, PyTorch",
    },
  ];

  const publications = [
    {
      title: "TRAFFIC SIGN CLASSIFICATION",
      description: "A research project focused on classifying traffic signs using deep neural networks, ensuring accurate recognition and enhancing road safety systems.",
      link: "https://ijcrt.org/papers/IJCRT2407582.pdf",
    },
  ];

  const patents = [
      {
        title: "LOCALIZED FOOD AND NUTRIENT INFORMATION SYSTEM",
        description:
          "A patent for a system that provides localized food and nutrient information to help users make informed dietary choices based on regional availability.",
        status: "Filed",
        number: "Patent Number: 202441051666",
      },
      {
        title: "INSTITUTIONAL VEHICLE POOLING SYSTEM",
        description:
          "A patent for a system aimed at optimizing institutional vehicle pooling to reduce costs, enhance convenience, and minimize environmental impact.",
        status: "Filed",
        number: "Patent Number: 202441052990",
      },
      {
        title: "BLOCKCHAIN-BASED CERTIFICATE VERIFICATION SYSTEM",
        description:
          "A patent for a blockchain-based solution ensuring secure and tamper-proof verification of academic and professional certificates.",
        status: "Filed",
        number: "Patent Number: 202441051665",
      },
      
  ];

  return (
    <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16 px-6 lg:px-12" id="projects">
      {/* Heading */}
      <motion.h2
        className="text-5xl font-bold text-yellow-400 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col sm:flex-row items-center sm:items-start bg-gradient-to-r ${
              index < 3 ? "from-gray-800 via-gray-700 to-black" : "from-gray-900 via-gray-800 to-black"
            } rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image */}
            <div className="w-full sm:w-1/2 h-36 sm:h-48">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="p-4 sm:p-6 flex flex-col justify-between sm:w-1/2">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <p className="text-gray-400 text-sm mb-4">{project.tech}</p>
              <div className="w-full sm:w-1/2">
                <a
                  href={project.link}
                  className="bg-yellow-300 text-gray-800 px-4 py-1 rounded-full hover:bg-yellow-500 transition-all w-full sm:w-auto"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Publications Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-yellow-400 text-center mb-12">Publications</h2>
        <div className="container mx-auto space-y-6">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800 via-gray-700 to-black p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-yellow-400">{publication.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{publication.description}</p>
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-300 text-gray-800 px-4 py-1 rounded-full hover:bg-yellow-500 transition-all"
              >
                View Publication
              </a>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Patents Section */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-yellow-400 text-center mb-12">Patents</h2>
        <div className="container mx-auto space-y-6">
          {patents.map((patent, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800 via-gray-700 to-black p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-yellow-400">{patent.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{patent.description}</p>
              <p className="text-gray-400 text-sm mb-4">
                <strong>Status:</strong> {patent.status}
              </p>
              <p className="text-gray-400 text-sm mb-4">
                <strong>{patent.number}</strong>
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
