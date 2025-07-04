import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin, faWhatsapp, faSquareInstagram, faSquareBehance } from '@fortawesome/free-brands-svg-icons'


import { useTranslation } from 'react-i18next'; 

import { ParticlesBackground } from './ParticlesBackground';


export const Content = () => {
  const [t] = useTranslation("global");


 

 

  return (


<section className="bg-indigo-950 text-white overflow-hidden pt-16 pb-12 px-4 sm:px-6 lg:px-14">

      {/* Partículas */}
   <div className="hidden lg:block lg:absolute lg:inset-0 lg:-z-0 lg:w-full lg:h-full">
  <ParticlesBackground id="particles-content"/>
</div>
 <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
<div className="w-full md:w-1/2 px-2 md:pl-8 order-1 md:order-none -mt-8 md:mt-0 mb-8 md:mb-0">
    <div className="space-y-1.5 mb-8">
   
      <h1 className="text-7xl text-white pb-16">{t("presentation.Iam")}</h1>
     <div className='flex flex-row items-start gap-2'>
       <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white">
  Adele
</h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-[linear-gradient(90deg,#4841BB_0%,#4361D7_21%,#435FD5_85%,#4841BB_100%)] bg-clip-text text-transparent flex">
          Medina
              </h1>
            </div>
          
            <h2 className="text-2xl text-white">{t("presentation.work")}</h2>
          </div>

          <div className="pt-3 pb-3">
        <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
        Adelemedina@gmail.com
      </p>
      <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-normal">
        Mérida - Venezuela
      </p>
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
<div className="hidden md:flex w-full md:w-1/2 justify-end items-end px-4">
  <img
    src="./src/assets/images/imagen.png"
    alt="Adelemedina"
    className="object-contain rounded-lg shadow-lg 
               w-[700px] lg:w-[800px] xl:w-[900px] 
                h-auto relative translate-y-12"
  />
</div>


<a
  href="https://wa.me/tu_numero"
  className="fixed bottom-12 md:bottom-6 right-6 md:right-[122px] z-20 bg-green-500 text-white px-4 md:px-6 py-2 rounded-full shadow-lg flex items-center text-base md:text-lg font-semibold hover:bg-green-600 transition"
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
      </div>
    </section>
  );
};
