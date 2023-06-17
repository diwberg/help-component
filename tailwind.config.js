/** @type {import('tailwindcss').Config} */

const goldDarkA = {
  goldA1: '#000000',
  goldA2: '#facb6e',
  goldA3: '#fede9d',
  goldA4: '#fdde9f',
  goldA5: '#fedda5',
  goldA6: '#fedfa7',
  goldA7: '#ffdda6',
  goldA8: '#fed9a5',
  goldA9: '#ffdca7',
  goldA10: '#ffdcac',
  goldA11: '#ffe0b4',
  goldA12: '#fffcee',
}

const violetDarkA = {
  violetA1: '#000000',
  violetA2: '#743afd',
  violetA3: '#7452fe',
  violetA4: '#7650ff',
  violetA5: '#7654ff',
  violetA6: '#7253ff',
  violetA7: '#7053ff',
  violetA8: '#6f52ff',
  violetA9: '#8668ff',
  violetA10: '#8e75ff',
  violetA11: '#a18eff',
  violetA12: '#f5f2ff',
}

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        goldDarkA,
        violetDarkA
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
