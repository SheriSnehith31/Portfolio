import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16" id="about">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12 gap-8">
        {/* Left Side: Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/about.png" // Replace with your image URL
            alt="About Me"
            className="w-3/4 sm:w-2/3 lg:w-4/5 rounded-lg shadow-lg hover:scale-105 transition"
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          className="text-white text-center lg:text-left lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg sm:text-xl opacity-80 leading-relaxed">
            I am{" "}
            <span className="text-yellow-400 font-bold">SHERI SNEHITH</span>, A 
            passionate Computer Science student with a solid foundation in programming 
            and problem-solving. Skilled in Python, Java, and web development, I focus on 
            creating innovative, efficient solutions. My love for technology drives me to 
            merge creativity and technical expertise in solving complex challenges.
          </p>

          {/* Education Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Education</h3>
            <p className="text-lg sm:text-xl opacity-80 leading-relaxed">
              <span className="font-bold">Schooling:</span> Narayana High School, <br />
              <span className="font-bold">B.Tech:</span> Sreenidhi Institute of Science and Technology
            </p>
          </div>

          {/* Position Section */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Positions Held</h3>
            <p className="text-lg">
              President of{" "}
              <a
                href="https://www.instagram.com/techvisionclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Tech Vision Club
              </a>
            </p>
          </div>

          <a
            href="#projects"
            className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
