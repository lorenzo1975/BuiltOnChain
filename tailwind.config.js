const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        synthBox:
          '0 0 20px #fff, 0 0 10px #fff, 0 0 50px #ff0fad, 0 0 50px #ff0fad, 0 0 40px #ff0fad, 0 0 100px #ff0fad, 0 0 75px #ff0fad',
        glitchBox: '-4px -4px 0 cyan, 4px 4px 0 magenta',
        neonBox: '0 0 25px 2.5px #ffffff'
      },
      textShadow: {
        synthText:
          '0 0 20px #fff, 0 0 10px #fff, 0 0 50px #ff0fad, 0 0 50px #ff0fad, 0 0 40px #ff0fad, 0 0 100px #ff0fad, 0 0 75px #ff0fad',
        glitchText: '-2px -2px 0 cyan, 2px 2px 0 magenta',
        neonText: '0 0 25px 2.5px #ffffff'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        coolGray: colors.coolGray,
        blueGray: colors.blueGray,
        red: colors.red,
        orange: colors.orange,
        amber: colors.amber,
        yellow: colors.yellow,
        lime: colors.lime,
        green: colors.emerald,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        blue: colors.blue,
        indigo: colors.indigo,
        violet: colors.violet,
        purple: colors.purple,
        pink: colors.pink,
        fuchsia: colors.fuchsia,
        rose: colors.rose
      },
      fontFamily: {
        monoton: [
          '"Monoton"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Monoton"'
        ],
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Mr Dafoe"'
        ],
        dafoe: [
          '"Mr Dafoe"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ]
      },
      fontSize: {
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '9rem',
        '12xl': '10rem',
        '13xl': '11rem',
        '14xl': '12rem',
        '15xl': '13rem',
        '16xl': '14rem',
        '17xl': '15rem',
        '18xl': '16rem',
        '19xl': '17rem',
        '20xl': '18rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/typography')
  ]
};
