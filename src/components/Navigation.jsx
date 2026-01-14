import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Timer, MapPin, Gift, Image as ImageIcon, CheckCircle } from "lucide-react";

export const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Lista de items actualizada con los nuevos IDs y el botón de RSVP
  const navItems = [
    { id: "hero", icon: <Home size={20} />, label: "Inicio" },
    { id: "countdown", icon: <Timer size={20} />, label: "Cuándo" },
    { id: "place", icon: <MapPin size={20} />, label: "Dónde" },
    { id: "regalos", icon: <Gift size={20} />, label: "Regalos" },
    { id: "galeria", icon: <ImageIcon size={20} />, label: "Galería" },
    { id: "rsp", icon: <CheckCircle size={20} />, label: "Confirmar" }, // Nuevo Item
  ];

  useEffect(() => {
    // 1. Lógica de visibilidad (Aparece después del Hero)
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (hero) {
        const { bottom } = hero.getBoundingClientRect();
        setShowNav(bottom < 400);
      }
    };

    // 2. Detección de Sección Activa mejorada
    const options = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
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

    // Observamos todos los IDs definidos en navItems
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
        <nav className="fixed left-0 right-0 z-[100] flex justify-center px-2 bottom-6 pointer-events-none">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="pointer-events-auto flex items-center gap-2 sm:gap-4 bg-white/80 backdrop-blur-lg border border-[#FB9BB4]/20 px-5 py-3 rounded-full shadow-[0_10px_40px_rgba(251,155,180,0.15)]"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex flex-col items-center gap-1 min-w-[48px] transition-all no-underline"
                  style={{ color: isActive ? "#FB9BB4" : "#4B5563" }}
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.2 : 1,
                      y: isActive ? -3 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className={isActive ? "text-[#FB9BB4]" : "text-gray-500"}
                  >
                    {item.icon}
                  </motion.div>

                  <span className={`text-[8px] font-black uppercase tracking-tighter leading-none ${isActive ? 'opacity-100' : 'opacity-50'}`}>
                    {item.label}
                  </span>

                  {/* Indicador inferior tipo "dot" */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="w-1 h-1 bg-[#FB9BB4] rounded-full mt-0.5"
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