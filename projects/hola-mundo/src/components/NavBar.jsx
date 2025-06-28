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
    <nav className={isMobile ? "block lg:hidden" : "hidden lg:block"}>
      <ul className={`flex ${isMobile ? "flex-col gap-4" : "space-x-10"} text-lg font-realtext font-regular`}>
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              onClick={onLinkClick}
              className="text-white hover:text-blue-300 transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
