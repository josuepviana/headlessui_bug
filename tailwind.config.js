module.exports = {
  //purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
    ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      'display': ['Lobster'],
    },
    extend: {
    backgroundColor: theme => ({
      ...theme('colors'),
     'whiteMN': '#fafafb',
     'blueMN': '#0c657c',
     'redMN': '#e6302a',
     'waveBG': '#12547e',
    }),
    height: {
      '900': '900px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  }
}
