import React from "react";
import useActiveSection from "./hooks/useActiveSection";

const Navbar = () => {
  const sections = ["home", "about-us", "services", "contact"];
  const activeSection = useActiveSection(sections);

  const sectionName = {
    home: "Inicio",
    about_us: "Quiénes somos",
    services: "Servicios",
    contact: "Contacto",
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="container mx-auto flex justify-between p-4">
        <h1 className="text-lg font-bold">Logística Los Príncipes</h1>
        <ul className="flex space-x-4">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`hover:text-blue-500 ${
                  activeSection === section ? "text-blue-500 font-bold" : ""
                }`}
              >
                {sectionName[
                  section.replace("-", "_").toLowerCase()
                ].toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
