import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Timer, MapPin, Gift, Image as ImageIcon } from "lucide-react";

export const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", icon: <Home size={20} />, label: "Inicio" },
    { id: "countdown", icon: <Timer size={20} />, label: "Cuándo" },
    { id: "place", icon: <MapPin size={20} />, label: "Dónde" },
    { id: "regalos", icon: <Gift size={20} />, label: "Regalos" },
    { id: "galeria", icon: <ImageIcon size={20} />, label: "Galería" },
  ];

  useEffect(() => {
    // 1. Lógica de visibilidad (Aparece después del Hero)
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const { bottom } = hero.getBoundingClientRect();
        // El nav aparece cuando el Hero ya se desplazó hacia arriba
        setShowNav(bottom < 400);
      }
    };

    // 2. Detección de Sección Activa (Intersection Observer)
    const options = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Detecta el centro del viewport
      threshold: 0,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {showNav && (
        <nav className="fixed left-0 right-0 z-[100] flex justify-center px-4 bottom-8 pointer-events-none">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="pointer-events-auto flex items-center gap-4 bg-white/90 backdrop-blur-md border border-[#FB9BB4]/20 px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(251,155,180,0.2)]"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex flex-col items-center gap-1 min-w-[50px] transition-all no-underline"
                  style={{ color: isActive ? "#FB9BB4" : "#374151" }} // Pink vs Base-Dark
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      y: isActive ? -2 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {item.icon}
                  </motion.div>

                  <span className={`text-[9px] font-bold uppercase tracking-tighter ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                    {item.label}
                  </span>

                  {/* Indicador inferior animado */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="w-1 h-1 bg-[#FB9BB4] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </motion.div>
        </nav>
      )}
    </AnimatePresence>
  );
};