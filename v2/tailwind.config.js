/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050d12',
        'bg-deep': '#020609',
        green: {
          400: '#00c988',
          500: '#00a676',
        },
        text: {
          DEFAULT: '#e0f2f1',
          dim: '#94a3b8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      backdropBlur: {
        glass: '12px',
      },
    },
  },
  plugins: [],
}
