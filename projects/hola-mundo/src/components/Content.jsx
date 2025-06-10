import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter,faInstagram, faBehance  } from '@fortawesome/free-brands-svg-icons'

export const Content = () => {

  return (
    <section>
      <div>
      <h1 class="text-5xl text-white">Hola! Soy</h1>
         <h1 className="text-8xl font-bold bg-gradient-to-r from-[#4841BB] via-[#4361D7] to-[#4841BB] bg-clip-text text-transparent"><span class="text-white">Adele</span> Medina</h1>
            <h2 class="text-2xl text-white">Developer and Web Designer</h2>
      </div>
   
   <div class="text-5x1">
            <p class="text-4xl font-bold">Adelemedina@gmail.com</p>
            <p class="text-2x1 font-regular">Mérida - Venezuela</p>
            </div>
   
         <div className="md:ml-8 flex justify-end w-full md:w-auto pr-[56px]">
        <img
          src="./src/assets/images/imagen.png"
          alt="ADelemdina"
             style={{ width: '865px', height: '865px' }}
          class="object-contain rounded-lg shadow-lg"
        />
      </div>
    </section>
  );

}