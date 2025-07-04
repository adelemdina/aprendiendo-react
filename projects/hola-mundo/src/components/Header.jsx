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
   <header className="overflow-x-hidden px-4 sm:px-8 lg:px-[58px]  relative bg-amber-300">
      {/* Fondo de partículas */}
      <div className="hidden lg:block lg:absolute lg:inset-0 lg:-z-0 lg:w-full lg:h-ful">
        <ParticlesBackground id="particles-header" />
      </div>

      {/* Contenido principal */}
      <div className="flex items-center w-full relative z-10 py-6">
        <div className="flex items-center gap-12">
          <Logo />
          <LanguageSelector />
        </div>

        {/* NavBar visible solo en pantallas grandes */}
        <div className="ml-auto hidden lg:flex items-center gap-28 pr-[58px]">
          <NavBar />
          <Contact />
        </div>

        {/* Botón hamburguesa solo en mobile */}
        <div className="ml-auto lg:hidden z-20">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-3 focus:outline-none"
            aria-label="Abrir menú"
          >
            <svg
              className="w-12 h-12"
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

      {/* Menú desplegable solo en mobile */}
     {isMenuOpen && (
  <div className="lg:hidden fixed top-full left-0 w-full bg-indigo-950 z-50 shadow-md px-6 py-6 flex flex-col gap-8 overflow-x-hidden">
    <NavBar isMobile onLinkClick={handleLinkClick} />
    <Contact />
  </div>
)}
    </header>
  );
};
