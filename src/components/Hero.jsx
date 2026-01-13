import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";
import Img from '/Hero.jpg';
export const Hero = () => {
  return (
    <motion.section
      // ID añadido para la navegación futura
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative min-h-[100dvh] min-w-full flex flex-col items-center justify-between px-6 py-12 overflow-hidden bg-sofia-base-white font-barlow"
    >
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow w-full max-w-2xl text-center">

        {/* Foto Principal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-[6px] bg-sofia-base-white shadow-2xl ring-1 ring-sofia-pink/30 mb-8"
        >
          <img
            src={Img}
            alt="Sofía"
            className="object-cover object-[50%_10%] w-full h-full"
          />
        </motion.div>

        {/* Branding Nombre */}
        <div className="mb-8">
          <h1
            style={{ fontFamily: "'Parisienne', cursive" }}
            className="text-6xl md:text-[10rem] text-sofia-pink leading-none drop-shadow-sm font-extralight"
          >
            Sofía
          </h1>
          <p className="font-bold text-sofia-dark tracking-[0.7em] uppercase text-[10px] mt-4 opacity-70">
            Mis XV Años
          </p>
        </div>

        {/* Sección de la Frase - Estilo Pill Glassmorphism */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center p-4 space-y-6 shadow-sm md:max-w-md bg-white/80 rounded-2xl backdrop-blur-sm"
        >
          {/* Frase en Parisienne */}
          <div className="p-1">
            <p
              style={{ fontFamily: "'Parisienne', cursive" }}
              className="text-xl font-thin leading-relaxed md:text-3xl text-sofia-base-dark"
            >
              "La cuenta regresiva ha comenzado. Acompáñame a celebrar este día especial en un hermoso lugar."
            </p>
          </div>

          {/* Fecha en Barlow (Contraste Técnico) */}
          <div className="px-10 py-1 border rounded-full shadow-inner bg-sofia-pink/20 backdrop-blur-sm border-sofia-pink/30">
            <span className="text-sofia-pink-dark font-bold tracking-[0.4em] text-[12px] uppercase">
              06 . 03 . 2026
            </span>
          </div>
        </motion.div>
      </div>

      {/* Footer Indicador */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex flex-col items-center mt-2"
      >
        <p className="font-medium text-sofia-gold text-[9px] tracking-[0.5em] uppercase mb-2">
          Desliza
        </p>
        <ChevronDown size={24} className="text-sofia-pink animate-bounce" />
      </motion.div>
    </motion.section>
  );
};