import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cotainer from '/GroupHeart.svg';

export const CountdownSection = () => {
  const targetDate = new Date("2026-03-06T18:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const weekDays = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];

  return (
    <section id="countdown" className="flex flex-col items-center min-h-screen px-6 py-20 font-sans bg-white">
      <div className="w-full max-w-md space-y-16">

        {/* 1. Calendario con tu Vector */}
        <div className="p-6 space-y-6 text-center bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
          <h3 className="text-xl font-bold tracking-tight text-gray-800">Marzo 2026</h3>

          <div className="grid grid-cols-7 gap-y-2 text-[10px] text-gray-400 font-bold mb-4">
            {weekDays.map(day => <div key={day} className="py-2">{day}</div>)}

            {[...Array(31)].map((_, i) => {
              const day = i + 1;
              const isEventDay = day === 6;

              return (
                <div key={i} className="relative flex items-center justify-center w-full h-10">
                  {isEventDay && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 z-0 flex items-center justify-center"
                    >
                      <motion.img
                        src={Cotainer}
                        alt=""
                        animate={{ scale: [1, 1.1, 1], rotate: [-4, -2, -4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute z-0 object-contain pointer-events-none w-14 h-14"
                      />
                    </motion.div>
                  )}
                  {/* Número del día del evento en ROSA */}
                  <span className={`relative z-10 text-base ${isEventDay ? 'text-[#FB9BB4] font-black' : 'text-gray-600 font-medium'}`}>
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Título */}
        <div className="text-center">
          <h2 className="text-5xl italic font-black tracking-tighter text-gray-900 uppercase">
            ¡Faltan!
          </h2>
        </div>

        {/* 3. Contador con Números ROSAS y Gruesos */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <TimeUnit value={timeLeft.days} label="Días" />
            <span className="pb-8 text-4xl font-bold text-[#FB9BB4]">-</span>
            <TimeUnit value={timeLeft.hours} label="Hrs" />
            <span className="pb-8 text-3xl font-bold text-[#FB9BB4]/30">:</span>
            <TimeUnit value={timeLeft.minutes} label="Min" />
            <span className="pb-8 text-3xl font-bold text-[#FB9BB4]/30">:</span>
            <TimeUnit value={timeLeft.seconds} label="Seg" />
          </div>
        </div>

        {/* 4. Detalle Final */}
        <div className="bg-white border border-gray-100 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-8 text-center">
          <div className="inline-block px-6 py-1.5 rounded-full bg-[#FB9BB4]/10 mb-4">
            <p className="text-xs font-black text-[#FB9BB4] uppercase tracking-widest">XV años de Sofia</p>
          </div>
          <p className="text-xl font-bold text-gray-800">Viernes 06 de Marzo</p>
          <p className="text-sm font-medium text-gray-500">7:00 PM • 2026</p>
        </div>

      </div>
    </section>
  );
};

// Sub-componente actualizado con color ROSA para los números
const TimeUnit = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-5xl font-black leading-none tracking-tighter tabular-nums text-[#FB9BB4]">
      {String(value).padStart(2, '0')}
    </span>
    <span className="mt-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
      {label}
    </span>
  </div>
);