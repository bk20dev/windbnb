module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        blur: '0 1px 6px rgba(0, 0, 0, 0.1)',
      },
      gridTemplateColumns: {
        'card-info': '1fr 4rem',
        'card-list': 'repeat(auto-fit, minmax(24.75rem, 1fr))',
      },
      gridTemplateRows: {
        'card-info': '1.75rem auto',
      },
      lineHeight: {
        14: '3.5rem',
      },
      screens: {
        landscape: '55.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
