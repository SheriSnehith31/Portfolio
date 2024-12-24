import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          Portfolio
        </h1>

        {/* Links */}
        <ul className="hidden sm:flex space-x-6 md:space-x-8 items-center text-sm sm:text-base font-medium">
          <li>
            <button
              onClick={scrollToTop}
              className="hover:text-yellow-400 transition"
            >
              Home
            </button>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 items-center">
          <a
            href="https://github.com/SheriSnehith31"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/snehith-sheri-b3000126a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition"
            style={{ color: "#0077b5" }}
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://www.instagram.com/snehithreddy___/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transform transition"
            style={{ color: "#e1306c" }}
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
