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
        'port-gore': '#191842',
        'lucky-point': '#1e1357'
      },
      fontSize: {
        '15': '15px',
        '13': '13px',
        '17': '17px',
        '40': '40px',
        'xxs': '0.6rem',
        'tiny': '0.75rem'
      },
      boxShadow: {
        'white-border': 'rgba(255, 255, 255, 0.2) 0px 0px 0px 0.5px inset'
      },
      maxWidth: {
        'screen': '1234px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
