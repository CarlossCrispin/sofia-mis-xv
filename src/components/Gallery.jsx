import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export const GallerySection = () => {
  const images = [
    { id: 1, src: '/Img1.jpg', alt: 'Momento 1' },
    { id: 2, src: '/Img2.jpg', alt: 'Momento 2' },
    { id: 3, src: '/Img3.jpg', alt: 'Momento 3' },
    { id: 4, src: '/Hero.jpg', alt: 'Momento 4' },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full px-6 bg-[#FDF2F5] py-20 font-sans">

      {/* Título de la Galería */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h2
          className="mb-6 text-6xl text-gray-800"
          style={{ fontFamily: "'Parisienne', cursive" }}
        >
          Galeria
        </h2>

        {/* Icono de Cámara de Lucide */}
        <div className="flex justify-center mb-4">
          <Camera size={48} className="text-[#FB9BB4] opacity-80" strokeWidth={1.5} />
        </div>

        <p className="text-gray-500 text-[13px] uppercase tracking-[0.2em] font-medium max-w-[250px] mx-auto leading-relaxed">
          Momentos especiales que quiero compartir contigo!
        </p>
      </motion.div>

      {/* Grid de Imágenes (2 columnas para Mobile UX) */}
      <div className="grid w-full max-w-md grid-cols-2 gap-4 mb-12">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="overflow-hidden border-4 border-white shadow-sm aspect-square rounded-3xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {/* Tarjeta de Mensaje Final (Apegada a tu referencia) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm bg-white/60 backdrop-blur-sm rounded-[2rem] p-8 shadow-xl shadow-pink-100/50 border border-white text-center"
      >
        <p className="text-gray-600 italic text-[14px] leading-relaxed mb-6">
          "Cada fotografía guarda un pedacito del alma, y cada momento compartido se convierte en un tesoro eterno."
        </p>

        <p
          className="text-[#FB9BB4] text-3xl"
          style={{ fontFamily: "'Parisienne', cursive" }}
        >
          - Con amor, Sofía
        </p>
      </motion.div>

    </section>
  );
};