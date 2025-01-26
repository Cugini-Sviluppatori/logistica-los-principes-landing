import React from "react";
import SwiperCustom from "../../SwiperCustom";
import { useTransportsData } from "../../../data/hooks/useTransportsData";
import { useLogisticsData } from "../../../data/hooks/useLogisticsData";

const Services = () => {
  const transportsData = useTransportsData();
  const logisticsData = useLogisticsData();

  return (
    <section
      id="services"
      className="px-8 md:px-16 lg:px-32 flex-col items-center"
    >
      <div
        className="w-full max-w-7xl text-center mb-12 mx-auto"
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-extrabold text-yellow-300 mb-4">
          Nuestros Servicios
        </h1>
        <p className="text-lg lg:text-xl text-center max-w-4xl mx-auto mt-6">
          En{" "}
          <span className="text-yellow-300 font-bold">
            Logística Los Príncipes
          </span>
          , nos especializamos en brindar soluciones integrales que combinan
          tecnología, experiencia y un compromiso inquebrantable con la calidad.
          Nuestro objetivo es optimizar cada etapa de la cadena de suministro y
          transporte, ofreciendo servicios personalizados que se adaptan a las
          necesidades específicas de cada cliente.
        </p>
        <p className="text-lg lg:text-xl text-center max-w-4xl mx-auto mt-6">
          Ya sea que necesites transporte confiable, almacenamiento seguro o un
          seguimiento detallado, estamos aquí para garantizar que tus
          operaciones logísticas se desarrollen de manera eficiente y sin
          complicaciones. ¡Déjanos mover tu negocio hacia el éxito!
        </p>
      </div>

      <div className="mb-4" data-aos="fade-right">
        <SwiperCustom data={transportsData} />
      </div>

      <div data-aos="fade-left">
        <SwiperCustom data={logisticsData} />
      </div>
    </section>
  );
};

export default Services;
