import { useTranslation } from 'react-i18next';



export const NavBar = () => {
   const [t] = useTranslation("global");
   const navItems = [
    { name: t('navbar.home'), href: '#inicio' },
    { name: t('navbar.about'), href: '#acerca' },
    { name: t('navbar.services'), href: '#servicios' },
    { name: t('navbar.portfolio'), href: '#trabajos' }
  ];
  
  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-10 font-realtext text-lg font-regular">
        {navItems.map((item, index) => (
          <li key={index}> 
            <a
              href={item.href}
              className="text-white hover:text-blue-300 transition-colors cursor-pointer">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};