import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';  
import { NavBar } from './NavBar';
import { Contact } from "./Contact";

import { ParticlesBackground } from './ParticlesBackground';

export const Header = () => {
   return (
   <header className="pl-[58px] pr-[58px] bg-indigo-950">
    
     <div className="absolute inset-0 -z-0 w-full h-full">
         <ParticlesBackground id="particles-header"/>
           </div>
      
      <div className="flex items-center w-full relative z-10">
       
        <div className="flex items-center gap-12">
          <Logo />
          <LanguageSelector />
        </div>
      
        <div className="ml-[520px] flex items-center">
        
        </div>

        <div className="ml-auto flex items-center gap-22 pr-[58px]">
            <NavBar />
          <Contact />
        </div>
      </div>
    </header>
  );
}