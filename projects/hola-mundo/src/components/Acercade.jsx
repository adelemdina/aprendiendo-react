
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faPaintBrush, faUsers } from "@fortawesome/free-solid-svg-icons";
import shapes from '../assets/images/Shapes.png';
import group from '../assets/images/Group.png';

import { useTranslation } from 'react-i18next'; 
export const Acercade = () => {
  const [t] = useTranslation("global");

  return (
      <section id='acerca'
      className="relative bg-white bg-cover bg-center bg-no-repeat transition-all duration-500 pb-16 gap-12  md:flex-row items-start overflow-hidden "
      // "bg-indigo-950 text-white overflow-hidden pt-16 pb-12 px-4 sm:px-6 lg:px-14"
      // relative min-h-screen bg-indigo-950 text-white overflow-hidden pt-32 pl-14 flex flex-col md:flex-row items-start gap-10
      style={{ backgroundImage: `url(${shapes})` }}
    >
      
      <div className="max-w-6xl text-center md:text-left flex-1 px-4 sm:px-6 md:px-8 lg:px-16 pt-8 sm:pt-12 md:pt-16">
       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
        <span className="text-mi-gradiente">{t("about.title1")}</span>{' '}
        <span className="text-neutral-700">{t("about.title2")}</span> <br />
        <span className="text-neutral-700">{t("about.title3")}</span>{' '}
        <span className="text-mi-gradiente">{t("about.title4")}</span>
      </h2>
        <p className="text-neutral-500 mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg mx-auto md:mx-0">
          {t("about.description")}
        </p>

     </div>


<div className="flex flex-col md:flex-row lg:flex-row justify-center items-center lg:items-stretch gap-6 sm:gap-8 lg:gap-12 xl:gap-20 mt-8 sm:mt-10 md:mt-12 max-w-[1440px] mx-auto px-4 sm:px-6">
  {/* Tarjeta 1 */}
  <div className="group w-full max-w-[320px] sm:max-w-[350px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[370px] h-[320px] sm:h-[350px] md:h-[340px] lg:h-[368px] bg-mi-gradiente text-white rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 flex flex-col justify-between transition-all duration-500 hover:h-[360px] sm:hover:h-[390px] md:hover:h-[380px] lg:hover:h-[420px] hover:bg-mi-gradiente relative overflow-hidden"   >
      <div
    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
    style={{
      backgroundImage: `url(${group})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1
    }}
  />
    <div className="flex flex-col items-start transition-all duration-500 group-hover:translate-y-2">
      <FontAwesomeIcon icon={faRocket} className="mb-4 sm:mb-5 md:mb-6 text-[40px] sm:text-[48px] md:text-[56px]" />
      <h3 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">{t("about.card1.title")}</h3>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed pt-2">
    {t("about.card1.description")}
      </p>
    </div>
    {/* Botón "Conocer más" */}
    <span className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 text-white text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-6">
      {t("about.card1.button")}
    </span>
    {/* Efecto arriba */}
    <span className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
    {/* Efecto abajo */}
    <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
  </div>

  {/* Tarjeta 2 */}
  <div className="group w-full max-w-[320px] sm:max-w-[350px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[370px] h-[320px] sm:h-[350px] md:h-[340px] lg:h-[368px] bg-mi-gradiente text-white rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 flex flex-col justify-between transition-all duration-500 hover:h-[360px] sm:hover:h-[390px] md:hover:h-[380px] lg:hover:h-[420px] hover:bg-mi-gradiente relative overflow-hidden">
      <div
    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
    style={{
      backgroundImage: `url(${group})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1
    }}
  />
    <div className="flex flex-col items-start transition-all duration-500 group-hover:translate-y-2">
      <FontAwesomeIcon icon={faPaintBrush} className="mb-4 sm:mb-5 md:mb-6 text-[40px] sm:text-[48px] md:text-[56px]" />
      <h3 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">{t("about.card2.title")}</h3>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed pt-2">
       {t("about.card2.description")}
      </p>
    </div>
    <span className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 text-white text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-6">
     {t("about.card2.button")} 
    </span>
    <span className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
    <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
  </div>

  {/* Tarjeta 3 */}
  <div className="group w-full max-w-[320px] sm:max-w-[350px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[370px] h-[320px] sm:h-[350px] md:h-[340px] lg:h-[368px] bg-mi-gradiente text-white rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 flex flex-col justify-between transition-all duration-500 hover:h-[360px] sm:hover:h-[390px] md:hover:h-[380px] lg:hover:h-[420px] hover:bg-mi-gradiente relative overflow-hidden">
      <div
    className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
    style={{
      backgroundImage: `url(${group})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1
    }}
  />
    <div className="flex flex-col items-start transition-all duration-500 group-hover:translate-y-2">
      <FontAwesomeIcon icon={faUsers} className="mb-4 sm:mb-5 md:mb-6 text-[40px] sm:text-[48px] md:text-[56px]" />
      <h3 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">{t("about.card3.title")}</h3>
      <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed pt-2">
      {t("about.card3.description")}
      </p>
    </div>
    <span className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 md:bottom-6 md:right-6 text-white text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-6">
{t("about.card3.button")}
    </span>
    <span className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
    <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
  </div>
</div>

</section>
  );
};