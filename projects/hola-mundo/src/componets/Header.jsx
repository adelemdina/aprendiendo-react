import logo from '../assets/images/logo2.png';
import { NavBar } from './NavBar';
export const Header = () => {
    return (
     <header class="flex place-content-between">
      <div class="logo w-[90.53px] h-[70px] flex items-center bg-amber-300">
           <img src={logo} alt="" />
        </div>
        <div class="flex justify-end items-center min-h-[80px]  px-4">
      <div class="flex  rounded-full overflow-hidden border border-gray-200">
        <button class="flex items-center gap-2 px-4 py-1 bg-blue-700 text-white font-semibold focus:outline-none">
          <span class="text-xl">🇪🇸</span>
          <span>Español</span>
        </button>
        <button class="flex items-center gap-2 px-4 py-1 text-gray-700 font-semibold focus:outline-none">
          <span class="text-xl">🇺🇸</span>
          <span>Ingles</span>
        </button>
      </div>
    </div>
      <NavBar />
    </header>
    )
}