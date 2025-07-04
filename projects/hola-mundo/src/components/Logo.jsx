export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img
        src="./src/assets/images/logo2.png"
        alt="Logo"
        className="object-contain rounded-lg 
          w-[100px] h-[77px]         /* tamaño móvil aumentado */
          sm:w-[120px] sm:h-[92px]   /* tablet */
          md:w-[130px] md:h-[95px]   /* desktop */
        "
      />
    </div>
  );
}