/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f6ff',
          100: '#e0edff',
          200: '#c0daff',
          300: '#93beff',
          400: '#609aff',
          500: '#3b76ff',
          600: '#1A56DB', // Primary
          700: '#0f3e9a',
          800: '#0d357d',
          900: '#102a5c',
        },
        secondary: {
          50: '#ecfeff',
          100: '#cafffc',
          200: '#98fffa',
          300: '#61fbf5',
          400: '#30ece9',
          500: '#0dcdcd',
          600: '#0D9488', // Secondary
          700: '#0d7373',
          800: '#115c5c',
          900: '#114c4a',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdaa8',
          300: '#ffc070',
          400: '#fd9635',
          500: '#EA580C', // Accent
          600: '#dc3f08',
          700: '#bd2c0a',
          800: '#93240f',
          900: '#7a2010',
        },
        success: {
          500: '#00C48C',
        },
        warning: {
          500: '#FFB800',
        },
        error: {
          500: '#FF4747',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'soft-xl': '0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};