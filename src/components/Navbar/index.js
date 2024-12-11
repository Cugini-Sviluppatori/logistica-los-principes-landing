import React, { useState } from "react";
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";

import useActiveSection from "./hooks/useActiveSection";
import OptimizedImage from "../OptimizedImage";

const Navbar = () => {
  const sections = ["home", "about-us", "services", "contact"];
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const imageLogo = data.logo.childImageSharp.gatsbyImageData;
  const activeSection = useActiveSection(sections);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sectionName = {
    home: "Inicio",
    about_us: "Quiénes somos",
    services: "Servicios",
    contact: "Contacto",
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 transition-all duration-300 bg-white bg-opacity-80 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <div className="h-12 w-12 md:h-16 md:w-16 rounded-full overflow-hidden transition-transform duration-300 hover:scale-105">
            <OptimizedImage
              imageData={imageLogo}
              className="w-full h-full object-cover"
              alt="Logística Los Príncipes"
            />
          </div>

          {/* Texto */}
          <h1 className="m-0 text-xl md:text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition-colors">
            Logística Los Príncipes
          </h1>
        </a>

        {/* Botón hamburguesa para móvil */}
        <button
          className="block md:hidden text-2xl text-gray-600 hover:text-white transition-colors focus:outline-none active:text-white"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Menú normal para escritorio */}
        <ul className="hidden md:flex space-x-8">
          {sections.map((section, index) => (
            <motion.li
              key={section}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <a
                href={`#${section}`}
                className={`px-2 py-1 text-gray-600 font-medium hover:text-blue-600 transition-all duration-300 ${
                  activeSection === section ? "text-blue-600 font-bold" : ""
                }`}
              >
                {sectionName[
                  section.replace("-", "_").toLowerCase()
                ].toUpperCase()}
              </a>
              {/* Indicador animado */}
              <span
                className={`absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  activeSection === section ? "scale-x-100" : ""
                }`}
              />
            </motion.li>
          ))}
        </ul>

        {/* Menú desplegable para móvil */}
        {isMenuOpen && (
          <motion.ul
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white shadow-lg origin-top md:hidden"
          >
            {sections.map((section) => (
              <li key={section} className="border-b">
                <a
                  href={`#${section}`}
                  className={`block p-4  text-gray-600 font-medium hover:bg-gray-100 hover:text-blue-600 transition-all ${
                    activeSection === section ? "text-blue-600 font-bold" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {sectionName[
                    section.replace("-", "_").toLowerCase()
                  ].toUpperCase()}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
