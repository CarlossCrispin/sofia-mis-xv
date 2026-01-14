import React from 'react';
import { Church, Wine } from 'lucide-react';
import { PlaceCard } from './PlaceCard';

export const PlaceSection = () => {
  return (
    <section
      id="place"
      className="flex flex-col items-center py-20 space-y-24 overflow-hidden bg-white"
    >
      {/* 1. CARD DE LA IGLESIA */}
      <PlaceCard
        title="Ceremonia"
        type="Parroquia de Nuestra Señora de los Dolores"
        vectorType="heart"
        address="Luis de la Rosa esquina León Guzman, s/n, Constitución de la República, GAM, CDMX"
        time="7:00 PM"
        icon={Church}
        // LINK REAL DE GOOGLE MAPS PARA LA PARROQUIA
        mapUrl="https://www.google.com/maps/search/?api=1&query=Parroquia+de+Nuestra+Señora+de+los+Dolores+Gustavo+A+Madero"
      />

      {/* 2. CARD DEL SALÓN */}
      <PlaceCard
        title="Recepción"
        type="Mónaco Jardín"
        vectorType="circle"
        address="Avenida San Juan de Aragón 120, Villa Gustavo A. Madero, GAM, CDMX"
        time="8:30 - 9:00 PM"
        icon={Wine}
        // LINK REAL DE GOOGLE MAPS PARA MÓNACO JARDÍN
        mapUrl="https://www.google.com/maps/search/?api=1&query=Monaco+Jardin+Av+San+Juan+de+Aragon+120"
      />
    </section>
  );
};