const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ["./src/**/*.svelte"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    aspectRatio: {
      9: '9',
      16: '16',
    },
    extend: {
      backgroundImage: theme => ({
       'chevron-up': "url('/img/nav/chevron-up.svg')",
       'chevron-down': "url('/img/nav/chevron-down.svg')",
       'dot': "url('/img/nav/dot.svg')",
      }),
      borderRadius: {
        '2.5xl': '1.25rem',
      },
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
        'xxs': '0.625rem',
        '2.25xl': '1.625rem',
        '2.5xl': '1.75rem',
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '7.5': '1.875rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '25': '6.25rem',
        '30': '7.5rem',
      },
      screens: {
        //   sm: '640px',
        //   md: '768px',
        //   lg: '1024px',
        //   xl: '1280px',
        //   '2xl': '1536px',
        '3xl': '2000px',
      },
      strokeWidth: {
       '3': '3',
       '6': '6',
      },
      translate: {
        '1/20': '5%',
        '19/20': '95%',
      },
      width: {
        '13-vmin': '13vmin',
        '16-vmin': '16vmin',
        '19-vmin': '19vmin',
        '21-vmin': '21vmin',
        'screen-min': '100vmin',
      }
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
