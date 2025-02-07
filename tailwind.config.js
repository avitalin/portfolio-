module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fffbeb',
          // ... other shades
          600: '#d97706',
          700: '#b45309',
        },
      },
    },
  },
  plugins: [],
} 