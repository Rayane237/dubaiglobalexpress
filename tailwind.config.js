/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 22px 80px rgba(14, 165, 233, 0.20)',
        premium: '0 20px 70px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top left, rgba(14,165,233,.22), transparent 30%), radial-gradient(circle at bottom right, rgba(245,158,11,.18), transparent 26%)',
      },
    },
  },
  plugins: [],
};
