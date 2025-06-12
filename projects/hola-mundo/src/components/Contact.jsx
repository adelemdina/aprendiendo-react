
import { useTranslation } from 'react-i18next';

export const Contact = () => {

const [t] = useTranslation("global");
 return (
 
  
    // <button class="w-52 h-10 inline-flex items-center bg-white rounded-full px-6 py-2.5 font-medium text-[#3254d7] hover:bg-[#3254d7] hover:text-white transition-colors shadow">
    //  <a  href="https://www.linkedin.com/in/adelemedina"   > 
    //  <span className="mr-4">Contáctame</span>  </a> 
    // <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#4361D7] text-white text-2x"> ↗ </span>
    // </button>

    //   href="https://www.linkedin.com/in/adelemedina"
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   className="inline-flex items-center bg-white rounded-full px-6 py-2.5 font-medium text-[#3254d7] hover:bg-[#3254d7] hover:text-white transition-colors shadow"
    //   style={{ fontSize: '2rem' }}
    // >
    //   <span className="mr-4">Contáctame</span>
    //   <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#4361D7] text-white text-2xl">
    //     ↗
    //   </span>
    // </a>
    // <button className="w-52 h-10 inline-flex items-center bg-white rounded-full px-6 py-2.5 font-medium text-[#3254d7] hover:bg-[#3254d7] hover:text-white transition-colors shadow">
    // <a href="https://www.linkedin.com/in/adelemedina" target="_blank" rel="noopener noreferrer"></a>
    //   <span className="">Contáctame</span>
    //   <span className="ml-9 bg-mi-gradiente rounded-full w-8 h-8 text-white flex justify-center mt-">
    //     ↗

    //   </span>
    // </button>
     
       <a href="" className="inline-flex items-center bg-white rounded-full px-6 py-2.5 font-medium text-secondary hover:bg-[#3254d7] hover:text-white transition-colors shadow">{t("contact.contact")}  <span className="ml-8 text-white bg-[#3254d7] rounded-full w-8 h-8 flex justify-center items-center text-2xl">↗</span></a>
        
  
    
  );
}