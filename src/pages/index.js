import React, { useEffect } from "react";
import AOS from "aos";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Sections/Home";
import AboutUs from "../components/Sections/AboutUs";
import Services from "../components/Sections/Services";
import Contact from "../components/Sections/Contact";
import SEO from "../components/SEO";

const IndexPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duración de las animaciones (en ms)
      easing: "ease-in-out", // Tipo de animación
      once: true, // Si quieres que se ejecute solo una vez al hacer scroll
    });
  }, []);

  return (
    <>
      <SEO
        title="Logística Los Príncipes"
        description="Logística Los Príncipes. Expertos en transporte y soluciones logísticas personalizadas."
        keywords="logística, transporte, soluciones logísticas, carga"
        image="https://www.tusitio.com/images/og-image.jpg"
        url="https://www.tusitio.com"
      />
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-yellow-500 via-blue-500 to-yellow-700 text-white">
        {/* <main className="min-h-screen bg-gradient-to-br from-blue-700 via-yellow-400 to-blue-900 text-white"> alterno */}
        <Home />
        <AboutUs />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
