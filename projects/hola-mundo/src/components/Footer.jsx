import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faBehance, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next'; 
export const Footer = () => {
  const [t] = useTranslation("global");
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">  
        {/* Frase e iconos */}
        <div className="flex-1">
          <p className="text-3xl md:text-4xl font-medium text-[#181F39] mb-8 leading-snug text-left max-w-xl">
                 "{t("footer.titulo1")}<br />
                 {t("footer.titulo2")}<br />
                  {t("footer.titulo3")}
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://www.linkedin.com/in/adelemedina" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="text-[#181F39] text-2xl hover:text-[#4841BB]" />
            </a>
            <a href="https://www.instagram.com/adelemdina" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="text-[#181F39] text-2xl hover:text-[#4841BB]" />
            </a>
            <a href="https://www.behance.net/adelemedina" target="_blank" rel="noopener noreferrer" aria-label="Behance">
              <FontAwesomeIcon icon={faBehance} className="text-[#181F39] text-2xl hover:text-[#4841BB]" />
            </a>
            <a href="https://github.com/adelemdina" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="text-[#181F39] text-2xl hover:text-[#4841BB]" />
            </a>
          </div>
        </div>
        {/* Enlaces */}
        <div className="flex flex-col md:flex-row gap-12 flex-shrink-0">
          <div>
            <h4 className="font-semibold text-[#181F39] mb-3">{t("footer.conectar")}</h4>
            <ul className="space-y-2">
              <li><a href="#servicios" className="text-[#181F39] underline underline-offset-2 hover:text-[#4841BB] text-2xl">{t("footer.servicios")}</a></li>
              <li><a href="#testimonios" className="text-[#181F39] underline underline-offset-2 hover:text-[#4841BB] text-2xl">{t("footer.testimonios")}</a></li>
              <li><a href="#acerca" className="text-[#181F39] underline underline-offset-2 hover:text-[#4841BB] text-2xl">{t("footer.acerca")}</a></li>
              <li><a href="#trabajos" className="text-[#181F39] underline underline-offset-2 hover:text-[#4841BB] text-2xl">{t("footer.trabajos")}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#181F39] mb-3">{t("footer.contactenos")}</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+584247055630" className="text-[#181F39] underline underline-offset-2 hover:text-[#4841BB] text-2xl">
                 {t("footer.telefono")}
                </a>
              </li>
              <li>
                <a href="mailto:Adelemdina@gmail.com" className="text-[#181F39] underline underline-offset-2 hover:text-[#4841BB] text-2xl">
                {t("footer.correo")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Aviso legal y política */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-end items-center gap-2 mt-12 text-[#181F39] text-sm">
        <a href="#aviso-legal" className="hover:text-[#4841BB]">       {t("footer.text")}</a>
        <span className="hidden md:inline mx-2">|</span>
        <a href="#privacidad" className="hover:text-[#4841BB]">       {t("footer.avisoLegal")}</a>
         <span className="hidden md:inline mx-2">|</span>
        <a href="#privacidad" className="hover:text-[#4841BB]">       {t("footer.privacidad")}</a>
      </div>
    </footer>
  );
}