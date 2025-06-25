import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Particles from "@tsparticles/react";


const testimonios = [
  {
    texto:
      "Colaborar con Medina en la app Italian Import Racing fue excepcional. Su experiencia en PHP y MySQL fue clave para crear una tienda en línea eficiente. Su compromiso y profesionalismo garantizan el éxito del proyecto.",
    nombre: "Javier p.",
    cargo: "Colaborador Import Rancing App",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    bandera: "🇺🇸",
  },
  {
    texto:
      "Su trabajo como diseñadora UX/UI, utilizando Figma y Tailwind CSS, impactó significativamente la experiencia del usuario. Sus soluciones centradas en el usuario fueron clave para la ejecución del proyecto.",
    nombre: "Edwin M.",
    cargo: "Product Manager Emacsoft",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    bandera: "🇻🇪",
  },
  {
    texto:
      "Trabajar con Adeleina Medina y su experiencia en PHP, JavaScript y CodeIgniter fue fundamental para mejorar las funcionalidades de nuestro sistema ERP. Altamente recomendada.",
    nombre: "Sebastian I.",
    cargo: "Ing. Informática Sistema ERP",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    bandera: "🇻🇪",
  },
   {
    texto:
      "Adeleimar Medina optimizó procesos administrativos en la empresa al implementar nuevos módulos en ProteoERP, mejorando la gestión de inventario y facturación. Su experiencia en PHP y MySQL fue clave para el éxito del proyecto.",
    nombre: "Edwin Moreno",
    cargo: "Manager Proteo ERP",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    bandera: "🇻🇪",
  },
     {
    texto:
      "Trabajar con ella fue excelente. Desarrolló la parte interna de nuestra aplicación móvil, creando un sistema rápido y confiable. Su compromiso y profesionalismo se reflejaron en soluciones adaptadas a nuestras necesidades.",
    nombre: "Pedro D",
    cargo: "Ing.  Import Racing App",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    bandera: "🇻🇪",
  },

    {
    texto:
      "En el desarrollo del sitio web para Orion AutoCaress, coordiné el proyecto y asigné a Adeleimar como guía técnica del equipo backend. Su liderazgo y creación de funciones claves fueron fundamentales para el éxito del proyecto.",
    nombre: "Pedro D",
    cargo: "Eliezar Menéndez",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    bandera: "🇻🇪",
  },
];


export const Relatos = () => {

  const form = useRef();
   const [isModalOpen, setIsModalOpen] = useState(false);

 

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xpps1ni', 'template_mb1buaj', form.current, {
        publicKey: 'gT9wdtf6cFzheeoJZ',
      })
      .then(
        () => {
          setIsModalOpen(true); // Mostrar modal de éxito
          form.current.reset();  // Limpiar formulario
        },
        (error) => {
          alert('Error al enviar el mensaje: ' + error.text);
        },
      );
  };
  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState("right"); // "left" o "right"
  const [animating, setAnimating] = useState(false);

  const testimoniosPorPagina = 3;
  const total = testimonios.length;

  const handlePrev = () => {

     
    if (animating) return;
    setDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setStart((prev) => (prev - testimoniosPorPagina + total) % total);
      setAnimating(false);
    }, 350);
  };

  const handleNext = () => {
    if (animating) return;
    setDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setStart((prev) => (prev + testimoniosPorPagina) % total);
      setAnimating(false);
    }, 600);
  };

  const relatosAMostrar =
    start + testimoniosPorPagina <= total
      ? testimonios.slice(start, start + testimoniosPorPagina)
      : [
          ...testimonios.slice(start, total),
          ...testimonios.slice(0, (start + testimoniosPorPagina) % total),
        ];

