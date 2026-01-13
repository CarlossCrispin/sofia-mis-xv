import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const WelcomeSection = () => {
  // Variante para escalonar la aparición de los elementos (Stagger)
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      id="bienvenida"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      // bg-white para contraste limpio con el rosa del hero
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-12 overflow-hidden bg-sofia-pink-light font-barlow"
    >
      <div className="relative z-10 max-w-2xl mx-auto space-y-10 text-center">

        {/* Nombre: Usamos sofia-pink en Parisienne */}
        <motion.div custom={0} variants={fadeInUp}>
          <h2
            style={{ fontFamily: "'Parisienne', cursive" }}
            className="text-sofia-pink-dark text-7xl md:text-8xl drop-shadow-sm"
          >
            Sofía
          </h2>
        </motion.div>

        {/* Frase: Usamos sofia-dark con opacidad para elegancia */}
        <motion.div custom={1} variants={fadeInUp} className="px-2">
          <p className="text-xl italic font-light leading-relaxed md:text-2xl text-sofia-dark/70">
            "Un momento especial que quedará para siempre en nuestros corazones"
          </p>
        </motion.div>

        {/* Badge de Fecha: Fondo Pink Light y Texto Pink Dark */}
        <motion.div custom={2} variants={fadeInUp}>
          <div className="inline-flex items-center gap-3 px-8 py-4 border rounded-full shadow-sm bg-sofia-pink-light border-sofia-pink/20">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              // Punto de énfasis en el rosa vibrante
              className="w-3 h-3 bg-sofia-pink rounded-full shadow-[0_0_8px_rgba(219,156,170,0.6)]"
            />
            <span className="text-lg font-bold tracking-widest uppercase text-sofia-pink-dark">
              6 de Marzo, 2026
            </span>
          </div>
        </motion.div>

        {/* Subtexto: Usamos sofia-gold para un toque premium */}
        <motion.div custom={3} variants={fadeInUp}>
          <p className="text-sofia-gold-light font-medium tracking-[0.3em] uppercase text-[10px]">
            Hecho con amor para una celebración especial
          </p>
        </motion.div>

        {/* Fila de Corazones: Combinación de sofia-pink y relleno suave */}
        <motion.div
          custom={4}
          variants={fadeInUp}
          className="flex justify-center gap-4"
        >
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -8, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                delay: i * 0.15,
                repeat: Infinity,
                duration: 3
              }}
            >
              <Heart className="w-6 h-6 text-sofia-pink fill-white" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decoración de fondo integrada con la paleta */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sofia-pink-light/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sofia-pink-light/20 to-transparent" />
    </motion.section>
  );
};