/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        pizzarechner: {
          'primary': '#FF7A18',
          'primary-focus': '#e65d00',
          'primary-content': '#ffffff',

          'secondary': '#06b6d4',
          'secondary-focus': '#0891b2',
          'secondary-content': '#ffffff',

          'accent': '#7c3aed',
          'accent-focus': '#6d28d9',
          'accent-content': '#ffffff',

          'neutral': '#111827',
          'base-100': '#ffffff',
          'base-200': '#f8fafc',
          'base-300': '#eef2f7',

          'info': '#3abff8',
          'success': '#36d399',
          'warning': '#fbbf24',
          'error': '#f87272'
        }
      },
      'corporate'
    ],
    darkTheme: 'pizzarechner',
  },
};

