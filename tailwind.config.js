module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          100: '#FFDF91',
          200: '#EAAC7F',
          300: '#91684A',
          400: '#493323',
        },
      },
    },
  },
  plugins: [],
};
