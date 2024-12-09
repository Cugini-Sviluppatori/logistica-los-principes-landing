import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import { ImageWithDescription } from "../../ImageWithDescription";
import OptimizedImage from '../../OptimizedImage'

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      efficacy: file(relativePath: { eq: "efficacy.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      lightbulb: file(relativePath: { eq: "lightbulb.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      experience: file(relativePath: { eq: "experience.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      trophy: file(relativePath: { eq: "trophy.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      imagePersonal: file(relativePath: { eq: "personal_logistica_osprincipes.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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
    <section id="about-us" className="h-screen">
      <div className="flex ">
        <div>
          <h1 className="text-3xl font-bold text-yellow-300 pb-6 px-20 flex justify-center">
            ¿Quiénes somos?
          </h1>
          <p className=" text-white lg:text-lg px-20">
            Somos una empresa de transporte y logística comprometida con brindar
            soluciones integrales a nivel nacional. Nos especializamos en llegar
            a cada rincón del país, ofreciendo un servicio confiable y eficiente
            que satisface las necesidades de nuestros clientes
          </p>
          <p className="px-20 mb-10 lg:text-lg">
            Más que un proveedor, buscamos ser un socio estratégico para cada
            uno de nuestros clientes, priorizando la excelencia y el compromiso
            en cada proyecto. Nuestro objetivo es garantizar que sus operaciones
            logísticas sean exitosas y seguras.
          </p>
          <div
            className="flex px-20"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            {descriptionsAboutUs.map((data) => {
              return (
                <ImageWithDescription
                {...data}
                />
              );
            })}
          </div>
        </div>
        <div data-aos="fade-left" className=" flex items-center">
          <div className="w-96 h-96 overflow-hidden rounded-full">
          <OptimizedImage imageData={data.imagePersonal} className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
