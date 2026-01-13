import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

// Assets
import BgStars from '/BG.png';
import Frame from '/Frame.svg';
import SofiaCharacter from '/Per.svg';

export const MusicSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.10); // 10% de volumen inicial
  const audioRef = useRef(null);

  // RUTA SEGÚN TU ESTRUCTURA DE CARPETAS
  const songUrl = "/Music/Pista.mp3";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;

    const handleUnlock = async () => {
      try {
        audio.volume = volume;
        await audio.play();
        setIsPlaying(true);
        window.removeEventListener("touchstart", handleUnlock);
        window.removeEventListener("click", handleUnlock);
      } catch (err) {
        console.log("Esperando interacción para activar Paradise...");
      }
    };

    // Intento de reproducción automática (Autoplay)
    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        window.addEventListener("touchstart", handleUnlock);
        window.addEventListener("click", handleUnlock);
      });

    return () => {
      window.removeEventListener("touchstart", handleUnlock);
      window.removeEventListener("click", handleUnlock);
    };
  }, []);

  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    audioRef.current.volume = val;
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="musica" className="relative h-[100dvh] w-full flex items-center justify-center bg-white overflow-hidden">

      {/* 1. FONDO DE ESTRELLAS */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-70"
        style={{
          backgroundImage: `url(${BgStars})`,
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat'
        }}
      />

      {/* 2. CONTENEDOR DEL REPRODUCTOR */}
      <div className="relative z-10 flex items-center justify-center w-3/4 h-3/4">

        {/* MARCO (Atrás) */}
        <img src={Frame} alt="" className="absolute inset-0 w-full h-full object-contain z-0 rotate-[-4deg] scale-110 pointer-events-none" />

        {/* SOFÍA (Medio) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <motion.img
            src={SofiaCharacter}
            animate={isPlaying ? { y: [0, -8, 0], rotate: [0, 0.5, -0.5, 0] } : { y: 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[75%] h-auto mb-16 select-none"
          />
        </div>

        {/* CONTROLES: Opción High Contrast */}
        <div className="absolute bottom-[10%] w-[75%] max-w-[320px] z-20 flex flex-row items-center gap-3 bg-[#FB9BB4] p-3 rounded-full shadow-[0_10px_25px_rgba(251,155,180,0.4)] border-2 border-white/80">

          {/* BOTÓN PLAY/STOP: Blanco sólido para que "salte" a la vista */}
          <button
            onClick={togglePlay}
            className="w-12 h-12 flex-shrink-0 bg-white rounded-full flex items-center justify-center text-[#FB9BB4] shadow-lg active:scale-95 transition-all"
          >
            {isPlaying ? (
              <div className="w-4 h-4 bg-[#FB9BB4] rounded-[2px]" />
            ) : (
              <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#FB9BB4] border-b-[8px] border-b-transparent" />
            )}
          </button>

          {/* SLIDER: Fondo semi-transparente sobre el rosa fuerte */}
          <div className="flex items-center flex-1 gap-2 px-3 py-2 rounded-full bg-black/10">
            <div className="text-white">
              {volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </div>

            <div className="relative flex items-center flex-1 h-4">
              {/* Barra de fondo (Blanco suave) */}
              <div className="absolute w-full h-[4px] bg-white/40 rounded-full" />

              {/* Progreso (Blanco sólido) */}
              <div
                className="absolute h-[4px] bg-white rounded-full transition-all"
                style={{ width: `${volume * 100}%` }}
              />

              <input
                type="range" min="0" max="1" step="0.01" value={volume}
                onChange={handleVolumeChange}
                className="absolute z-20 w-full opacity-0 cursor-pointer"
              />

              {/* Punto: Blanco con sombra */}
              <div
                className="absolute h-5 w-5 bg-white rounded-full shadow-md z-10 pointer-events-none border border-[#FB9BB4]"
                style={{ left: `calc(${volume * 100}% - 10px)` }}
              />
            </div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={songUrl} loop />
    </section>
  );
};