module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        kr: ['Noto Sans KR', 'sans-serif'],
      },
      colors: {
        coffee: {
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
