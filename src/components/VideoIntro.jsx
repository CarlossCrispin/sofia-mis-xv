import React from 'react';

export const VideoIntro = ({ onVideoEnd }) => {
  return (
    <div className="fixed inset-0 z-[110] bg-black flex items-center justify-center overflow-hidden">
      {/* HACK UX: Inyectamos el HTML directo para que el navegador 
          detecte los atributos nativos al instante. 
      */}
      <div
        className="w-full h-full"
        dangerouslySetInnerHTML={{
          __html: `
            <video
              autoplay
              muted
              playsinline
              webkit-playsinline
              style="width:100%; height:100%; object-fit:cover;"
              id="introVideo"
            >
              <source src="/globes.mp4" type="video/mp4" />
            </video>
          `
        }}
      />

      <script>
        {/* Refuerzo por si el HTML falla */}
        document.getElementById('introVideo')?.play();
      </script>

      <button
        onClick={onVideoEnd}
        className="absolute bottom-12 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] px-6 py-3 rounded-full z-20 active:scale-95"
      >
        Saltar intro
      </button>
    </div>
  );
};