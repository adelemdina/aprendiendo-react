import { useTranslation } from 'react-i18next';

export const NavBar = ({ isMobile = false, onLinkClick }) => {
  const [t] = useTranslation("global");

  const navItems = [
    { name: t('navbar.home'), href: '#inicio' },
    { name: t('navbar.about'), href: '#acerca' },
    { name: t('navbar.services'), href: '#servicios' },
    { name: t('navbar.portfolio'), href: '#trabajos' },
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
              className="text-white hover:text-blue-300 transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
