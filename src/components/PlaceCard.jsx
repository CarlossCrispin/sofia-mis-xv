import React, { useState } from "react";
import { motion } from "framer-motion";
import { LocationModal } from "./LocationModal";

import GroupHeart from '/GroupHeart.svg';
import Circle from '/Circle02.svg';

export const PlaceCard = ({ title, type, address, time, mapUrl, icon: Icon, vectorType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const vectorImg = vectorType === "heart" ? GroupHeart : Circle;

  return (
    <div className="flex flex-col items-center w-full px-2 space-y-4">

      {/* Título: Ahora con Parisienne y escala optimizada */}
      <h2
        className="mb-2 text-5xl italic leading-tight text-center text-gray-800 sm:text-6xl md:text-7xl"
        style={{ fontFamily: "'Parisienne', cursive" }}
      >
        {title}
      </h2>

      <div className="relative flex items-center justify-center w-[98%] max-w-[520px] aspect-square">

        {/* Vector de fondo */}
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.8 }}
          transition={{ duration: 0.8 }}
          src={vectorImg}
          alt=""
          className="absolute inset-0 z-0 object-contain w-full h-full pointer-events-none"
        />

        {/* CONTENIDO RESPONSIVO */}
        <div className="relative z-10 flex flex-col items-center text-center px-[12%] w-full space-y-1 sm:space-y-3">

          {/* Icono: Escala de 40px a 64px */}
          <Icon className="w-10 h-10 mb-1 text-gray-900 sm:w-14 sm:h-14 md:w-16 md:h-16" />

          {/* Nombre del lugar */}
          <h3 className="text-xl font-black leading-tight tracking-tight text-gray-900 uppercase sm:text-2xl md:text-3xl">
            {type}
          </h3>

          {/* Dirección */}
          <p className="text-[10px] sm:text-[12px] md:text-sm leading-tight sm:leading-snug text-gray-500 font-bold uppercase tracking-wide px-2">
            {address}
          </p>

          {/* Horario: Manteniendo el Rosa Sofía en los números/tiempo */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FB9BB4] italic tabular-nums">
            {time}
          </p>

          {/* Botón: Estilizado con la paleta de Sofía */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative z-20 mt-2 sm:mt-4 px-6 sm:px-10 py-2.5 sm:py-3.5 bg-[#FB9BB4]/20 text-[#FB9BB4] rounded-full font-black text-[10px] sm:text-xs md:text-sm uppercase tracking-widest hover:bg-[#FB9BB4] hover:text-white transition-all duration-300 border-2 border-[#FB9BB4]/20 shadow-sm active:scale-95"
          >
            Cómo llegar
          </button>
        </div>
      </div>

      <LocationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        address={address}
        mapUrl={mapUrl}
      />
    </div>
  );
};