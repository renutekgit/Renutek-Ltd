module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.njk',
    './src/**/*.md',
    './src/**/*.html' 
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "sans": "Kanit, Tahoma, Geneva, Verdana, sans-serif"
    },
    extend: {
      screens: {
        'xs':'376px'  
      },
      colors: {
        rose: { 
          DEFAULT: '#FA3B4C', 
          light: '#FA616A'
        },
        midnight: '#012639',
        dusk: '#2F647F',
        smoke: '#ECF8FE',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