// Cambia el título si estamos mostrando los últimos 3 relatos
  const isLastPage =
    (start + testimoniosPorPagina) % total === 0 ||
    start + testimoniosPorPagina >= total;

  const titulo = isLastPage
    ? "Experiencias de nuestros clientes"
    : "Relatos de algunos Clientes";
  // Animación de deslizamiento
  const slideClass = animating
    ? direction === "right"
      ? "animate-slide-left"
      : "animate-slide-right"
    : "";
  return (
   <section className=" relative bg-gradient-to-tr from-[#191970] to-[#1a1a2e] py-20 px-6 md:px-12 text-white">

       <h2 className="text-center text-4xl md:text-5xl font-medium mb-16">
        {titulo.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h2>

      <div
        className={`flex flex-col md:flex-row gap-10 justify-center items-stretch max-w-7xl mx-auto overflow-hidden ${slideClass}`}
        style={{ minHeight: 420 }}
      >
        {relatosAMostrar.map((t, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
          >
            {/* Burbuja de texto */}
            <div className="bg-[linear-gradient(90deg,#4841BB_0%,#4361D7_21%,#435FD5_85%,#4841BB_100%)] relative rounded-2xl px-8 py-7 max-w-md w-full text-left shadow-lg mb-16 transition-all duration-300 hover:bg-[linear-gradient(90deg,#fff,#fff)]">
              <span className="text-3xl text-white absolute top-6 left-6 transition-colors duration-300 group-hover:text-black">
                ❝
              </span>
              <p className="text-base leading-relaxed font-normal text-white pl-8 pr-2 transition-colors duration-300 group-hover:text-black">
                {t.texto}
              </p>
              {/* Punta de la burbuja */}
              <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-8 h-4 overflow-hidden flex justify-center items-end pointer-events-none">
                <div
                  className="w-8 h-8 bg-[linear-gradient(90deg,#4841BB_0%,#4361D7_21%,#435FD5_85%,#4841BB_100%)] punta-burbuja transition-colors duration-300 group-hover:bg-[linear-gradient(90deg,#fff,#fff)]"
                  style={{
                    clipPath: "polygon(50% 100%, 0 50%, 50% 0, 100% 50%)",
                    transform: "rotate(0deg)",
                  }}
                ></div>
              </div>
            </div>

            {/* Imagen y datos */}
            <div className="flex flex-col items-center gap-2 -mt-4 transition-transform duration-300 group-hover:scale-105">
              <img
                src={t.img}
                alt={t.nombre}
                className="w-16 h-16 rounded-full border-2 border-white shadow-md"
              />
              <div className="font-semibold text-lg flex items-center gap-2 text-white transition-colors duration-300 ">
                {t.nombre} <span>{t.bandera}</span>
              </div>
              <div className="text-sm text-white/80 transition-colors duration-300 ">
                {t.cargo}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas de navegación */}
      <div className="flex justify-center items-center gap-10 mt-8">
        <button
          className="text-white text-4xl hover:text-[#4361D7] transition p-0 bg-transparent border-none outline-none"
          onClick={handlePrev}
        >
          <span>&#60;</span>
        </button>
        <button
          className="text-white text-4xl hover:text-[#4361D7] transition p-0 bg-transparent border-none outline-none"
          onClick={handleNext}
        >
          <span>&#62;</span>
        </button>
      </div>

      {/* Animaciones CSS */}
   <style>
  {`
    .animate-slide-left {
      animation: slideLeft 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .animate-slide-right {
      animation: slideRight 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    @keyframes slideLeft {
      0% { transform: translateX(100%);}
      100% { transform: translateX(0);}
    }
    @keyframes slideRight {
      0% { transform: translateX(-100%);}
      100% { transform: translateX(0);}
    }
  `}
</style>

 {/* Sección de contacto */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 mt-11">
        {/* Columna izquierda */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-4xl md:text-5xl font-medium leading-tight">
            Comunícate conmigo <br /> para agendar una <br /> Reunión.
          </h3>
          <div>
            <h4 className="text-gray-300 font-semibold">Llámame directamente</h4>
            <p className="text-lg font-medium mb-4">+58 4247055630</p>
            <h4 className="text-gray-300 font-semibold">Correo electrónico de contacto</h4>
            <a
              href="mailto:Adelemdina@gmail.com"
              className="text-lg font-medium mb-4"
            >
              Adelemdina@gmail.com
            </a>
          </div>
        </div>

        {/* Formulario */}
       <form
      ref={form}
      onSubmit={sendEmail}
      className="w-full md:w-1/2 space-y-4"
    >
      <div>
        <label className="block text-white mb-1" htmlFor="nombre">
          Nombre y apellidos
        </label>
        <input
          id="nombre"
          name="user_name"  // Importante para EmailJS
          type="text"
          placeholder="Nombre y apellidos"
          className="w-full px-4 py-2 bg-white text-black rounded-md focus:ring-2 focus:ring-[#4361D7] outline-none"
          required
        />
      </div>
      <div>
        <label className="block text-white mb-1" htmlFor="email">
          Tu correo electrónico
        </label>
        <input
          id="email"
          name="user_email"  // Importante para EmailJS
          type="email"
          placeholder="Correo electrónico"
          className="w-full px-4 py-2 bg-white text-black rounded-md focus:ring-2 focus:ring-[#4361D7] outline-none"
          required
        />
      </div>
      <div>
        <label className="block text-white mb-1" htmlFor="telefono">
          Tu teléfono móvil
        </label>
        <input
          id="telefono"
          name="user_phone"  // Importante para EmailJS (opcional, si lo quieres)
          type="tel"
          placeholder="Teléfono"
          className="w-full px-4 py-2 bg-white text-black rounded-md focus:ring-2 focus:ring-[#4361D7] outline-none"
        />
      </div>
      <div>
        <label className="block text-white mb-1" htmlFor="mensaje">
          Tu mensaje
        </label>
        <textarea
          id="mensaje"
          name="message"  // Importante para EmailJS
          rows={5}
          placeholder="Mensaje"
          className="w-full px-4 py-2 bg-white text-black rounded-md focus:ring-2 focus:ring-[#4361D7] outline-none resize-none"
          required
        />
      </div>
      <div className="flex items-start gap-2">
        <input id="privacidad" type="checkbox" className="mt-1" />
        <label htmlFor="privacidad" className="text-white text-sm">
          He leído y acepto la{" "}
          <a href="#" className="text-[#0074F0] underline">
            política de privacidad
          </a>.
        </label>
      </div>
      {/* CAPTCHA fake */}
      <div className="bg-white rounded-md p-3 flex items-center gap-3 w-fit">
        <input type="checkbox" className="w-5 h-5" />
        <span className="text-black text-sm">I'm not a robot</span>
        <img
          src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
          alt="reCAPTCHA"
          className="w-6 h-6 ml-auto"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center bg-white rounded-full px-6 py-2.5 font-medium text-secondary hover:bg-[#3254d7] hover:text-white transition-colors shadow"
      >
        Enviar Ahora
        <span className="ml-8 text-white bg-[#3254d7] rounded-full w-8 h-8 flex justify-center items-center text-2xl">
          ↗
        </span>
      </button>

      <button
  onClick={() => setIsModalOpen(true)}
  className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
>
  Ver modal (prueba)
</button>
    </form>

    

      </div>
      {/* Modal de éxito */}
      {isModalOpen && (
       <div className="fixed inset-0 bg-black/65 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm mx-auto text-center">
            <h2 className="text-xl font-bold mb-4 text-[#3254d7]">¡Mensaje enviado!</h2>
            <p className="mb-6 text-black">Tu mensaje ha sido enviado correctamente. Pronto me pondré en contacto contigo.</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-[#3254d7] text-white py-2 rounded hover:bg-[#4361D7] transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>

    
  );
};
