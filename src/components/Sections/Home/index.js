import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(relativePath: { eq: "flota_losprincipes.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const image = getImage(data.backgroundImage.childImageSharp.gatsbyImageData);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-x-hidden flex justify-center"
    >
      {/* Fondo como imagen */}
      <GatsbyImage
        image={image}
        alt="Fondo de logística"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Capa de contenido superpuesta */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 pointer-events-none"></div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-8 space-y-12">
        {/* Título y descripción */}
        <div className="text-white max-w-4xl mx-auto" data-aos="fade-up">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Somos{" "}
            <span className="text-yellow-300">
              Transporte y Logística Los Príncipes
            </span>
          </motion.h1>
          <motion.p
            className="text-md sm:text-lg md:text-2xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Más de <strong className="text-yellow-300">30 años</strong>{" "}
            brindando soluciones confiables en{" "}
            <span className="underline decoration-yellow-300">
              <strong>Transporte y Logística.</strong>
            </span>
          </motion.p>
          <motion.button
            className="bg-yellow-300 text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contáctanos
          </motion.button>
        </div>

        {/* Sección de Servicios */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white max-w-6xl mx-auto"
          data-aos="fade-up"
        >
          <motion.div
            className="bg-gray-800 bg-opacity-50 text-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-2">Almacenamiento Seguro</h3>
            <p>1400 m² dedicados a proteger tu mercadería.</p>
          </motion.div>
          <motion.div
            className="bg-gray-800 bg-opacity-50 text-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-2">Transporte Confiable</h3>
            <p>Flota moderna para transporte nacional e internacional.</p>
          </motion.div>
          <motion.div
            className="bg-gray-800 bg-opacity-50 text-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-2">Control de Inventario</h3>
            <p>Gestión en tiempo real para tu tranquilidad.</p>
          </motion.div>
        </div>

        {/* Testimonios y estadísticas */}
        <div
          className="text-white max-w-6xl mx-auto space-y-4"
          data-aos="fade-up"
        >
          <motion.p
            className="text-lg sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <strong className="text-yellow-300">+500</strong> clientes confían
            en nosotros.
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <strong className="text-yellow-300">+1M</strong> de kilómetros
            recorridos cada año.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Home;
