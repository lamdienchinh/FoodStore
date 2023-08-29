/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-background': "rgba(13, 13, 13, 0.95)",
        'primary-orange': '#FF9F0D',
      },
      fontSize: {
        'sm': ['24px', {
          lineHeight: '32px',
          letterSpacing: '-0.01em',
          fontWeight: '700',
        }]
      }
    }
  },
  plugins: [],
}
