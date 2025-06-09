


export const NavBar = () => {
  const navItems = ['Inicio', 'Acerca de', 'Servicios', 'Trabajos realizados'];
  
  return (
    <nav class="hidden lg:block">
      <ul class="flex space-x-12">
        {navItems.map((item, index) => (
          <li key={index} class="text-white hover:text-blue-300 transition-colors cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};