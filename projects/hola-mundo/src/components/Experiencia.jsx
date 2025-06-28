import shapes from '../assets/images/Shapes.png';
import { useTranslation } from 'react-i18next'; 

export  const Experiencia = () => { 
const [t] = useTranslation("global");
const experiencia = t("experiencia.items", { returnObjects: true });
return (


<section
    className="
    bg-white bg-cover bg-center bg-no-repeat flex justify-center items-center 
     sm:h-[280px] md:h-[321px] 
    py-12 sm:py-8 md:py-0
    px-4 sm:px-6 md:px-0
  "
  //   className="
  //   bg-white bg-cover bg-center bg-no-repeat flex justify-center items-center 
  //   h-[220px] sm:h-[280px] md:h-[321px] px-4 sm:px-6 md:px-0
  // "
  style={{ backgroundImage: `url(${shapes})` }}
>
 {/* <div className="flex flex-col md:flex-row gap-8 sm:gap-12 max-w-7xl w-full justify-center items-center text-center px-2 sm:px-0"></div> */}
 {/* <div className="flex flex-col md:flex-row gap-12 max-w-7xl w-full justify-center items-center text-center"></div> */}
 <div className="flex flex-col md:flex-row gap-8 sm:gap-12 max-w-7xl w-full justify-center items-center text-center px-2 sm:px-0">

{experiencia.map((item, idx) => (
  <div key={idx} className="min-w-[200px] md:min-w-[250px]">
    <h3 className="text-4xl font-bold mb-4 text-neutral-900 whitespace-nowrap">
      {item.titulo}
    </h3>
    <p className="text-neutral-700">
      {item.descripcion}
    </p>
  </div>
))}
   
  </div>
</section>


  );

}