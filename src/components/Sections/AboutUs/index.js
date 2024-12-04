import React from "react";



const AboutUs = () => {
  return (
    <section id="about-us" className="h-screen">
      <div className="flex ">
        <div>
        <h1 className="text-3xl font-bold text-yellow-300 pb-6 px-20 flex justify-center">
        ¿Quiénes somos?
      </h1>
      <p className=" text-white lg:text-lg px-20">
        Somos una empresa de transporte y logística comprometida con brindar
        soluciones integrales a nivel nacional. Nos especializamos en llegar a
        cada rincón del país, ofreciendo un servicio confiable y eficiente que
        satisface las necesidades de nuestros clientes
      </p>
      <p className="px-20 mb-10 lg:text-lg">
            Más que un proveedor, buscamos ser un socio estratégico para cada
            uno de nuestros clientes, priorizando la excelencia y el compromiso
            en cada proyecto. Nuestro objetivo es garantizar que sus operaciones
            logísticas sean exitosas y seguras.
          </p>
      <div className="flex px-20" data-aos="fade-up" data-aos-duration="3000">
        <div className="flex-col flex justify-center items-center">
        <img src="/efficacy.png" alt="imagen de un icono de eficacia" className="w-20 h-20 mb-5"/>
        <span className="flex text-center">
          <strong>
            SOMOS EFICIENTES
          </strong>
        </span>
        </div>
        <div className="flex-col flex justify-center items-center">
        <img src="/lightbulb.png" alt="imagen de una lampara" className="w-20 h-20 mb-5"/>
        <span className="flex text-center">
          <strong>
            BRINDAMOS SOLUCIONES
          </strong>
        </span>
        </div>
        <div className="flex-col flex justify-center items-center">
        <img src="/experience.png" alt="imagen de una persona con estrellas para indicar la personalizacion de servicio" className="w-20 h-20 mb-5"/>
        <span className="flex text-center">
          <strong>
            PERSONALIZAMOS EL SERVICIO
          </strong>
        </span>
        </div>
        <div className="flex-col flex justify-center items-center">
        <img src="/trophy.png" alt="imagen de un trofeo indicando la calidad del mismo" className="w-20 h-20 mb-5"/>
        <span className="flex text-center">
          <strong>
            NOS IDENTIFICA LA CALIDAD
          </strong>
        </span>
        </div>
      </div>
        </div>
        <div data-aos="fade-left" className=" flex items-center">
        <div className="w-96 h-96 overflow-hidden rounded-full">
        <img
          src="/logistica_losprincipes.jpg"
          alt="Logística"
          className="w-full h-full object-cover"
        />
      </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
