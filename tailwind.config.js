/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b6b',
          dark: '#e05050',
          light: '#ff8585',
        },
        secondary: {
          DEFAULT: '#4f46e5',
          dark: '#3730a3',
          light: '#6366f1',
        },
        dark: {
          DEFAULT: '#0f0f0f',
          lighter: '#1a1a1a',
          light: '#2a2a2a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom right, rgba(79, 70, 229, 0.2), rgba(255, 107, 107, 0.2))',
      },
    },
  },
  plugins: [],
};
