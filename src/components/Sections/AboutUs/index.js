import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { ImageWithDescription } from "../../ImageWithDescription";
import OptimizedImage from "../../OptimizedImage";

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      efficacy: file(relativePath: { eq: "efficacy.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      lightbulb: file(relativePath: { eq: "lightbulb.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      experience: file(relativePath: { eq: "experience.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      trophy: file(relativePath: { eq: "trophy.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      imagePersonal: file(
        relativePath: { eq: "personal_logistica_osprincipes.jpg" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  `);

  const descriptionsAboutUs = [
    {
      image: data.efficacy.childImageSharp.gatsbyImageData,
      imageDescription: "Eficacia",
      description: "SOMOS EFICIENTES",
    },
    {
      image: data.lightbulb.childImageSharp.gatsbyImageData,
      imageDescription: "Foco",
      description: "BRINDAMOS SOLUCIONES",
    },
    {
      image: data.experience.childImageSharp.gatsbyImageData,
      imageDescription: "Experiencia",
      description: "PERSONALIZAMOS EL SERVICIO",
    },
    {
      image: data.trophy.childImageSharp.gatsbyImageData,
      imageDescription: "Calidad",
      description: "NOS IDENTIFICA LA CALIDAD",
    },
  ];

  return (
    <section id="about-us" className="min-h-screen text-white">
      <div className="container mx-auto px-6 py-12" data-aos="fade-up">
        {/* Título */}

        <h1 className="text-3xl lg:text-4xl font-bold text-yellow-300 pb-6 text-center">
          ¿Quiénes somos?
        </h1>

        {/* Texto principal */}
        <p className="text-lg lg:text-xl text-center max-w-4xl mx-auto">
          En{" "}
          <span className="text-yellow-300 font-bold">
            Logística Los Príncipes
          </span>
          , somos una empresa de transporte y logística comprometida con brindar
          <span className="text-yellow-300 font-bold">
            {" "}
            soluciones integrales
          </span>{" "}
          a nivel nacional. Nos especializamos en llegar a cada rincón del país,
          ofreciendo un servicio confiable y eficiente que satisface las
          necesidades de nuestros clientes.
        </p>

        {/* Historia */}
        <p className="text-lg lg:text-xl text-center max-w-4xl mx-auto mt-6">
          Con{" "}
          <span className="text-yellow-300 font-bold">
            más de 30 años de experiencia
          </span>{" "}
          en el rubro, comenzamos como una{" "}
          <span className="text-yellow-300 font-bold">empresa familiar</span>, y
          gracias al esfuerzo y la dedicación, nos hemos consolidado como un
          <span className="text-yellow-300 font-bold">
            {" "}
            referente en logística
          </span>{" "}
          en todo el país.
        </p>
        <p className="text-lg lg:text-xl text-center max-w-4xl mx-auto mb-10">
          Más que un proveedor, buscamos ser un{" "}
          <span className="text-yellow-300 font-bold">socio estratégico </span>
          para cada uno de nuestros clientes, priorizando la excelencia y el
          compromiso en cada proyecto. Nuestro objetivo es garantizar que sus
          operaciones logísticas sean exitosas y seguras.
        </p>

        {/* Sección responsiva */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Descripciones */}
          <div className="grid grid-cols-2 gap-6" data-aos="fade-up">
            {descriptionsAboutUs.map((data, index) => (
              <ImageWithDescription
                key={index}
                {...data}
                className="filter invert sepia hue-rotate-180 saturate-200"
              />
            ))}
          </div>

          {/* Imagen */}
          <div
            data-aos="fade-left"
            className="flex justify-center items-center"
          >
            <div className="w-64 h-64 lg:w-96 lg:h-96 overflow-hidden rounded-full shadow-lg">
              <OptimizedImage
                imageData={data.imagePersonal}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
