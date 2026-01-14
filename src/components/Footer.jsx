import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full px-6 py-20 bg-[#FDF2F5] text-center overflow-hidden">

      {/* Nombre con Parisienne - Estilo de la referencia */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2
          className="mb-6 text-6xl text-gray-800 font-extralight"
          style={{ fontFamily: "'Parisienne', cursive" }}
        >
          Sofía
        </h2>
      </motion.div>

      {/* Frase Emotiva */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-gray-600 text-[15px] leading-relaxed max-w-[280px] mb-8 font-medium"
      >
        "Un momento especial que quedará para siempre en nuestros corazones"
      </motion.p>

      {/* Badge de Fecha - Estilo exacto a la imagen */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="flex items-center gap-3 px-6 py-3 mb-10 border border-white rounded-full shadow-sm bg-white/60"
      >
        <div className="w-3 h-3 bg-[#FB9BB4] rounded-full shadow-[0_0_8px_rgba(251,155,180,0.5)]" />
        <span className="text-[#FB9BB4] font-bold text-sm tracking-wider">
          6 de Marzo; 2026
        </span>
      </motion.div>

      {/* Crédito final */}
      <p className="text-gray-500 text-[11px] uppercase tracking-[0.2em] font-bold mb-6">
        Hecho con amor para una celebración especial
      </p>

      {/* Corazones dibujados a mano - Usando tu recurso GroupHeart.svg */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-32"
      >
        <img
          src="/GroupHeart.svg"
          alt="Decoración corazones"
          className="w-full h-auto opacity-60"
        />
      </motion.div>

    </footer>
  );
};