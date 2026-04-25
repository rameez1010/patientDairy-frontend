/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2BB673',
          dark: '#1f8a55',
        },
        secondary: {
          DEFAULT: '#538163',
        },
        background: {
          light: '#F4F9F6',
          dark: '#0A0E0C',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#141C18',
        },
        text: {
          light: '#0A1C14',
          dark: '#E0F2E9',
        },
        muted: {
          light: '#538163',
          dark: '#A3B8AD',
        }
      },
      fontFamily: {
        manrope: ['Manrope', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
