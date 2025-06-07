

export const NavBar = () => {
  return (
  <ul class="bg-amber-100text-white hidden flex sm:flex
  text-[16px] font-regular w[438px] bg-amber-200 w-full flex gap-6 justify-center
  ">
    
   <li>
    <a href="#">Inicio</a>
    </li>

   <li>
    <a href="#">Acerca de</a>
   </li>
   <li>
    <a href="#">Servicios</a>
   </li>
   <li>
    Trabajos Realizados
   </li>
    <li><button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full cursor-pointer flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-colors duration-300">
          <span>Contáctame</span>
          <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l10-10" />
            </svg>
          </span>
        </button></li>
  </ul>
  
   
  )
}

