module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'background': '#171720',
    }),
    textColor: theme => ({
      ...theme('colors'),
      'background': '#171720',
    })

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
