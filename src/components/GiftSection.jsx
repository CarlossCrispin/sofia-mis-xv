import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, MailOpen, Banknote } from 'lucide-react';

export const GiftsSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 bg-[#FDF2F5] py-20 overflow-hidden">

      {/* 1. Confeti de Regalos (Fondo decorativo) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: [0, 800],
              opacity: [0, 0.4, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute text-[#FB9BB4]"
            style={{ left: `${Math.random() * 100}%` }}
          >
            <Gift size={24} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md text-center">
        {/* Icono Principal */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          className="flex justify-center mb-6"
        >
          <div className="p-6 bg-white rounded-full shadow-sm">
            <Gift size={64} className="text-[#FB9BB4]" />
          </div>
        </motion.div>

        {/* Título - Fuente Parisienne para impacto */}
        <h2
          className="mb-4 text-6xl text-slate-900"
          style={{ fontFamily: "'Parisienne', cursive" }}
        >
          Presentes
        </h2>

        <p className="px-4 mb-12 text-sm font-medium leading-relaxed text-slate-700">
          Tu presencia es nuestro mejor regalo, pero si deseas tener un detalle con la festejada...
        </p>

        {/* CARD DE LLUVIA DE SOBRES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-10 shadow-xl shadow-pink-100/50 border border-white relative overflow-hidden"
        >
          {/* Animación del Sobre y Corazón */}
          <div className="relative flex items-center justify-center h-24 mb-6">
            {/* El sobre de Lucide */}
            <MailOpen size={60} className="text-[#FB9BB4] relative z-10" />

            {/* Corazón que sale disparado hacia arriba infinitamente */}
            <motion.div
              animate={{
                y: [10, -60],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute text-[#FB9BB4]"
            >
              <Heart size={32} fill="currentColor" />
            </motion.div>
          </div>

          <h3 className="mb-3 text-2xl font-bold tracking-tighter uppercase text-slate-900">
            Lluvia de Sobres
          </h3>

          <p className="mb-8 text-sm leading-snug text-slate-600">
            Es la tradición de regalar dinero dentro de un sobre el día del evento.
            <span className="block mt-2 font-semibold text-[#FB9BB4]">¡Muchas gracias!</span>
          </p>

          {/* Icono de billete decorativo */}
          <div className="flex justify-center gap-2 text-slate-300">
            <Banknote size={20} />
            <div className="w-12 h-[1px] bg-slate-100 self-center"></div>
            <Banknote size={20} />
          </div>
        </motion.div>

        {/* Pie de sección */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center gap-2 mt-12"
        >
          <Heart size={20} className="text-[#FB9BB4] animate-pulse" />
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.3em]">
            Sofía agradece tu cariño
          </p>
        </motion.div>
      </div>
    </section>
  );
};