import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin, faWhatsapp, faSquareInstagram, faSquareBehance } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'; 


export const Content = () => {

  const [t, i18n] = useTranslation("global");
  return (
    

 <section className="text-white pt-32 pl-14 flex flex-col md:flex-row items-start gap-10 "
 >
  <div className="flex-1 pl-16 pt-16">
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
      <p className="text-5xl font-bold text-indigo-700">Adelemedina@gmail.com</p>
      <p className="text-3xl font-regular">Mérida - Venezuela</p>
    </div>

    <div className="flex gap-4 mt-4">
      <a
        href="https://github.com/adelemdina"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="Ir a GitHub @adelemdina"
        className="text-white hover:bg-primary transition-colors duration-300"
      >
        <FontAwesomeIcon icon={faSquareGithub} className="text-5xl" />
      </a>

      <a
        href="https://linkedin.com/adelemdina"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="Ir a LinkedIn @adelemdina"
        className="text-white hover:bg-mi-gradiente transition-colors duration-300"
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

  <div className="flex-1 flex justify-end w-full md:w-auto pr-[56px] mt-10 md:mt-0">
    <img
      src="./src/assets/images/imagen.png"
      alt="Adelemedina"
      style={{ width: '720px', height: '720px' }}
      className="object-contain rounded-lg shadow-lg"
    />
     </div>
     
   <a
        href="https://wa.me/tu_numero"
        className="fixed bottom-8 right-[122px] z-20 bg-green-500 text-white px-6 py-2.5 rounded-full shadow-lg flex items-center space-x-2 text-lg font-semibold hover:bg-green-600 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl mr-2" />
      <span>Chatea conmigo</span>
      </a>
     
     
 
</section>

  );
};
