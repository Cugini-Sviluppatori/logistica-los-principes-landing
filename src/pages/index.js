import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../components/Sections/Home";
import AboutUs from "../components/Sections/AboutUs";
import Services from "../components/Sections/Services";
import Contact from "../components/Sections/Contact";
import SEO from "../components/SEO";

const IndexPage = () => (
  <>
    <SEO
      title="Logística Los Príncipes"
      description="Logística Los Príncipes. Expertos en transporte y soluciones logísticas personalizadas."
      keywords="logística, transporte, soluciones logísticas, carga"
      image="https://www.tusitio.com/images/og-image.jpg"
      url="https://www.tusitio.com"
    />
    <Navbar />
    <main>
      <Home />
      <AboutUs />
      <Services />
      <Contact />
    </main>
    <Footer />
  </>
);

export default IndexPage;
