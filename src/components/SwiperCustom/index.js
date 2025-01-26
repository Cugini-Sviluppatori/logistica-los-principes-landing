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

  /** this is necessary for the carousel */
  const duplicatedItems = items.length <= 3 ? [...items, ...items] : items;

  const coverflowOptions = {
    rotate: 20, // Menos rotación para suavizar el efecto
    stretch: 8, // Ajusta la separación entre las tarjetas
    depth: 100, // Reduce la profundidad
    modifier: 1, // Suaviza la intensidad general
    slideShadows: false, // Mantén las sombras, pero menos intensas
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
        centeredSlides={true}
        loop={true}
        breakpoints={{
          641: { slidesPerView: 1 },
          769: { slidesPerView: 2 },
          1025: { slidesPerView: 3 },
          1441: { slidesPerView: 3 },
        }}
        coverflowEffect={coverflowOptions}
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
