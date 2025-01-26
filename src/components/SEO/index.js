import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title = "Logística Los Príncipes",
  description = "Especialistas en transporte y soluciones logísticas.",
  keywords = "logística, transporte, carga, soluciones logísticas",
  image = "/default-image.jpg", // descargar una imagen.
  url = "https://www.tusitio.com", // www.logistica.losprincipes.com.ar
}) => {
  return (
    <Helmet>
      {/* Metadatos básicos */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Logística Los Príncipes" />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
