module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'background': '#151922',
      'crayola': '#1c363a',
      'viridian': '#038373',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'background': '#151922',
    }),
    cursor: {
      'none': 'none',
    },
    extend: {
      backgroundImage: {
        'wave-pattern': "url('/svg/stacked-waves-haikei.svg')",
        'blob-pattern': "url('/svg/blob-scatter-haikei.svg')",
        'peak-pattern': "url('/svg/stacked-peaks-haikei.svg')",
        'blob': "url('/svg/blob-haikei.svg')",
      }
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
