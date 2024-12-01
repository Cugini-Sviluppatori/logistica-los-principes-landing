import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";

const OptimizedImage = ({
  imageData,
  alt,
  className = "",
  layout = "constrained",
  width = "auto",
  height = "auto",
  placeholder = "blurred",
}) => {
  const image = getImage(imageData);

  return (
    <GatsbyImage
      image={image}
      alt={alt}
      className={className}
      layout={layout}
      width={width}
      height={height}
      placeholder={placeholder}
    />
  );
};

OptimizedImage.propTypes = {
  imageData: PropTypes.object.isRequired, // Datos de la imagen obtenidos por GraphQL
  alt: PropTypes.string.isRequired, // Descripción de la imagen
  className: PropTypes.string, // Clases adicionales de CSS
  layout: PropTypes.string, // Layout de la imagen (fixed, constrained, fullWidth)
  width: PropTypes.number, // Ancho opcional
  height: PropTypes.number, // Alto opcional
  placeholder: PropTypes.string, // Tipo de placeholder (blurred, dominantColor, none)
};

export default OptimizedImage;
