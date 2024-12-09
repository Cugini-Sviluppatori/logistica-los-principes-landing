import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./style.css";

import ServiceCard from "../ServiceCard";

const SwiperCustom = ({ data }) => {
  const { title = "Servicios", items = [] } = data || {};

  if (!items || items.length === 0) {
    console.warn("No hay items para mostrar en el Swiper.");
    return null;
  }

  const duplicatedItems = items.length <= 3 ? [...items, ...items] : items;

  const coverflowOptions = {
    rotate: 50, // Menos rotación para suavizar el efecto
    stretch: 10, // Ajusta la separación entre las tarjetas
    depth: 100, // Reduce la profundidad
    modifier: 1, // Suaviza la intensidad general
    slideShadows: true, // Mantén las sombras, pero menos intensas
  };

  return (
    <div className="py-8 px-4">
      <h2 className="text-center text-4xl font-bold text-yellow-400 mb-8">
        {title}
      </h2>
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        navigation
        pagination={false}
        autoplay={{
          delay: 40000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={coverflowOptions}
        className="w-full max-w-7xl mx-auto"
      >
        {duplicatedItems.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex justify-center items-stretch px-2 py-3"
          >
            <ServiceCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCustom;
