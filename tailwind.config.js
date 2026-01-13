/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sofia: {
          // --- COLORES PRIMARIOS (Rosados de la imagen 1) ---
          pink: {
            light: '#FBE8EB', // Fondo muy suave o hover
            DEFAULT: '#E9BDCB', // Rosa principal
            medium: '#E7B7C8', // Acento de rosa
            dark: '#9D6B7A', // Rosa viejo para textos o bordes
          },
          // --- ACENTOS ELEGANTES (Tonos dorados de la imagen 2) ---
          gold: {
            light: '#D9A760', // Dorado suave
            DEFAULT: '#D4AF37', // Dorado metálico clásico
            dark: '#CCAA99', // Bronce/Dorado rosado
          },
          // --- NEUTROS Y FONDO (Escala de grises y cremas) ---
          base: {
            white: '#FFF8F5', // Fondo principal (crema rosado)
            paper: '#FAECEC', // Fondo de tarjetas o secciones
            silver: '#A3A3A3', // Detalles sutiles
            dark: '#333333', // Texto principal (Casi negro para legibilidad)
          },
        },
      },
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
    },
    fontWeight: {
      thin: '100',
      light: '300',
      normal: '400',
      semibold: '600',
      bold: '800',
    },
  },
  plugins: [],
};