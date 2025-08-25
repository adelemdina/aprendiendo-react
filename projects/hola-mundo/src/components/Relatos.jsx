import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { ParticlesBackground } from "./ParticlesBackground";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next'; 
import ReCAPTCHA from "react-google-recaptcha";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
export const Relatos = () => {
  const [t] = useTranslation("global");
  const form = useRef();
  const recaptchaRef = useRef(); // <-- ref para reCAPTCHA
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      alert("Por favor, verifica que no eres un robot");
      return;
    }

    emailjs
      .sendForm('service_xpps1ni', 'template_mb1buaj', form.current, {
        publicKey: 'gT9wdtf6cFzheeoJZ',
      })
      .then(
        () => {
          setIsModalOpen(true); // Mostrar modal de éxito
          form.current.reset();  // Limpiar formulario
          recaptchaRef.current.reset(); // Resetear reCAPTCHA
        },
        (error) => {
          alert('Error al enviar el mensaje: ' + error.text);
        },
      );
  };

  // ... Aquí sigue todo tu código sin cambios, solo pega el resto debajo

  const [start, setStart] = useState(0);
  const [direction, setDirection] = useState("right"); // "left" o "right"
  const [animating, setAnimating] = useState(false);

  const testimoniosPorPagina = 3;
  const testimonios = t("relatos", { returnObjects: true });
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

  const isLastPage =
    (start + testimoniosPorPagina) % total === 0 ||
    start + testimoniosPorPagina >= total;

  const titulo = isLastPage
    ? t("relatosTituloUltima")
    : t("relatosTitulo");

  const slideClass = animating
    ? direction === "right"
      ? "animate-slide-left"
      : "animate-slide-right"
    : "";

  return (
    <section id='testimonios' className="relative min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 w-full text-white bg-indigo-950 scroll-pb-16">

    <div className="absolute top-0 left-0 w-full h-full z-0 hidden lg:block pointer-events-none">
  <ParticlesBackground id="particles-relatos" />
</div>
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-8 sm:mb-12 md:mb-16 px-4">
        {titulo.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h2>

      <div
        className={`flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 justify-center items-stretch max-w-7xl mx-auto z-10 overflow-hidden ${slideClass}`}
        style={{ minHeight: "350px" }}
      >
        {relatosAMostrar.map((t, idx) => (
          <div
            key={idx}
            className="group flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 w-full lg:w-1/3"
          >
            <div className="bg-[linear-gradient(90deg,#4841BB_0%,#4361D7_21%,#435FD5_85%,#4841BB_100%)] relative rounded-2xl px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-7 max-w-sm sm:max-w-md w-full text-left shadow-lg mb-8 sm:mb-12 md:mb-16 transition-all duration-300 group-hover:bg-[linear-gradient(90deg,#fff,#fff)]">
              <span className="text-2xl sm:text-3xl text-white absolute top-4 sm:top-5 md:top-6 left-4 sm:left-5 md:left-6 transition-colors duration-300 group-hover:text-black">
                ❝
              </span>
              <p className="text-sm sm:text-base leading-relaxed font-normal text-white pl-6 sm:pl-7 md:pl-8 pr-2 transition-colors duration-300 group-hover:text-black">
                {t.texto}
              </p>
              <div className="absolute left-1/2 -bottom-3 sm:-bottom-4 transform -translate-x-1/2 w-6 sm:w-8 h-3 sm:h-4 overflow-hidden flex justify-center items-end pointer-events-none">
                <div
                  className="w-6 sm:w-8 h-6 sm:h-8 bg-[linear-gradient(90deg,#4841BB_0%,#4361D7_21%,#435FD5_85%,#4841BB_100%)] punta-burbuja transition-colors duration-300 group-hover:bg-[linear-gradient(90deg,#fff,#fff)]"
                  style={{
                    clipPath: "polygon(50% 100%, 0 50%, 50% 0, 100% 50%)",
                    transform: "rotate(0deg)",
                  }}
                ></div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 sm:gap-2 -mt-2 sm:-mt-4 transition-transform duration-300 group-hover:scale-105">
              <img
                src={t.img}
                alt={t.nombre}
                className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full border-2 border-white shadow-md"
              />
              <div className="font-semibold text-base sm:text-lg flex items-center gap-2 text-white transition-colors duration-300 ">
                {t.nombre} <span>{t.bandera}</span>
              </div>
              <div className="text-xs sm:text-sm text-white/80 transition-colors duration-300 ">
                {t.cargo}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-12 sm:gap-16 md:gap-24 mt-6 sm:mt-8">
        <button
          className="text-white text-4xl hover:text-[#4361D7] transition p-0 bg-transparent border-none outline-none"
          onClick={handlePrev}
        >
           <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="text-white text-4xl hover:text-[#4361D7] transition p-0 bg-transparent border-none outline-none"
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

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

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 mt-8 sm:mt-10 md:mt-11">
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            {t("contactoForm.titulo1")} <br />
            {t("contactoForm.titulo2")} <br />
            {t("contactoForm.titulo3")}
          </h3>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h4 className="text-gray-300 font-semibold text-sm sm:text-base">{t("contactoForm.llamame")}</h4>
              <p className="text-base sm:text-lg font-medium mb-2 sm:mb-4">+58 4247055630</p>
            </div>
            <div>
              <h4 className="text-gray-300 font-semibold text-sm sm:text-base">{t("contactoForm.correo")}</h4>
              <a
                href="mailto:Adelemdina@gmail.com"
                className="text-base sm:text-lg font-medium mb-2 sm:mb-4 break-all"
              >
                {t("contactoForm.email")} <br />
              </a>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full lg:w-1/2 space-y-3 sm:space-y-4"
        >
          <div>
            <label className="block text-white mb-1 text-sm sm:text-base" htmlFor="nombre">
              {t("contactoForm.nombreLabel")} <br />
            </label>
            <input
              id="nombre"
              name="user_name"
              type="text"
              placeholder={t("contactoForm.nombrePlaceholder")}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-black rounded-md focus:ring-2 focus:ring-[#4361D7] outline-none text-sm sm:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1 text-sm sm:text-base" htmlFor="email">
              {t("contactoForm.correo")} <br />
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              placeholder={t("contactoForm.emailPlaceholder")}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-black rounded-md focus:ring-2 focus:ring-[#4361D7] outline-none text-sm sm:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1 text-sm sm:text-base" htmlFor="telefono">
              {t("contactoForm.telefonoLabel")} <br />
            </label>
            <input
              id="telefono"
              name="user_phone"
              type="tel"
              placeholder={t("contactoForm.telefonoPlaceholder")}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-black rounded-md focus:ring-2 focus:ring-[#4361D7] outline-none text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block text-white mb-1 text-sm sm:text-base" htmlFor="mensaje">
              {t("contactoForm.mensajeLabel")} <br />
            </label>
            <textarea
              id="mensaje"
              name="message"
              rows={4}
              placeholder={t("contactoForm.mensajePlaceholder")}
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white text-black rounded-md focus:ring-2 focus:ring-[#4361D7] outline-none resize-none text-sm sm:text-base"
              required
            />
          </div>
         <div className="flex items-start gap-2">
  <input
    id="privacidad"
    type="checkbox"
    className="mt-1 flex-shrink-0"
    required
  />
  <label htmlFor="privacidad" className="text-white text-xs sm:text-sm">
    {t("contactoForm.privacidad")}{" "}
    <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer" className="text-[#0074F0] underline">
      {t("contactoForm.politica")}
    </a>.
  </label>
</div>

          <div className="flex justify-center sm:justify-start">
            <ReCAPTCHA
              sitekey="TU_SITE_KEY_AQUI"
              ref={recaptchaRef}
              size="compact"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center bg-white rounded-full px-4 sm:px-6 py-2 sm:py-2.5 font-medium text-secondary hover:bg-[#3254d7] hover:text-white transition-colors shadow cursor-pointer text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
          >
            {t("contactoForm.enviar")}
            <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-white group-hover:bg-secondary ml-4 sm:ml-8 text-secondary bg-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex justify-center items-center text-lg sm:text-2xl">
              ↗
            </span>
          </button>
        </form>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/65 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm mx-auto text-center">
            <h2 className="text-xl font-bold mb-4 text-[#3254d7]">{t("contactoForm.modalTitulo")}</h2>
            <p className="mb-6 text-black">{t("contactoForm.modalMensaje")}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-[#3254d7] text-white py-2 rounded hover:bg-[#4361D7] transition"
            >
              {t("contactoForm.modalCerrar")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
