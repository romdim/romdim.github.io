const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    aspectRatio: {
      9: '9',
      16: '16',
    },
    borderRadius: {
      '2.5xl': '1.25rem',
    },
    // Default
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1280px',
    //   '2xl': '1536px',
    // },
    // screens: {
    //   // By default it's mobile (ie: 360px) till tablet
    //   // TODO: Redefine the breakpoints to target correctly the screens.
    //   'sm': '768px',
    //   'md': '1440px',
    //   'lg': '1920px',
    //   'xl': '2560px',
    // },
    extend: {
      backgroundImage: theme => ({
       'chevron-up': "url('/img/nav/chevron-up.svg')",
       'chevron-down': "url('/img/nav/chevron-down.svg')",
       'dot': "url('/img/nav/dot.svg')",
      }),
      colors: {
        'artwishlist': '#F5F5F5',
        'myTomorrows': '#2AA56A',
        'mobiquity': '#00AFEF',
        'peoplePerHour': '#F1F3F8',
        'epu': '#FFFFFF',
        'epu-secondary': '#243370',
      },
      fontFamily: {
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
        cursive: ['Comfortaa', 'cursive'],
      },
      fontSize: {
        '2.5xl': '1.75rem',
      },
      spacing: {
        '7.5': '1.875rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '25': '6.25rem',
        '30': '7.5rem',
      },
      screens: {
        '3xl': '2000px',
      },
      translate: {
        '1/20': '5%',
        '19/20': '95%',
      },
    },
  },
  variants: {
    extend: {
      fill: ['active'],
      stroke: ['hover', 'focus'],
      backgroundColor: ['checked'],
      textColor: ['checked'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
