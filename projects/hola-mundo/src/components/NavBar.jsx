import { useTranslation } from 'react-i18next';

export const NavBar = ({ isMobile = false, onLinkClick }) => {
  const [t] = useTranslation("global");

  const navItems = [
    { name: t('navbar.home'), href: '#inicio' },

    { name: t('navbar.services'), href: '#acerca' },
    { name: t('navbar.portfolio'), href: '#servicios' },
    { name: t('navbar.testimonios'), href: '#testimonios' },
  ];

  return (
    <nav className={isMobile ? "block lg:hidden w-full" : "hidden md:block"}>
      <ul
        className={`${
          isMobile
            ? "flex flex-col items-center gap-4"
            : "flex flex-wrap justify-center md:gap-6 lg:space-x-10"
        } text-base sm:text-lg md:text-xl font-realtext font-regular`}
      >
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              onClick={onLinkClick}
              className={`relative group ${isMobile ? "text-secondary" : "text-white"} transition-colors hover:shadow-lg`}
            >
              {item.name}
              <span
                className="absolute left-0 -bottom-1 h-0.5 bg-current w-0 group-hover:w-full transition-all duration-300 rounded"
              ></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
