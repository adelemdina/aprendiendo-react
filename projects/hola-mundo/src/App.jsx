
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Links } from "./components/Links";
import { Acercade } from "./components/Acercade";
import fondo from './assets/images/Group.png';
import { Trabajos } from "./components/Trabajos";
import { Experiencia } from "./components/Experiencia";
import { Relatos } from "./components/Relatos";
import { Footer } from "./components/Footer";


export function App () {
    return(
 <div className="relative min-h-screen overflow-hidden">


      {/* Contenido encima del fondo */}
      <div className="relative z-10">
        <Header />
        
        <Content />
        <Acercade />
      
        <Trabajos />
        <Experiencia />
        <Relatos />
        <Footer />
        
      </div>
    </div>
    )
}

