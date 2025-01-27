import React from "react";
import OptimizedImage from "../OptimizedImage";

export const ImageWithDescription = ({
  image,
  imageDescription,
  description,
  className = "",
}) => {
  return (
    <div className="flex-col flex justify-center items-center">
      <OptimizedImage
        imageData={image}
        alt={imageDescription}
        className={`w-20 h-20 mb-5 color-white ${className}`}
      />
      <span className="flex text-center">
        <strong>{description}</strong>
      </span>
    </div>
  );
};
