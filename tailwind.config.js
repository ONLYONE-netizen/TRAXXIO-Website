/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#080810',
        deep: '#0D0D1A',
        panel: '#11111F',
        border: '#1A1A30',
        bordersoft: '#15152A',
        blue: {
          DEFAULT: '#0A6EFF',
          mid: '#0A3A8A',
          soft: 'rgba(10,110,255,0.12)',
        },
        offwhite: '#E8ECF5',
        muted: '#5A6080',
        red: '#FF4040',
      },
      fontFamily: {
        sans: ['var(--font-grotesk)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(26,26,48,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,48,0.5) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-cell': '48px 48px',
      },
      maxWidth: {
        site: '1180px',
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      keyframes: {
        pulse2: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        pulse2: 'pulse2 2s infinite',
        fadeUp: 'fadeUp 0.6s ease both',
        fadeIn: 'fadeIn 0.3s ease',
        slideUp: 'slideUp 0.35s ease',
      },
    },
  },
  plugins: [],
};
