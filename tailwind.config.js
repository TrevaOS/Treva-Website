/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#29C8D5',
          dark: '#1AA8B4',
          light: '#5DD8E2',
          glow: 'rgba(41,200,213,0.15)',
          'glow-md': 'rgba(41,200,213,0.25)',
        },
        bg: {
          black: '#000000',
          dark1: '#080C10',
          dark2: '#0D1117',
          card: '#0F1520',
        },
        text: {
          white: '#FFFFFF',
          grey: '#8A9AB0',
          muted: '#4A5568',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-teal': 'pulse-teal 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-teal': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(41,200,213,0.2)' },
          '50%': { boxShadow: '0 0 60px rgba(41,200,213,0.5)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
