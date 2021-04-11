module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        '7-auto': 'repeat(7, auto)'
      },
      colors: {
        'port-gore': '#19183f'
      },
      fontSize: {
        'xxs': '0.6rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
