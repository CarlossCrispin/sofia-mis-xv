export const VideoIntro = ({ onVideoEnd }) => {
  return (
    <div className="fixed inset-0 z-[110] bg-black flex items-center justify-center">
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
              onended="this.dispatchEvent(new CustomEvent('videoEnded'))"
            >
              <source src="/globes.mp4" type="video/mp4" />
            </video>
          `
        }}
        onVideoEnded={onVideoEnd} // Necesitarás ajustar el listener o usar el timer de 12s
      />
      {/* Botón Saltar Intro */}
      <button onClick={onVideoEnd} className="...">Saltar intro</button>
    </div>
  );
};