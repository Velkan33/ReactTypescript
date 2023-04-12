/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./src/**/*.{html,js,tsx,ts}', './index.html'],
 theme: {
  extend: {
   keyframes: {
    slideIn: {
     '0%': { transform: 'translateY(-100%)', opacity: 0 },
     '100%': { transform: 'translateY(0%)', opacity: 1 },
    },
    slideOut: {
     '0%': { transform: 'translateY(0%)', opacity: 1 },
     '100%': { transform: 'translateY(-100%)', opacity: 0 },
    },
   },
   animation: {
    slideIn: 'slideIn 0.3s ease-in',
    slideOut: 'slideOut 0.1s ease-in',
   },
  },
 },
 plugins: [],
};
