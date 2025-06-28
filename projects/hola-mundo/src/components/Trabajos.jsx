
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles, faMobileScreenButton, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { ParticlesBackground } from "./ParticlesBackground";
import { useTranslation } from 'react-i18next';

export const Trabajos = () => {

  const iconMap = {
  faWandMagicSparkles,
  faMicrosoft,
  faMobileScreenButton,
  faBasketShopping,
};


  const [activo, setActivo] = useState("Web");
    
const [t] = useTranslation("global");
const filtros = t("trabajos.filtros", { returnObjects: true });
const contenidoActual = t(`trabajos.${activo}`, { returnObjects: true });

 
  return (
      
<section className="relative py-16 px-4 text-center min-h-screen w-screen overflow-hidden bg-indigo-950">

<div className="absolute top-0 left-0 w-full h-full z-0 hidden lg:block">
  <ParticlesBackground id="particles-trabajos" />
</div>
  <div className="relative z-10 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {t("trabajos.titulo1")}<br />
         {t("trabajos.titulo2")}
      </h2>
      <div className="flex justify-center gap-4 mt-12">
        {filtros.map((filtro) => (
    <button
            key={filtro}
            onClick={() => setActivo(filtro)}
            className={`px-5 py-2 rounded-full border border-[#5e5eaa] font-medium transition-colors duration-300
                ${activo === filtro
                ? "bg-mi-gradiente text-white shadow"
                : "bg-transparent text-white hover:bg-red-100 hover:border-[#7d7dd1]"}
            `}
            >
            {filtro}
            </button>
        ))}
      </div>
     

   <div className="max-w-7xl mx-auto bg-white rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow mt-8 min-h-[390px]">
      {/* <div className="max-w-7xl mx-auto bg-white rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col-reverse md:flex-row items-center gap-8 shadow mt-8 min-h-[390px]"></div> */}
  {/* Columna de texto */}
  <div className="flex-1 text-left">
    <div className="mb-4">
      <FontAwesomeIcon
      icon={iconMap[contenidoActual.icon]}
        className="text-indigo-700 mb-6 text-[42px]"
      />
    </div>
    <h2 className="text-4xl font-bold text-neutral-900 mb-4">
   {contenidoActual.titulo}
    </h2>
    <p className="text-neutral-700 mb-6">{contenidoActual.descripcion}</p>
    <ul className="space-y-2 text-neutral-800">
  {Array.isArray(contenidoActual.items) && contenidoActual.items.map((item, index) => (
    <li key={index} className="flex items-start gap-2">
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-blue-400">
        <svg
          className="w-4 h-4 text-blue-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      {item}
    </li>
  ))}
</ul>
  </div>

  {/* Columna de imagen */}
  <div className="flex-1 flex justify-center">
    <img
      src={contenidoActual.imagen}
      alt={contenidoActual.titulo}
       className="rounded-xl w-full object-cover
    max-w-[320px] sm:max-w-[320px] md:max-w-md lg:max-w-lg"
    />
  </div>
</div>
<div>
  <a
  href=""
  className="bg-secondary inline-flex items-center rounded-full px-6 py-2.5 font-medium text-write transition-colors shadow mt-9 hover:bg-white hover:text-secondary group"
>
  <span className="transition-transform duration-300 group-hover:-translate-y-1">
    {t("contact.contact")}
  </span>
  <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-white group-hover:bg-secondary ml-8 text-secondary bg-white rounded-full w-8 h-8 flex justify-center items-center text-2xl">
    ↗
  </span>
</a>
        
</div>
<div className="overflow-hidden w-screen h-[120px] sm:h-[160px] md:h-[220px] mt-[-12px] sm:mt-0">
  <div className="flex animate-marquee whitespace-nowrap">
   <p className="text-white font-semibold text-[60px] sm:text-2xl md:text-[120px] leading-[110px] sm:leading-[160px] md:leading-[220px] pr-[2rem] sm:pr-[3rem] md:pr-[4rem]">
  {t("leading.titulo")}
</p>
   <p className="text-white font-semibold text-5xl sm:text-2xl md:text-[120px] leading-[110px] sm:leading-[160px] md:leading-[220px] pr-[2rem] sm:pr-[3rem] md:pr-[4rem]">
  {t("leading.titulo")}
</p>
  </div>
</div>
</div>
{/*       
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Trabajos</h1>
        <p className="text-xl">Este es un ejemplo con partículas de fondo.</p>
      </div> */}
    </section>
  );
};
