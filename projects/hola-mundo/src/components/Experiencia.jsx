import shapes from '../assets/images/Shapes.png';

export  const Experiencia = () => { 

return (
<section
  className="bg-white h-[321px] bg-cover bg-center bg-no-repeat flex justify-center items-center"
  style={{ backgroundImage: `url(${shapes})` }}
>
 
  <div className="flex flex-col md:flex-row gap-[50px] max-w-7xl w-full justify-center items-center text-center">

    <div className="min-w-[200px]">
      <h3 className="text-4xl font-bold mb-4 text-neutral-900 whitespace-nowrap">
        +5 Años
      </h3>
      <p className="text-neutral-700">
        Mi experiencia como desarrolladora y diseñadora Ux Ui
      </p>
    </div>

    <div className="min-w-[250px]">
      <h3 className="text-4xl font-bold mb-4 text-neutral-900 whitespace-nowrap">
        +10 Clientes Felices
      </h3>
      <p className="text-neutral-700">
        La satisfacción de los clientes es mi punto focal de la excelencia
      </p>
    </div>

    <div className="min-w-[250px]">
      <h3 className="text-4xl font-bold mb-4 text-neutral-900 whitespace-nowrap">
        +5 Tecnologías de uso
      </h3>
      <p className="text-neutral-700">
        PHP, JavaScript, MySQL, React, HTML, CSS, CodeIgniter...
      </p>
    </div>

  </div>
</section>


  );

}