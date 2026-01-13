import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  // Días de la semana para el calendario
  const weekDays = ["DOM", "LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];

  return (
    <section id="countdown" className="flex flex-col items-center min-h-screen px-6 py-20 bg-sofia-base-white font-barlow">
      <div className="w-full max-w-md space-y-16 ">

        {/* Calendario Estilo Imagen */}
        <div className="p-4 space-y-6 text-center bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-medium text-gray-800">Marzo 2026</h3>
          <div className="grid grid-cols-7 gap-y-4 text-[11px] text-gray-400 font-semibold ">
            {weekDays.map(day => <div key={day}>{day}</div>)}

            {/* Espacios vacíos para que Marzo empiece en Domingo (1) */}
            {[...Array(30)].map((_, i) => {
              const day = i + 1;
              const isEventDay = day === 6;
              return (
                <div key={i} className="relative flex items-center justify-center h-8">
                  {isEventDay && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      {/* Corazón estilo garabato (SVG) */}
                      <svg viewBox="0 0 100 100" className="w-12 h-12 text-sofia-pink-dark opacity-60">
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          d="M50,30 C35,10 5,25 5,50 C5,75 50,95 50,95 C50,95 95,75 95,50 C95,25 65,10 50,30"
                          strokeLinecap="round"
                          className="animate-[draw_2s_ease-in-out]"
                        />
                      </svg>
                    </div>
                  )}
                  <span className={`z-10 text-sm ${isEventDay ? 'text-sofia-pink font-bold' : 'text-gray-700'}`}>
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Texto "FALTAN" Estilo Negrita */}
        <div className="text-center">
          <h2 className="text-5xl font-black tracking-tighter text-gray-900 uppercase">
            Faltan !!
          </h2>
        </div>

        {/* Contador Limpio con guiones */}
        <div className="flex flex-col items-center space-y-2 ">
          <div className="flex items-baseline gap-4 text-sofia-pink">
            <TimeUnit value={timeLeft.days} />
            <span className="text-3xl text-gray-900">-</span>
            <TimeUnit value={timeLeft.hours} />
            <span className="text-3xl text-gray-400">:</span>
            <TimeUnit value={timeLeft.minutes} />
            <span className="text-3xl text-gray-400">:</span>
            <TimeUnit value={timeLeft.seconds} />
          </div>
          <div className="flex gap-8 text-[10px] text-gray-400 uppercase tracking-widest pl-2">
            <span>Días</span>
            <span>Horas</span>
            <span>Minutos</span>
            <span>Segundos</span>
          </div>
        </div>

        {/* Card de Evento Estilo Simple */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] p-8 text-center space-y-4">
          
          <div className="inline-block px-6 py-2 rounded-full bg-sofia-pink-light/30">
            <p className="text-sm font-medium text-sofia-pink">XV años de Sofia</p>
          </div>
          <p className="text-sm font-medium text-gray-500">
            6 de Marzo, 2026 • 6:00 PM
          </p>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes draw {
          from { stroke-dasharray: 0 1000; }
          to { stroke-dasharray: 1000 1000; }
        }
      `}} />
    </section>
  );
};

const TimeUnit = ({ value }) => (
  <span className="text-5xl font-light tabular-nums">
    {String(value).padStart(2, '0')}
  </span>
);