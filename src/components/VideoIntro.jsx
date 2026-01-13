import { useState, useEffect } from 'react';
import globesVideo from '../assets/globes.mp4';
import fallbackImg from '../assets/fallback-image.jpg';

export const VideoIntro = ({ onVideoEnd }) => {
  const [videoError, setVideoError] = useState(false);

  // --- CONFIGURACIÓN DE DURACIÓN ---
  // Cambia este número para recortar el video (ej. 4000 = 4 segundos)
  const VIDEO_DURATION = 12000;
  // ---------------------------------

  useEffect(() => {
    // Si el video carga bien, este timer lo cortará a los X segundos
    const timer = setTimeout(() => {
      onVideoEnd();
    }, VIDEO_DURATION);

    return () => clearTimeout(timer); // Limpieza de memoria al desmontar
  }, [onVideoEnd]);

  return (
    <div className="fixed inset-0 z-[110] bg-black flex items-center justify-center overflow-hidden">
      {!videoError ? (
        <video
          autoPlay
          muted
          playsInline
          onEnded={onVideoEnd}
          onError={() => setVideoError(true)}
          className="w-full h-full object-cover"
        >
          <source src={globesVideo} type="video/mp4" />
        </video>
      ) : (
        <img
          src={fallbackImg}
          alt="Cargando..."
          onLoad={() => {
            console.log("Video falló, mostrando imagen de respaldo");
            // La imagen también tiene su propia configuración de duración
            setTimeout(onVideoEnd, 3000);
          }}
          className="w-full h-full object-cover"
        />
      )}

      <button
        onClick={onVideoEnd}
        className="absolute bottom-12 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] px-6 py-3 rounded-full z-20 active:scale-95 transition-transform"
      >
        Saltar intro
      </button>
    </div>
  );
};