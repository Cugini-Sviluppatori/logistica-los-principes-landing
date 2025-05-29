import { graphql, useStaticQuery } from "gatsby";
import { v4 as uuidv4 } from "uuid";

export const useTransportsData = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "transporte_nacional.jpeg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      image2: file(relativePath: { eq: "seguimiento_personalizado.jpeg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      image3: file(relativePath: { eq: "portuario.jpeg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  `);

  const images = [
    { imageData: data.image1.childImageSharp.gatsbyImageData },
    { imageData: data.image2.childImageSharp.gatsbyImageData },
    { imageData: data.image3.childImageSharp.gatsbyImageData },
  ];

  return {
    title: "Servicios de Transporte",
    items: [
      {
        id: uuidv4(),
        title: "Transporte Nacional",
        description:
          "Nuestra flota de última generación garantiza entregas rápidas y confiables a nivel nacional, adaptándonos a las necesidades logísticas de tu negocio.",
        image: images[0],
      },
      {
        id: uuidv4(),
        title: "Seguimiento Personalizado",
        description:
          "Conoce el estado de tus envíos en cada momento con nuestro seguimiento en tiempo real. Te mantenemos informado para que tomes decisiones con confianza.",
        image: images[1],
      },
      {
        id: uuidv4(),
        title: "Retiro portuario",
        description:
          "Realizamos el retiro de contenedores con agilidad, experiencia y seguridad. Gestionando turnos para evitar extracostos y que tu mercadería llegue a su destino sin retrasos.",
        image: images[2],
      },
    ],
  };
};
