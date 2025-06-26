import shapes from '../assets/images/Shapes.png';
import { useTranslation } from 'react-i18next'; 

export  const Experiencia = () => { 
const [t] = useTranslation("global");
const experiencia = t("experiencia.items", { returnObjects: true });
return (
<section
  className="bg-white h-[321px] bg-cover bg-center bg-no-repeat flex justify-center items-center"
  style={{ backgroundImage: `url(${shapes})` }}
>
 
  <div className="flex flex-col md:flex-row gap-[50px] max-w-7xl w-full justify-center items-center text-center">
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