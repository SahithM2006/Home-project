/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Allow dark mode toggling via class
  theme: {
    extend: {
      colors: {
        background: {
          light: '#F8F9FA',
          dark: '#0f0f11'
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1a1a1c'
        },
        primary: {
          light: '#111827',
          dark: '#E5E7EB'
        },
        accent: {
          light: '#8B5CF6',
          dark: '#A78BFA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
