import { useState, useEffect, useRef } from 'react';
import globesVideo from '../assets/globes.mp4';
import fallbackImg from '../assets/fallback-image.jpg';

export const VideoIntro = ({ onVideoEnd }) => {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null); // Referencia para controlar el DOM

  const VIDEO_DURATION = 12000;

  useEffect(() => {
    // Intentar forzar el play manualmente
    if (videoRef.current) {
      videoRef.current.muted = true; // Refuerzo de silencio por JS
      videoRef.current.defaultMuted = true;

      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay bloqueado por el navegador, activando fallback");
          // Si el navegador bloquea el video, podrías mostrar la imagen o un botón de "Play"
          // setVideoError(true); 
        });
      }
    }

    const timer = setTimeout(() => {
      onVideoEnd();
    }, VIDEO_DURATION);

    return () => clearTimeout(timer);
  }, [onVideoEnd]);

  return (
    <div className="fixed inset-0 z-[110] bg-black flex items-center justify-center overflow-hidden">
      {!videoError ? (
        <video
          ref={videoRef} // Conectamos la referencia
          autoPlay
          muted
          playsInline
          webkit-playsinline="true" // Atributo extra para versiones viejas de iOS
          preload="auto"
          onEnded={onVideoEnd}
          onError={() => setVideoError(true)}
          className="object-cover w-full h-full"
        >
          <source src={globesVideo} type="video/mp4" />
        </video>
      ) : (
        <img
          src={fallbackImg}
          alt="Cargando..."
          onLoad={() => {
            setTimeout(onVideoEnd, 3000);
          }}
          className="object-cover w-full h-full"
        />
      )}

      {/* Botón Saltar Intro */}
      <button
        onClick={onVideoEnd}
        className="absolute bottom-12 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] px-6 py-3 rounded-full z-20 active:scale-95 transition-transform"
      >
        Saltar intro
      </button>
    </div>
  );
};