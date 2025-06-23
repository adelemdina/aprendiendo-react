
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faPaintBrush, faUsers } from "@fortawesome/free-solid-svg-icons";
import shapes from '../assets/images/Shapes.png';


export const Acercade = () => {


  return (
      <section
      className="bg-white h-[820px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${shapes})` }}
    >
      <div className="max-w-6xl  text-left pl-20 pt-16 ">
       <h2 className="text-6xl font-bold leading-tight">
        <span className="text-mi-gradiente">Transforma</span>{' '}
        <span className="text-neutral-700">Tu</span> <br />
        <span className="text-neutral-700">Visión en</span>{' '}
        <span className="text-mi-gradiente">Realidad</span>
      </h2>
        <p className="text-neutral-500 mt-6 max-w-3xl text-lg">
          Te ofrezco soluciones personalizadas que capturan la esencia de cada
          proyecto. 
          Desde sitios web atractivos hasta aplicaciones funcionales,
          mi objetivo es transformar tus ideas en realidades digitales, siempre
          con un enfoque en la usabilidad y la estética.
        </p>

     </div>


  <div className="flex justify-center gap-56 mt-12 max-w-[1440px] mx-auto">
  {/* Tarjeta 1 */}
  <div className="w-[354px] h-[368px] bg-mi-gradiente text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
    <div className="flex flex-col items-start">
      <FontAwesomeIcon icon={faRocket} className="mb-6 text-[56px]" />
      <h3 className="text-[25px] font-bold">Desarrollo y programación</h3>
      <p className="text-[16px] leading-relaxed">
        Abarco desde la creación de sitios web dinámicos hasta aplicaciones personalizadas, utilizando tecnologías modernas y buenas prácticas para asegurar proyectos escalables y mantenibles.
      </p>
    </div>
  </div>

  {/* Tarjeta 2 */}
  <div className="w-[354px] h-[368px] bg-mi-gradiente text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
    <div className="flex flex-col items-start ">
      <FontAwesomeIcon icon={faPaintBrush} className="mb-6 text-[56px]" />
      <h3 className="text-[25px] font-bold">UI Interface de usuario</h3>
      <p className="text-[16px] leading-relaxed">
        Diseño de interfaces de usuario intuitivas y atractivas. Mi enfoque se centra en crear interfaces funcionales y agradables, asegurando que cada interacción sea fluida y satisfactoria.
      </p>
    </div>
  </div>

  {/* Tarjeta 3 */}
  <div className="w-[354px] h-[368px] bg-mi-gradiente text-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
    <div className="flex flex-col items-start ">
      <FontAwesomeIcon icon={faUsers} className="mb-6 text-[56px]" />
      <h3 className="text-[25px] font-bold">UX Experiencia de usuario</h3>
      <p className="text-[16px] leading-relaxed">
        Me enfoco en comprender las necesidades del usuario para diseñar soluciones que mejoren la interacción y maximicen la satisfacción. Busco que los usuarios se sientan cómodos y satisfechos.
      </p>
    </div>
  </div>

</div>
      
   
    </section>
  );
};