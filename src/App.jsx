import './App.css'
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { SplashScreen } from './components/SplashScreen';
import { VideoIntro } from './components/VideoIntro';
import { useEffect, useState } from 'react';
import { MusicSection } from './components/MusicSection.jsx';
import { WelcomeSection } from './components/WelcomeSection.jsx';
import { CountdownSection } from './components/CountdoenSection.jsx'; // Nota: verifica si el nombre es Countdown o Countdoen
import { Navigation } from './components/Navigation.jsx';
import { PlaceSection } from './components/PlaceSection.jsx';
import { DressCodeSection } from './components/DressCodeSection.jsx';
import { RSVPSection } from './components/handleWhatsApp.jsx';
import { GiftsSection } from './components/GiftSection.jsx';
import { GallerySection } from './components/Gallery.jsx';
import { Footer } from './components/Footer.jsx';


function App() {
  const [phase, setPhase] = useState('video'); // fases: 'video', 'splash', 'ready'

  // Efecto para resetear el scroll al entrar a la invitación
  useEffect(() => {
    if (phase === 'ready') {
      window.scrollTo(0, 0);
    }
  }, [phase]);

  const handleStartInvitation = () => {
    // Esta función se dispara al terminar el Splash
    // Al ejecutarse aquí, el navegador detecta "interacción de usuario"
    setPhase('ready');
  };

  return (
    <div className="min-h-screen bg-sofia-base-white">

      <AnimatePresence mode="wait">
        {phase === 'video' && (
          <VideoIntro key="video-step" onVideoEnd={() => setPhase('splash')} />
        )}

        {phase === 'splash' && (
          <SplashScreen
            key="splash-step"
            finishLoading={handleStartInvitation} // Disparamos la transición
          />
        )}
      </AnimatePresence>

      {phase === 'ready' && (
        <motion.main
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navigation />

          <section id="hero" className="min-h-[100dvh]">
            <Hero />
          </section>

          <section id="musica" className="min-h-[100dvh]">
            <MusicSection />
          </section>

          <section id="bienvenida">
            <WelcomeSection />
          </section>

          <section id="countdown">
            <CountdownSection />
          </section>

          <section id="place" className="min-h-[100dvh]">
            <PlaceSection />
          </section>
          <DressCodeSection />

          <section id="regalos" className="min-h-[100dvh]">
            <GiftsSection />
          </section>

          <section id="galeria" className="min-h-[100dvh]">
            <GallerySection />
          </section>
          <section id="rsp" className="min-h-[100dvh]">
            <RSVPSection />
          </section>

          <Footer />
        </motion.main>
      )}

    </div>
  );
}

export default App