import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; // Import the icons

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-6 px-4 lg:px-12">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center text-gray-300 space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Text */}
        <div className="text-sm sm:text-lg text-gray-400">
          <p>© 2025 Sheri Snehith. All rights reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/snehith-sheri-b3000126a//"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-all"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/SheriSnehith31"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-all"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.instagram.com/snehithreddy___/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition-all"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
