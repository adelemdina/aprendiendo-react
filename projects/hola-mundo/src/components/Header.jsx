import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';  
import { NavBar } from './NavBar';
import { Contact } from "./Contact";



export const Header = () => {
   return (
   <header class="pl-[58px] pr-[58px]">
    
     
      
      <div class="flex items-center w-full relative z-10">
       
        <div class="flex items-center gap-12">
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