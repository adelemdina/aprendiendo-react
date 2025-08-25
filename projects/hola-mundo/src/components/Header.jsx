import { useState } from 'react';
import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';
import { NavBar } from './NavBar';
import { Contact } from "./Contact";
import { ParticlesBackground } from './ParticlesBackground';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => setIsMenuOpen(false); // Cierra menú al hacer clic

  return (
    <header className="overflow-x-hidden px-4 sm:px-6 md:px-8 lg:px-[58px] lg:relative bg-indigo-950">
      {/* Fondo de partículas para desktop */}
      <div className="hidden lg:block lg:absolute lg:inset-0 lg:-z-0 lg:w-full lg:h-full">
        <ParticlesBackground id="particles-header" />
      </div>

      {/* Fondo mobile - mismo gradiente que Content */}
      <div className="lg:hidden absolute inset-0 z-0 bg-gradient-to-br from-indigo-950 via-indigo-900 to-purple-900 animate-gradient-shift"></div>

      {/* Contenido principal */}
      <div className="flex items-center w-full relative z-10 py-3 sm:py-4 lg:py-6">
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          <Logo />
          <LanguageSelector />
        </div>

        {/* NavBar visible solo en pantallas grandes */}
        <div className="ml-auto hidden lg:flex items-center gap-16 xl:gap-28 pr-4 xl:pr-[58px]">
          <NavBar />
          <Contact />
        </div>

        {/* Botón hamburguesa solo en mobile */}
        <div className="ml-auto lg:hidden z-20">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 sm:p-3 focus:outline-none cursor-pointer"
            aria-label="Abrir menú"
          >
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable mobile - con mismo fondo que Header/Content */}
      {/* Menú desplegable solo en mobile */}
      {/* Menú desplegable tipo barra desde arriba */}
      <div
        className={`lg:hidden fixed left-0 top-0 w-full z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
       style={{ background: "rgba(255,255,255,0.95)" }} // fondo blanco con transparencia // bg-indigo-950
      >
        <div className="flex flex-col items-center justify-center gap-8 py-12 px-6 min-h-[100vh]">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-secondary text-4xl focus:outline-none cursor-pointer"
            aria-label="Cerrar menú"
          >
            &#10005;
          </button>
          <NavBar isMobile onLinkClick={handleLinkClick} />
              <Contact />        </div>
      </div>
    </header>
  );
};
