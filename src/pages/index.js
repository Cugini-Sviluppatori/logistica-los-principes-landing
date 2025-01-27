import React, { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Sections/Home";
import AboutUs from "../components/Sections/AboutUs";
import Services from "../components/Sections/Services";
import Contact from "../components/Sections/Contact";
import SEO from "../components/SEO";
import WhatsAppButton from "../components/WhatsappButton";

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
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 text-white">
        {/* <main className="min-h-screen bg-gradient-to-br from-gray-800 via-blue-900 to-gray-700 text-white"> */}
        <Home />
        <AboutUs />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default IndexPage;
