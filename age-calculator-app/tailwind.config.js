/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      purple: 'hsl(var(--purple))',
      red: 'hsl(var(--red))',
      white: 'hsl(var(--white))',
      offWhite: 'hsl(var(--off-white))',
      lightGrey: 'hsl(var(--light-grey))',
      smokeGrey: 'hsl(var(--smoke-grey))',
      offBlack: 'hsl(var(--off-black))'
    },
    borderColor: {
      'custom-active': 'hsl(var(--purple))'
    }
  },
  plugins: []
}
