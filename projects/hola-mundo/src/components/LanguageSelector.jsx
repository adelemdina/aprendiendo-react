import { useTranslation } from 'react-i18next'; 
import { useRef, useEffect, useState } from 'react';

export const LanguageSelector = () => {
  const [t, i18n] = useTranslation("global");
  const currentLang = i18n.language;

  const esRef = useRef(null);
  const enRef = useRef(null);

  // Estado para forzar un re-render cuando los refs estén listos
  useEffect(() => {
    setMounted(true);
  }, []);

  const getSliderStyle = () => {
    if (!mounted) return { opacity: 0 }; // No mostrar el slider hasta que los refs estén listos
    if (currentLang === "es" && esRef.current) {
      return {
        width: esRef.current.offsetWidth + "px",
        transform: "translateX(0)",
      };
    }
    if (currentLang === "en" && enRef.current && esRef.current) {
      return {
        width: enRef.current.offsetWidth + "px",
        transform: `translateX(${esRef.current.offsetWidth}px)`,
      };
    }
    return {};
  };

  return (
    <div className="flex justify-end items-center min-h-[50px] px-2 bg-white rounded-full">
      <div className="relative flex rounded-full overflow-hidden">
        {/* Barra deslizante animada */}
        <div
          className="absolute top-0 left-0 h-full bg-[linear-gradient(90deg,#4841BB_0%,#4361D7_21%,#435FD5_85%,#4841BB_100%)] rounded-full z-0 transition-all duration-300"
          style={getSliderStyle()}
        />
        <button
          ref={esRef}
          onClick={() => i18n.changeLanguage("es")}
          className={`relative z-10 rounded-full flex items-center gap-2 px-4 py-1 font-semibold focus:outline-none transition-colors duration-300 ${
            currentLang === "es"
              ? "text-white"
              : "text-gray-700"
          }`}
        >
          <span className="text-xl">🇪🇸</span>
          <span>Spanish</span>
        </button>
        <button
          ref={enRef}
          onClick={() => i18n.changeLanguage("en")}
          className={`relative z-10 rounded-full flex items-center gap-2 px-4 py-1 font-semibold focus:outline-none transition-colors duration-300 ${
            currentLang === "en"
              ? "text-white"
              : "text-gray-700"
          }`}
        >
          <span className="text-xl">🇺🇸</span>
          <span>English</span>
        </button>
      </div>
    </div>
  );
}