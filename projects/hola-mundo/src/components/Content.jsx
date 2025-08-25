import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin, faWhatsapp, faSquareInstagram, faSquareBehance } from '@fortawesome/free-brands-svg-icons'
import { faDownload as faDownloadSolid } from '@fortawesome/free-solid-svg-icons'

import { useTranslation } from 'react-i18next';
import { ParticlesBackground } from './ParticlesBackground';

export const Content = () => {
  const [t] = useTranslation("global");

  return (
    <section id='inicio' className="relative text-white overflow-hidden bg-indigo-950 pt-16 sm:pt-20 lg:pt-0 pb-8 sm:pb-12 lg:pb-16">

      {/* Fondo para Desktop - Partículas */}
      <div className="hidden lg:block absolute inset-0 z-0">
        <ParticlesBackground id="particles-content" />
      </div>

      {/* OPCIÓN 1: Fondo Mobile - Gradiente Animado */}
      <div className="lg:hidden absolute inset-0 z-0 bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 animate-gradient-shift"></div>

      {/* Contenido Principal */}
      <div className="relative z-10 py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Layout Principal */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start lg:items-center">

            {/* Columna de Texto */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-5 lg:space-y-6 order-2 lg:order-1">

              {/* Saludo */}
              <div className="space-y-1 sm:space-y-2">
                <p className="text-base sm:text-lg lg:text-xl text-indigo-300 font-medium tracking-wide">
                  {t("presentation.Iam")}
                </p>

                {/* Nombre Principal */}
                <div className="space-y-1 sm:space-y-2">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                    <span className="text-white">Adele</span>
                  </h1>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                      Medina
                    </span>
                  </h1>
                </div>

                {/* Profesión */}
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light mt-2 sm:mt-4">
                  {t("presentation.work")}
                </h2>
              </div>

              {/* Información de Contacto */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-base sm:text-lg lg:text-xl font-semibold text-white">
                      Adelemedina@gmail.com
                    </p>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                      Mérida - Venezuela
                    </p>hay
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="#contacto"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Trabajemos Juntos
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-indigo-950 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <FontAwesomeIcon icon={faDownloadSolid} />
                  Descargar CV
                </a>
              </div>

              {/* Redes Sociales */}
              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4">
                <a
                  href="https://github.com/adelemdina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <FontAwesomeIcon
                    icon={faSquareGithub}
                    className="text-xl sm:text-2xl text-white group-hover:text-indigo-300"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/adelemdina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-xl sm:text-2xl text-white group-hover:text-blue-400"
                  />
                </a>
                <a
                  href="https://www.instagram.com/adelemdina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <FontAwesomeIcon
                    icon={faSquareInstagram}
                    className="text-xl sm:text-2xl text-white group-hover:text-pink-400"
                  />
                </a>
                <a
                  href="https://www.behance.net/adelemedina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <FontAwesomeIcon
                    icon={faSquareBehance}
                    className="text-xl sm:text-2xl text-white group-hover:text-purple-400"
                  />
                </a>
              </div>
            </div>

            {/* Columna de Imagen */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                {/* Efecto de resplandor detrás de la imagen */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl scale-110"></div>

                {/* Imagen principal */}
                <img
                  src="./src/assets/images/imagen.png"
                  alt="Adele Medina"
                  className="relative z-10 w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto object-contain rounded-2xl shadow-2xl"
                />

                {/* Decoración flotante */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Indicador de Scroll */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón WhatsApp Flotante */}
      <a
        href="https://wa.me/584247055630"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flotar group"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {t("contact.chat")}
        </span>
      </a>
    </section>
  );
};
