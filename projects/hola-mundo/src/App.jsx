import { Content } from "./components/Content";
import { Trabajos } from "./components/Trabajos";
import { Header } from "./components/Header";
import { Acercade } from "./components/Acercade";
import { Experiencia } from "./components/Experiencia";
import { Relatos } from "./components/Relatos";
import { Footer } from "./components/Footer";
export function App() {
  return (
    <div className=" bg-white text-black ">
        <Header />

      <Content />    
              <Acercade />  {/* con partículas locales */}
      <Trabajos />
      <Experiencia />
        <Relatos />
        <Footer />    {/* con partículas locales */}
    </div>
  );
}