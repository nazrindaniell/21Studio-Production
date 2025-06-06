/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-100': '#0E110C', // Black
        'black-200': '#6C6C6C', // Light black
        'white-100': '#FFFFFF',
        'white-200': '#EAF0F5', // Light gray
        'white-300': '#CCCCCC', // Gray
        'white-400': '#D9D9D9', // Dark gray
        lime: '#CFFA14', // Lime
        purple: '#4131D3', // Purple
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '1.2' }],
        h2: ['2.25rem', { lineHeight: '1.2' }],
        h3: ['1.875rem', { lineHeight: '1.2' }],
        h4: ['1.5rem', { lineHeight: '1.2' }],
        lg: ['1.25rem', { lineHeight: '1.5' }],
        base: ['1.125rem', { lineHeight: '1.5' }],
      },
      container: {
        center: true,
        margin: {
          DEFAULT: '0',
          sm: '0',
          md: '0',
          lg: '0',
          xl: '0',
        },
        padding: {
          DEFAULT: '2rem',
          lg: '1rem',
        },
      },
      aspectRatio: {
        '3/2': 3 / 2,
        '5/2': 5 / 2,
      },
    },
  },
  plugins: [],
};
