import React from "react";
import Slider from "react-slick";
import OptimizedImage from "../OptimizedImage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselCustom = ({
  imagesData,
  altPrefix = "Image",
  className = "",
}) => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    fade: true,
    responsive: [
      {
        breakpoint: 768, // Configuración para pantallas más pequeñas
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <div className={`relative ${className}`}>
      <Slider {...settings}>
        {imagesData.map((image, index) => (
          <div key={index} className="px-2">
            <OptimizedImage
              imageData={image.imageData}
              alt={`${altPrefix} ${index + 1}`}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselCustom;
