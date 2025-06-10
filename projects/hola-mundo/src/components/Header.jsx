import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';  
import { NavBar } from './NavBar';
import { Contact } from "./Contact";



export const Header = () => {
   return (
   <header class="pl-[58px] pr-[58px]">
    
      <div class="absolute inset-0 bg-[url('/network-bg.png')] bg-cover bg-center opacity-20"></div>
      
      <div class="flex items-center w-full relative z-10">
       
        <div class="flex items-center gap-4">
          <Logo />
          <LanguageSelector />
        </div>
      
        <div class="ml-[520px] flex items-center">
        
        </div>

        <div class="ml-auto flex items-center gap-22 pr-[58px]">
            <NavBar />
          <Contact />
        </div>
      </div>
    </header>
  );
}