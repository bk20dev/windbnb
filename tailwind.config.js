module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        blur: '0 1px 6px rgba(0, 0, 0, 0.1)',
      },
      lineHeight: {
        14: '3.5rem',
      },
      gridTemplateColumns: {
        'card-info': '1fr 64px',
      },
      gridTemplateRows: {
        'card-info': '1.75rem auto',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
