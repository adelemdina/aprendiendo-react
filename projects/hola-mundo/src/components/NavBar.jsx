


export const NavBar = () => {
  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Acerca de', href: '#acerca' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Trabajos realizados', href: '#trabajos' }
  ];
  
  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-12 font-realtext text-lg font-regular">
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