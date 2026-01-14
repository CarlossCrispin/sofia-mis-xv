import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Sparkles } from 'lucide-react';

export const DressCodeSection = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full px-6 bg-[#FDF2F5] text-center overflow-hidden">

      {/* 1. Encabezado de Sección */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <span className="text-[#FB9BB4] uppercase tracking-[0.4em] text-lg font-black" >
          Protocolo de Vestimenta
        </span>
        <h2 className="mt-2 font-serif text-6xl italic text-gray-800" style={{ fontFamily: "'Parisienne', cursive" }}>Formal</h2>
      </motion.div>

      {/* 2. Tu Imagen AVIF (Centro de la composición) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-[280px] aspect-[4/5] flex items-center justify-center"
      >
        <img
          src="/siluetas.avif"
          alt="Dress Code"
          className="object-contain w-full h-full mix-blend-multiply opacity-90"
        />
      </motion.div>

      {/* 3. Iconos Lucide (Refuerzo de UX para lectura rápida) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center gap-10 mt-8 mb-12"
      >
       
      </motion.div>

      {/* 4. Mensaje del Color Reservado (UX Copy) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-[300px]"
      >
        <div className="h-[1px] w-12 bg-[#FB9BB4]/40 mx-auto mb-6"></div>

        <div className="bg-white/40 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/60 shadow-sm">
          <p className="font-serif text-lg italic leading-snug text-gray-700">
            "Con mucha ilusión, hemos reservado el color
            <span className="text-[#FB9BB4] font-bold block mt-1">Rosa</span>
            exclusivamente para Sofía"
          </p>
        </div>

        <p className="text-[9px] text-gray-900 uppercase tracking-[0.5em] mt-8">
          Apreciamos tu cariño
        </p>
      </motion.div>

    </section>
  );
};