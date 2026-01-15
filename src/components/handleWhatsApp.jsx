import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart } from 'lucide-react';

export const RSVPSection = () => {
  const handleWhatsApp = () => {
    const phone = "525564550099";
    // Mensaje actualizado para que el usuario sepa que debe elegir una opción
    const message = encodeURIComponent(
      "¡Hola! ✨\n\nQuiero confirmar mi asistencia a los XV años de Sofía. 🎂\n\n(Por favor, selecciona una opción y borra la otra):\n✅ Sí asistiré.\n❌ No podré asistir.\n\nNombre(s):"
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="rsp" className="flex flex-col items-center justify-center min-h-screen w-full px-6 bg-[#FDF2F5] py-20 font-sans overflow-hidden">

      {/* Título Superior */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-6 text-center"
      >
        <h2
          style={{ fontFamily: "'Parisienne', cursive" }}
          className="text-4xl leading-none text-gray-800 md:text-6xl drop-shadow-sm font-extralight"
        >
          Confirmar tu asistencia
        </h2>
      </motion.div>

      {/* CONTENEDOR CON EL FRAME */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative max-w-[450px] w-full aspect-[4/5] flex items-center justify-center"
      >
        <img
          src="/FrameConfirm.svg"
          alt="Frame de confirmación"
          className="absolute inset-0 object-contain w-full h-full pointer-events-none"
        />

        <div className="relative z-10 flex flex-col items-center px-12 pt-4 text-center">
          <p className="text-gray-700 text-[14px] leading-relaxed mb-8 italic font-medium p-4 max-w-[280px]">
            "Tu presencia hará que este sueño sea real. Por favor, confírmanos para esperarte con mucha ilusión."
          </p>

          <div className="mb-8">
            <span className="text-sofia-pink-dark font-bold tracking-[0.4em] text-xs uppercase">
              Fecha limite de confirmación
            </span>
          </div><div className="mb-8">
            <span className="text-gray-400 font-bold tracking-[0.4em] text-xs uppercase">
              1 . FEB . 2026
            </span>
          </div>

          {/* BOTÓN DE ACCIÓN */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-3 bg-[#FB9BB4] hover:bg-[#fa8aa9] text-white px-8 py-4 rounded-full shadow-lg shadow-pink-200 transition-all group"
          >
            <MessageCircle size={24} className="group-hover:animate-bounce" />
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "'Parisienne', cursive" }}
            >
              Confirma Aquí
            </span>
          </motion.button>

          <p className="mt-4 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
            vía WhatsApp
          </p>
        </div>
      </motion.div>

      {/* Ayuda UX Actualizada: Ahora indica que debe elegir una opción */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 max-w-[300px] flex items-center gap-3 bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-white"
      >
        <Heart size={14} className="text-[#FB9BB4] shrink-0" />
        <p className="text-[10px] text-gray-600 leading-tight uppercase tracking-[0.1em] font-bold">
          Al hacer clic, se abrirá WhatsApp. <span className="text-[#FB9BB4]">Elige una opción(Sí asistiré / No podré)</span>, escribe tu nombre y envía el mensaje.
        </p>
      </motion.div>

    </section>
  );
};