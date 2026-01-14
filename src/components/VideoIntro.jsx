import { useState, useEffect, useRef } from 'react';
import fallbackImg from '../assets/fallback-image.jpg'; // Asegúrate que esta ruta sea correcta

export const VideoIntro = ({ onVideoEnd }) => {
  const videoRef = useRef(null);
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // 1. Forzamos atributos nativos para saltar bloqueos de iOS/Android
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');

    // 2. Intentar Play con manejo de Promesa
    const playAttempt = () => {
      video.play()
        .then(() => setVideoStarted(true))
        .catch(error => {
          console.log("Autoplay bloqueado: esperando interacción", error);
          // Si falla, al primer toque del usuario en la pantalla se activará
          const forcePlay = () => {
            video.play();
            setVideoStarted(true);
            window.removeEventListener('touchstart', forcePlay);
          };
          window.addEventListener('touchstart', forcePlay);
        });
    };

    playAttempt();

    // 3. Temporizador de seguridad (12s)
    const timer = setTimeout(onVideoEnd, 12000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('touchstart', () => { });
    };
  }, [onVideoEnd]);

  return (
    <div className="fixed inset-0 z-[110] bg-black flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        playsInline
        muted
        preload="auto"
        onEnded={onVideoEnd}
        className={`w-full h-full object-cover transition-opacity duration-1000 ${videoStarted ? 'opacity-100' : 'opacity-0'}`}
      >
        {/* IMPORTANTE: Usa la ruta absoluta de /public */}
        <source src="/globes.mp4" type="video/mp4" />
      </video>

      {/* Imagen de fondo mientras el video carga para que no se vea negro */}
      {!videoStarted && (
        <img
          src={fallbackImg}
          className="absolute inset-0 object-cover w-full h-full opacity-50"
          alt="Cargando..."
        />
      )}

      <button
        onClick={onVideoEnd}
        className="absolute bottom-12 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] px-6 py-3 rounded-full z-20"
      >
        Saltar intro
      </button>
    </div>
  );
};