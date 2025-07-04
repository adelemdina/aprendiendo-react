import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { ParticlesBackground } from "./ParticlesBackground";
import { useTranslation } from 'react-i18next'; 
import ReCAPTCHA from "react-google-recaptcha";

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
    <section className="relative min-h-screen py-20 px-6 md:px-12 w-full text-white bg-indigo-950 scroll-pb-16">

      <div
        className="hidden lg:block lg:absolute lg:inset-0 lg:-z-0 lg:w-full lg:h-full"
        style={{ minHeight: "100%", height: "100%", inset: 0 }}
      >
        <ParticlesBackground id="particles-relatos" />
      </div>

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
            <div className="bg-[linear-gradient(90deg,#4841BB_0%,#4361D7_21%,#435FD5_85%,#4841BB_100%)] relative rounded-2xl px-8 py-7 max-w-md w-full text-left shadow-lg mb-16 transition-all duration-300 group-hover:bg-[linear-gradient(90deg,#fff,#fff)]">
              <span className="text-3xl text-white absolute top-6 left-6 transition-colors duration-300 group-hover:text-black">
                ❝
              </span>
              <p className="text-base leading-relaxed font-normal text-white pl-8 pr-2 transition-colors duration-300 group-hover:text-black">
                {t.texto}
              </p>
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

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 mt-11">
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-4xl md:text-5xl font-medium leading-tight">
            {t("contactoForm.titulo1")} <br />
            {t("contactoForm.titulo2")} <br />
            {t("contactoForm.titulo3")}
          </h3>
          <div>
            <h4 className="text-gray-300 font-semibold">  {t("contactoForm.llamame")}</h4>
            <p className="text-lg font-medium mb-4">+58 4247055630</p>
            <h4 className="text-gray-300 font-semibold">  {t("contactoForm.correo")}</h4>
            <a
              href="mailto:Adelemdina@gmail.com"
              className="text-lg font-medium mb-4"
            >
              {t("contactoForm.email")} <br />
            </a>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 space-y-4"
        >
          <div>
            <label className="block text-white mb-1" htmlFor="nombre">
              {t("contactoForm.nombreLabel")} <br />
            </label>
            <input
              id="nombre"
              name="user_name"
              type="text"
              placeholder={t("contactoForm.nombrePlaceholder")}
              className="w-full px-4 py-2 bg-white text-black rounded-md focus:ring-2 focus:ring-[#4361D7] outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1" htmlFor="email">
              {t("contactoForm.correo")} <br />
            </label>
            <input
              id="email"
              name="user_email"
              type="email"
              placeholder={t("contactoForm.emailPlaceholder")}
              className="w-full px-4 py-2 bg-white text-black rounded-md focus:ring-2 focus:ring-[#4361D7] outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-1" htmlFor="telefono">
              {t("contactoForm.telefonoLabel")} <br />
            </label>
            <input
              id="telefono"
              name="user_phone"
              type="tel"
              placeholder={t("contactoForm.telefonoPlaceholder")}
              className="w-full px-4 py-2 bg-white text-black rounded-md focus:ring-2 focus:ring-[#4361D7] outline-none"
            />
          </div>
          <div>
            <label className="block text-white mb-1" htmlFor="mensaje">
              {t("contactoForm.mensajeLabel")} <br />
            </label>
            <textarea
              id="mensaje"
              name="message"
              rows={5}
              placeholder={t("contactoForm.mensajePlaceholder")}
              className="w-full px-4 py-2 bg-white text-black rounded-md focus:ring-2 focus:ring-[#4361D7] outline-none resize-none"
              required
            />
          </div>
         <div className="flex items-start gap-2">
  <input
    id="privacidad"
    type="checkbox"
    className="mt-1"
    required
  />
  <label htmlFor="privacidad" className="text-white text-sm">
    {t("contactoForm.privacidad")}{" "}
    <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer" className="text-[#0074F0] underline">
      {t("contactoForm.politica")}
    </a>.
  </label>
</div>

          <ReCAPTCHA
            sitekey="TU_SITE_KEY_AQUI"
            ref={recaptchaRef}
          />

          <button
            type="submit"
            className="inline-flex items-center bg-white rounded-full px-6 py-2.5 font-medium text-secondary hover:bg-[#3254d7] hover:text-white transition-colors shadow cursor-pointer"
          >
            {t("contactoForm.enviar")}
            <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-white group-hover:bg-secondary ml-8 text-secondary bg-white rounded-full w-8 h-8 flex justify-center items-center text-2xl">
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
