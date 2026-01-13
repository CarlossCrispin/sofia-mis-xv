import { motion } from 'framer-motion';
import { Heart, Crown } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';

export const SplashScreen = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);
  const DURATION = 5500;

  const confettiData = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 5,
      size: Math.random() * 15 + 10,
      rotate: Math.random() * 360
    }));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, DURATION / 100);

    const timeout = setTimeout(() => {
      finishLoading();
    }, DURATION);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-50 overflow-hidden"
    >
      {/* CAPA DE CONFETTI */}
      <div className="absolute inset-0 pointer-events-none">
        {confettiData.map((heart) => (
          <motion.div
            key={`confetti-${heart.id}`}
            initial={{ y: "-10vh", x: `${heart.x}vw`, rotate: heart.rotate, opacity: 0 }}
            animate={{
              y: "110vh",
              rotate: heart.rotate + 360,
              opacity: [0, 0.2, 0.2, 0]
            }}
            transition={{ duration: heart.duration, repeat: Infinity, delay: heart.delay, ease: "linear" }}
            className="absolute text-sofia-pink"
          >
            <Heart size={heart.size} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-between w-full h-full max-w-lg py-20 mx-auto">

        {/* CORAZÓN DE FONDO - ALTO CONTRASTE (Opacity 15% + Drop Shadow) */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none text-sofia-pink/15 -z-10"
          initial={{ scale: 0.8 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={450} fill="currentColor" className="md:w-[600px] drop-shadow-xl" />
        </motion.div>

        {/* GRUPO SUPERIOR: Corona + Nombre + Texto */}
        <div className="flex flex-col items-center justify-center flex-grow px-6">

          {/* ICONO DE CORONA */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-6 text-sofia-gold"
          >
            <Crown size={48} strokeWidth={1.2} className="drop-shadow-sm" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.5 }}
            style={{ fontFamily: "'Parisienne', cursive" }}
            className="text-8xl md:text-[12rem] text-sofia-pink leading-none mb-6 drop-shadow-md"
          >
            Sofía
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-sofia-gold tracking-[0.7em] uppercase text-[10px] md:text-xs font-bold ml-[0.7em]"
          >
            Mis Quince Años
          </motion.p>
        </div>

        {/* LOADER AL FONDO (BOTTOM) */}
        <div className="w-full max-w-[220px] md:max-w-[300px] px-6">
          <div className="h-[1px] w-full bg-sofia-pink/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-sofia-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-6 text-[9px] font-mono text-sofia-gold tracking-[0.4em] uppercase opacity-70 text-center">
            Revelando la invitación... {Math.round(progress)}%
          </p>
        </div>

      </div>
    </motion.div>
  );
};