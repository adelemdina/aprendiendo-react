export const LanguageSelector = () => {
  

  return (
   <div class="flex justify-end items-center min-h-[80px]  px-4">
      <div class="flex  rounded-full overflow-hidden border border-gray-200">
        <button class="flex items-center gap-2 px-4 py-1 bg-[linear-gradient(90deg,#4841BB_0%,#4361D7_21%,#435FD5_85%,#4841BB_100%)] text-white font-semibold focus:outline-none">
          <span class="text-xl">🇪🇸</span>
          <span>Español</span>
        </button>
        <button class="flex items-center gap-2 px-4 py-1 bg-white text-gray-700 font-semibold focus:outline-none">
          <span class="text-xl">🇺🇸</span>
          <span>Ingles</span>
        </button>
      </div>
    </div>
  );
}