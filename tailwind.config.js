module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'port-gore': '#19183f'
    }),
    fontSize: {
      '15': '15px'
    },
    extend: {
      gridTemplateColumns: {
        '7-auto': 'repeat(7, auto)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
