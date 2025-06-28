import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin, faWhatsapp, faSquareInstagram, faSquareBehance } from '@fortawesome/free-brands-svg-icons'


import { useTranslation } from 'react-i18next'; 

import { ParticlesBackground } from './ParticlesBackground';


export const Content = () => {
  const [t] = useTranslation("global");


 

 

  return (


<section className="relative min-h-screen bg-indigo-950 text-white overflow-hidden flex flex-col md:flex-row items-start gap-10 pt-20 pb-12 px-6 md:pt-32 md:pb-0 md:px-14">
      {/* Partículas */}
    <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
  <ParticlesBackground id="particles-content"/>
</div>
<div className="flex-1 pt-4 px-2 md:pl-16 md:pt-16">
    <div className="space-y-1.5 mb-8">
   
      <h1 className="text-7xl text-white pb-16">{t("presentation.Iam")}</h1>
     <div className='flex flex-row items-start gap-2'>
        <h1 className="text-8xl font-bold text-white">
          Adele
        </h1>
        <h1 className="text-8xl font-bold bg-[linear-gradient(90deg,#4841BB_0%,#4361D7_21%,#435FD5_85%,#4841BB_100%)] bg-clip-text text-transparent flex">
          Medina
        </h1>
      </div>
     
      <h2 className="text-2xl text-white">{t("presentation.work")}</h2>
    </div>

    <div class="pt-3 pb-3">
      <p className="text-5xl font-bold">Adelemedina@gmail.com</p>
      <p className="text-3xl font-regular">Mérida - Venezuela</p>
    </div>

    <div className="flex gap-4 mt-4">
      <a
        href="https://github.com/adelemdina"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="Ir a GitHub @adelemdina"
        className="text-white hover:text-indigo-300  transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faSquareGithub} className="text-5xl " />
      </a>

      <a
        href="https://linkedin.com/adelemdina"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="Ir a LinkedIn @adelemdina"
        className="text-white hover:text-indigo-300 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-5xl" />
      </a>

      <a
        href="https://www.instagram.com/adelemdina"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Ir a Instagram @adelemedina"
        className="text-white hover:text-indigo-300 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faSquareInstagram} className="text-5xl" />
      </a>

      <a
        href="https://www.behance.net/adelemedina"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Behance"
        title="Ir a Behance @adelemedina"
        className="text-white hover:text-indigo-300 transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faSquareBehance} className="text-5xl" />
      </a>
    </div>
  </div>
 <div className="flex-1 flex justify-center md:justify-end w-full md:w-auto mt-10 md:mt-0 px-4">
  <img
    src="./src/assets/images/imagen.png"
    alt="Adelemedina"
    className="object-contain rounded-lg shadow-lg w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[720px] md:h-[720px]"
  />
</div>
     
   <a
        href="https://wa.me/tu_numero"
        className="fixed bottom-8 right-[122px] z-20 bg-green-500 text-white px-6 py-2.5 rounded-full shadow-lg flex items-center space-x-2 text-lg font-semibold hover:bg-green-600 transition "
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl mr-2" />
      <span>{t("contact.chat")}</span>
      </a>
    
      {/* <div className="relative z-10 p-10">
        <h1 className="text-5xl font-bold mb-4">{t("presentation.Iam")} Adele Medina</h1>
        <p className="text-2xl">{t("presentation.work")}</p>
        <p className="mt-6 text-lg">adelemedina@gmail.com</p>
        <p className="text-lg">Mérida - Venezuela</p>
       
      </div> */}
    </section>
  );
};
