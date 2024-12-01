import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import CarouselCustom from "../../CarouselCustom";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "flota_losprincipes.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      image2: file(relativePath: { eq: "flota_losprincipes01.jpeg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      image3: file(relativePath: { eq: "flota_losprincipes02.jpeg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);

  const images = [
    { imageData: data.image1.childImageSharp.gatsbyImageData },
    { imageData: data.image2.childImageSharp.gatsbyImageData },
    { imageData: data.image3.childImageSharp.gatsbyImageData },
  ];

  return (
    <section
      id="home"
      className="h-screen flex items-center px-8 md:px-16 lg:px-32"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        <div className="text-white flex-column center" data-aos="fade-right">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Bienvenido a{" "}
            <span className="text-yellow-300">Logística Los Príncipes</span>
          </h1>
          <p className="text-lg lg:text-xl mb-6">
            Con más de <strong>30 años de experiencia</strong> en logística y
            transporte, ofrecemos soluciones confiables, seguras y rápidas para
            ayudarte a mover tu negocio hacia adelante.
          </p>
          <button
            className="bg-yellow-300 text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300"
            data-aos="zoom-in"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contáctanos
          </button>
        </div>

        <div className="w-full max-w-4xl mx-auto" data-aos="fade-up">
          <CarouselCustom imagesData={images} className="rounded-lg" />

          <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-300 opacity-30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-green-400 opacity-20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
