import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "lucide-react";

export const LocationModal = ({ isOpen, onClose, title, mapUrl, address }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleOpenMap = () => {
    window.open(mapUrl, '_blank', 'noopener,noreferrer');
  };

  // SOLUCIÓN: Usamos el endpoint de google.com/maps/embed/v1/place
  // Si no tienes API Key, este formato de "search" es el más compatible:
  const mapSearchUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 w-screen h-screen z-[99999] flex flex-col justify-end">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            className="relative w-full h-[90vh] bg-[#FDF2F5] rounded-t-[40px] shadow-2xl flex flex-col z-[100000]"
          >
            <div className="w-12 h-1.5 bg-pink-200/40 rounded-full mx-auto mt-4 mb-2 shrink-0" />

            <div className="flex flex-col flex-1 min-h-0 px-6 pb-12">

              <div className="mb-3 text-center shrink-0">
                <h3 className="text-xl italic font-black tracking-tighter text-gray-900 uppercase sm:text-2xl">
                  {title}
                </h3>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.15em] mt-1 px-2">
                  {address}
                </p>
              </div>

              {/* MAPA CON URL CORREGIDA */}
              <div className="flex-[0.85] w-full overflow-hidden border-4 border-white shadow-xl rounded-3xl bg-white mb-4 min-h-0">
                <iframe
                  title="map-location"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={mapSearchUrl}
                  className="grayscale-[0.1] contrast-[1.1]"
                ></iframe>
              </div>

              <div className="flex flex-col gap-2 shrink-0">
                <button
                  onClick={handleOpenMap}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-[#FB9BB4] text-white rounded-2xl font-black shadow-lg shadow-pink-200 uppercase tracking-widest text-[11px] active:scale-95 transition-transform"
                >
                  <Navigation size={18} />
                  Abrir en Google Maps
                </button>

                <button
                  onClick={onClose}
                  className="py-2 text-gray-400 font-bold uppercase text-[9px] tracking-[0.4em]"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};