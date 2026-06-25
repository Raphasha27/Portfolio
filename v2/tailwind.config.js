/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        'bg-deep': '#000000',
        green: {
          400: '#00ffcc',
          500: '#00ccaa',
        },
        text: {
          DEFAULT: '#f3f4f6',
          dim: '#9ca3af',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      backdropBlur: {
        glass: '12px',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  plugins: [],
}
