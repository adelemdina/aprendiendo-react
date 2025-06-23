export const Relatos = () => {
    return(


               <section className="bg-gradient-to-tr from-[#191970] to-[#1a1a2e] min-h-screen w-full px-0 py-0 flex flex-col items-center">
            {/* Título y testimonios */}
            <div className="w-full max-w-7xl mx-auto pt-12">
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-10 text-center leading-tight">
                    Relatos de algunos<br />Clientes
                </h2>
                {/* Testimonios */}
                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-8 mb-8">
                    {/* Testimonio 1 */}
                    <div className="bg-[#4841BB] bg-opacity-80 rounded-xl p-6 flex flex-col items-center w-full md:w-1/3 shadow-lg">
                        <span className="text-4xl text-white mb-4">❝</span>
                        <p className="text-white mb-6 text-base">
                            “Colaborar con Medina en la app Titan Import Racing fue excepcional. Su experiencia en PHP y vinculación clave para armar una tienda en línea eficiente. Su compromiso y profesionalismo garantizan el éxito del proyecto.”
                        </p>
                        <div className="flex items-center gap-3 mt-auto">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Javier P." className="w-12 h-12 rounded-full border-2 border-white" />
                            <div className="text-left">
                                <div className="font-semibold text-white">Javier P. <span className="ml-1">🇺🇸</span></div>
                                <div className="text-xs text-white/80">Colaborador Import Racing App</div>
                            </div>
                        </div>
                    </div>
                    {/* Testimonio 2 */}
                    <div className="bg-[#4841BB] bg-opacity-80 rounded-xl p-6 flex flex-col items-center w-full md:w-1/3 shadow-lg">
                        <span className="text-4xl text-white mb-4">❝</span>
                        <p className="text-white mb-6 text-base">
                            “Su trabajo como diseñadora UX/UI, utilizando Figma y Tailwind CSS, impactó significativamente la experiencia del usuario. Sus soluciones centradas en el usuario fueron clave para la ejecución del proyecto.”
                        </p>
                        <div className="flex items-center gap-3 mt-auto">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Misladnyh H." className="w-12 h-12 rounded-full border-2 border-white" />
                            <div className="text-left">
                                <div className="font-semibold text-white">Misladnyh H. <span className="ml-1">🇻🇪</span></div>
                                <div className="text-xs text-white/80">Product Manager Emacsoft</div>
                            </div>
                        </div>
                    </div>
                    {/* Testimonio 3 */}
                    <div className="bg-[#4841BB] bg-opacity-80 rounded-xl p-6 flex flex-col items-center w-full md:w-1/3 shadow-lg">
                        <span className="text-4xl text-white mb-4">❝</span>
                        <p className="text-white mb-6 text-base">
                            “Trabajar con Adeleina Medina y su experiencia en PHP, JavaScript y CodeIgniter fue fundamental para mejorar las funcionalidades de nuestro sistema ERP. Contribuyó a la automatización de procesos. Altamente recomendada.”
                        </p>
                        <div className="flex items-center gap-3 mt-auto">
                            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Sebastian I." className="w-12 h-12 rounded-full border-2 border-white" />
                            <div className="text-left">
                                <div className="font-semibold text-white">Sebastian I. <span className="ml-1">🇻🇪</span></div>
                                <div className="text-xs text-white/80">Ing. Informática Sistema ERP</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Flechas de navegación (simulación) */}
                <div className="flex justify-center gap-4 mt-2 mb-2">
                    <button className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center text-2xl hover:bg-white/40 transition">&#8592;</button>
                    <button className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center text-2xl hover:bg-white/40 transition">&#8594;</button>
                </div>
            </div>
            {/* Contacto y formulario */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16 px-4 md:px-0 mt-2">
                {/* Columna de contacto */}
                <div className="md:w-1/2 w-full flex flex-col justify-center md:items-start items-center text-left md:pl-8">
                    <h3 className="text-white text-4xl md:text-5xl font-medium mb-8 leading-tight md:leading-tight text-left">
                        Comunícate conmigo<br />
                        para agendar una<br />
                        Reunión.
                    </h3>
                    <div className="mb-6">
                        <h4 className="font-semibold text-gray-300 mb-1">Llámame directamente</h4>
                        <p className="text-white font-medium text-lg mb-6">+58 4247055630</p>
                        <h4 className="font-semibold text-gray-300 mb-1">Correo electrónico de contacto</h4>
                        <a
                            href="mailto:Adelemdina@gmail.com"
                            className="block w-fit bg-transparent border border-[#4361D7] text-[#4361D7] px-3 py-1 rounded-md font-medium transition-colors hover:bg-[#4361D7] hover:text-white focus:outline-none"
                        >
                            Adelemdina@gmail.com
                        </a>
                    </div>
                </div>
                {/* Columna del formulario */}
                <div className="md:w-1/2 w-full flex items-center justify-center">
                    <form className="w-full max-w-xl bg-transparent text-left">
                        <div className="mb-4">
                            <label className="block text-white mb-1" htmlFor="nombre">
                                Nombre y apellidos
                            </label>
                            <input
                                id="nombre"
                                type="text"
                                placeholder="Nombre y apellidos"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4361D7] text-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-1" htmlFor="email">
                                Tu correo electrónico
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Correo electrónico"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4361D7] text-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-1" htmlFor="telefono">
                                Tu teléfono móvil
                            </label>
                            <input
                                id="telefono"
                                type="tel"
                                placeholder="Teléfono"
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4361D7] text-black"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-1" htmlFor="mensaje">
                                Tu mensaje
                            </label>
                            <textarea
                                id="mensaje"
                                placeholder="Mensaje"
                                rows={5}
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4361D7] text-black resize-none"
                            />
                        </div>
                        <div className="flex items-center mb-4">
                            <input
                                id="privacidad"
                                type="checkbox"
                                className="mr-2"
                            />
                            <label htmlFor="privacidad" className="text-white text-sm">
                                He leído y acepto la <a href="#" className="text-[#4361D7] underline">política de privacidad</a>.
                            </label>
                        </div>
                        <div className="mb-4">
                            {/* Simulación de reCAPTCHA */}
                            <div className="bg-white rounded-md p-2 flex items-center gap-2 w-64">
                                <input type="checkbox" className="w-5 h-5" />
                                <span className="text-black text-sm">I'm not a robot</span>
                                <div className="ml-auto">
                                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 h-8 inline" />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-4 flex items-center bg-white text-[#4361D7] hover:bg-[#4361D7] hover:text-white font-medium rounded-full px-8 py-2.5 shadow transition-colors text-xl mb-9"
                        >
                            Enviar Ahora
                            <span className="ml-3 w-8 h-8 flex items-center justify-center rounded-full bg-[#4361D7] text-white text-xl">
                                ↗
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}