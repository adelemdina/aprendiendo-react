export const Content = () => {

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Div de texto */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md text-white">
          <h1>Hola! soy Adele Medina</h1>
            <h2>Developer and Web Designer</h2>
            <p>Adelemedina@gmail.com</p>
            <p>Mérida - Venezuela</p>
            <div>
                <a href="https://linkedin.com">LinkedIn</a>
                <a href="https://twitter.com">Twitter</a>
                <a href="https://github.com">GitHub</a>
            </div>
      </div>

      {/* Div de imagen */}
      <div className="flex justify-center">
        <img
          src="./src/assets/images/imagen.png"
          alt="ADelemdina"
          className="w-full max-w-sm object-contain rounded-lg shadow-lg"
        />
      </div>
    </section>
  );

}