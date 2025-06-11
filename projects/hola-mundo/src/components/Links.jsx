

export const Links = () => {
  return (
    <section className="text-center py-10">
      <h1 className="text-4xl text-white mb-6">Sígueme en mis redes sociales</h1>
      
      <div className="flex justify-center gap-6">
        {/* Instagram Link */}
        <a
          href="https://www.instagram.com/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-pink-500 transition-colors duration-300"
          aria-label="Instagram"
        >
          Instagram
        </a>
        
        {/* Facebook Link */}
        <a
          href="https://www.facebook.com/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 transition-colors duration-300"
          aria-label="Facebook"
        >
          Facebook
        </a>
        
        {/* Twitter Link */}
        <a
          href="https://twitter.com/tu_usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
          aria-label="Twitter"
        >
          Twitter
        </a>
      </div>
    </section>
  );
};

