import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';  
import { NavBar } from './NavBar';
import { Contact } from "./Contact";



export const Header = () => {
   return (
    <header className="w-full  relative">
      {/* Fondo con efecto de red/nodos */}
      <div className="absolute inset-0 bg-[url('/network-bg.png')] bg-cover bg-center opacity-20"></div>
      
      <div className="max-w-[1440px] mx-auto px-4 h-20 flex items-center justify-between relative z-10">
        {/* Sección izquierda: Logo, nombre y selector de idioma */}
        <div className="flex items-center space-x-9">
         < Logo />
          <div class="hidden md:block ">
         < LanguageSelector />
          </div>
        </div>
        
        {/* Navegación central */}
        < NavBar />
        
        {/* Botón de contacto */}
        < Contact />
      </div>
    </header>
  );
}