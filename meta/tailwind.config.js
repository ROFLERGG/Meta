/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '1rem',
      center: true,
      screens: {
        default: '1200px'
      },
    },
    extend: {
      fontFamily: {
        'mont': ["Montserrat", 'sans-serif']
      },
      animation: {
        'rightToLeft': 'rightToLeft 10s linear infinite',
      },
      keyframes: {
        'rightToLeft': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      }
    },
  },
  plugins: [],
}

