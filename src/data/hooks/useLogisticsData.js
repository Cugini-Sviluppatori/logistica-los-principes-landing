import { graphql, useStaticQuery } from "gatsby";
import { v4 as uuidv4 } from "uuid";

export const useLogisticsData = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "flota_losprincipes.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      image2: file(relativePath: { eq: "flota_losprincipes01.jpeg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
      image3: file(relativePath: { eq: "flota_losprincipes02.jpeg" }) {
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
    title: "Servicios de Logística",
    items: [
      {
        id: uuidv4(),
        title: "Almacenamiento de Mercadería",
        description:
          "Disponemos de 1400 m² de espacio seguro, diseñado para proteger tu mercadería y garantizar su integridad. Nuestro servicio se adapta a las necesidades de tu negocio, brindándote almacenamiento confiable y flexible.",
        image: images[0],
      },
      {
        id: uuidv4(),
        title: "Desconsolidado de Cargas",
        description:
          "Simplifica la recepción y organización de tus envíos con nuestro servicio de desconsolidado. Optimizamos cada paso para garantizar una entrega rápida y sin contratiempos.",
        image: images[1],
      },
      {
        id: uuidv4(),
        title: "Control de Inventario",
        description:
          "Mantén el control total de tu inventario en tiempo real con nuestras soluciones tecnológicas. Evita quiebres de stock y asegura la disponibilidad de tus productos cuando más lo necesitas.",
        image: images[2],
      },
      {
        id: uuidv4(),
        title: "Armado de Pedidos",
        description:
          "Personalizamos cada pedido según tus especificaciones, asegurando precisión y rapidez en la preparación para maximizar la satisfacción de tus clientes.",
        image: images[0],
      },
      {
        id: uuidv4(),
        title: "Exportaciones e Importaciones",
        description:
          "Facilitamos tus operaciones de comercio internacional con un manejo eficiente de trámites aduaneros, asegurando entregas seguras y en tiempo.",
        image: images[1],
      },
    ],
  };
};
