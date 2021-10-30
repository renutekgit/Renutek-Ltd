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
      "sans": "Rajdhani, Tahoma, Geneva, Verdana, sans-serif"
    },
    extend: {
      screens: {
        'xs':'376px'  
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
