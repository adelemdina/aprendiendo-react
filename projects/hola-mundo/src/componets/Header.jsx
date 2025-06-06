import logo from '../assets/images/logo2.png';
import { NavBar } from './NavBar';
export const Header = () => {
    return (
     <header class="flex place-content-between">
        <div class="logo">
           <img src={logo} alt="" />
        </div>
      <NavBar />
    </header>
    )
}