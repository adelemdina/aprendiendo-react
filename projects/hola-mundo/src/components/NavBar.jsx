


export const NavBar = () => {
  const navItems = ['Inicio', 'Acerca de', 'Servicios', 'Trabajos realizados'];
  
  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-12">
        {navItems.map((item, index) => (
          <li key={index} className="text-white hover:text-blue-300 transition-colors cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};