import React, { Component } from 'react'
import { Heart, Calendar, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
export class Test extends Component {
  render() {
    return (
      <div className="w-full bg-sofia-base-white rounded-2xl shadow-xl overflow-hidden border border-sofia-pink-light">
        <div className="p-8 text-center">
          <div className="flex flex-col items-center justify-center min-h-[400px] gap-8 bg-sofia-base-white p-10 rounded-3xl border-2 border-dashed border-sofia-pink-medium">
            <h2 className="text-sofia-pink-dark font-bold">Prueba de Animación</h2>

            {/* CUADRO ANIMADO: Cambia color, rota y escala */}
            <motion.div
              className="size-32 rounded-3xl shadow-2xl flex items-center justify-center text-white font-bold"
              animate={{
                scale: [1, 1.2, 1.2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                backgroundColor: ["#E9BDCB", "#D4AF37", "#9D6B7A", "#E7B7C8", "#E9BDCB"],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              ¡VIVO!
            </motion.div>

            {/* BOTÓN CON HOVER Y TAP (UX Táctil) */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-sofia-pink-dark text-white px-8 py-3 rounded-full shadow-lg"
            >
              Mantenme presionado
            </motion.button>

            <p className="text-xs text-sofia-muted italic text-center">
              Si el cuadro cambia de color y gira, Framer Motion está listo para el proyecto de Sofía.
            </p>
          </div>
          {/* Icono decorativo con Sparkles */}
          <div className="flex justify-center mb-4">
            <Sparkles className="text-sofia-gold size-8 animate-pulse" />
          </div>

          <h1 className="text-3xl font-bold text-sofia-pink-dark mb-4">
            Sofía Mis XV
          </h1>

          {/* Lista de detalles con iconos */}
          <div className="space-y-4 mb-8 text-left inline-block">
            <div className="flex items-center gap-3 text-sofia-base-dark">
              <Calendar className="text-sofia-pink-medium size-5" />
              <span>15 de Octubre, 2026</span>
            </div>
            <div className="flex items-center gap-3 text-sofia-base-dark">
              <MapPin className="text-sofia-pink-medium size-5" />
              <span>Salón de Eventos "Mágico"</span>
            </div>
          </div>

          <button className="w-full bg-sofia-pink hover:bg-sofia-pink-medium text-sofia-base-dark font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 transition-all">
            <Heart className="size-5 fill-current" />
            Confirmar Asistencia
          </button>
        </div>
      </div>
    );
  }
}

export default Test