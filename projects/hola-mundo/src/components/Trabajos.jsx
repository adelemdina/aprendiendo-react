import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles, faMobileScreenButton, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import fondo from '../assets/images/Group.png';
const filtros = [
  { label: "Web" },
  { label: "Sistema ERP" },
  { label: "App Móvil" },
  { label: "Ecommerce" },
];

const contenidos = {
  Web: {
    icon: faWandMagicSparkles,
    titulo: "Web Personalizadas",
    descripcion:
      "En Simpatía, te ofrecemos una auditoría SEO exhaustiva para identificar áreas de mejora en tu sitio web...",
    items: [
      "Auditoría SEO: Conoce el estado actual de tu web.",
      "Consultoría SEO: Estrategias personalizadas para tu negocio.",
      "Mejora de posicionamiento web: Aumenta tu visibilidad en Google.",
    ],
    imagen: "./src/assets/images/web.png",
  },
  "Sistema ERP": {
    icon: faMicrosoft, // Puedes cambiar el icono si deseas
    titulo: "Sistemas ERP software integrales",
    descripcion:
      "Entender las métricas clave es esencial para el éxito de tu negocio digital. Te ayudamos a realizar un seguimiento efectivo y a interpretar los datos para mejorar tus resultados.",
    items: [
      "Automatización de procesos internos.",
      "Informes de seguimiento claros y concisos",
      "Toma de decisiones informadas y estratégicas",
    ],
    imagen: "./src/assets/images/sistemas.png",
  },
  "App Móvil": {
    icon: faMobileScreenButton,
    titulo: "App Móvil",
    descripcion:
      "Desarrollamos apps móviles para iOS y Android que ofrecen gran rendimiento, usabilidad y diseño atractivo.",
    items: [
      "Experiencia nativa o híbrida.",
      "Diseño responsive.",
      "Optimización para App Stores.",
    ],
    imagen: "./src/assets/images/app.jpg",
  },
  Ecommerce: {
    icon: faBasketShopping,
    titulo: "Ecommerce",
    descripcion:
      "Creamos ecommerce efectivos y seguros, optimizados para ventas, con pasarelas de pago integradas.",
    items: [
      "Gestión de productos y stock.",
      "Carrito de compras eficiente.",
      "Integración con métodos de pago seguros.",
    ],
    imagen: "./src/assets/images/ECommerce.jpg",
  },
};

export  const Trabajos = () => {
  const [activo, setActivo] = useState("Web");
    const contenidoActual = contenidos[activo];
  return (
  <section className="relative py-16 px-4 text-center h-[860px] overflow-hidden">
  {/* Fondo semitransparente */}
    <div
    className="absolute inset-0 bg-center bg-cover bg-no-repeat"
    style={{ backgroundImage: `url(${fondo})`, opacity: 0.4 }}
  />
   <div className="absolute inset-0 bg-gradient-to-tr from-[#191970] to-[#1a1a2e] opacity-90"></div>
     <div className="relative z-10 text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Conoce los trabajos<br />
        realizados recientemente
      </h2>
      <div className="flex justify-center gap-4 mt-12">
        {filtros.map((filtro) => (
    <button
            key={filtro.label}
            onClick={() => setActivo(filtro.label)}
            className={`px-5 py-2 rounded-full border border-[#5e5eaa] font-medium transition-colors duration-300
                ${activo === filtro.label
                ? "bg-mi-gradiente text-white shadow"
                : "bg-transparent text-white hover:bg-red-100 hover:border-[#7d7dd1]"}
            `}
            >
            {filtro.label}
            </button>
        ))}
      </div>
     

    <div className="max-w-7xl mx-auto bg-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow mt-8">
  {/* Columna de texto */}
  <div className="flex-1 text-left">
    <div className="mb-4">
      <FontAwesomeIcon
        icon={contenidoActual.icon}
        className="text-indigo-700 mb-6 text-[42px]"
      />
    </div>
    <h2 className="text-4xl font-bold text-neutral-900 mb-4">
      {contenidoActual.titulo}
    </h2>
    <p className="text-neutral-700 mb-6">{contenidoActual.descripcion}</p>
    <ul className="space-y-2 text-neutral-800">
      {contenidoActual.items.map((item, index) => (
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
      className="rounded-xl w-full max-w-md object-cover"
    />
  </div>
</div>

<div className="overflow-hidden w-screen h-[220px] mt-1">
  <div className="flex animate-marquee whitespace-nowrap">
    <p className="text-white font-semibold text-[120px] leading-[220px] pr-[4rem]">
      ¡Transformamos tus ideas!
    </p>
    <p className="text-white font-semibold text-[120px] leading-[220px] pr-[4rem]">
      ¡Transformamos tus ideas!
    </p>
  </div>
</div>
</div>
    </section>
  );
}