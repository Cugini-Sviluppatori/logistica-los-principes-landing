import React from "react";

import OptimizedImage from "../OptimizedImage";

const ServiceCard = ({ image, title, description }) => {
  const handlerClick = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative bg-blue-700 p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 max-w-lg mx-auto h-full">
      <div className="overflow-hidden rounded-lg">
        <OptimizedImage
          imageData={image.imageData}
          alt={`flota 01`}
          className="w-full h-60 object-cover rounded-lg shadow-md border-2 border-yellow-300"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold text-yellow-300 mb-3">{title}</h3>
        <p className="text-gray-100 text-sm line-clamp-10">{description}</p>
        <button
          className="mt-4 bg-yellow-300 text-blue-700 font-bold py-2 px-4 rounded-full hover:bg-yellow-400 hover:shadow-lg transition duration-300 flex items-center justify-center"
          onClick={handlerClick}
        >
          <span className="mr-2">Consultar Servicio</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h14M12 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
