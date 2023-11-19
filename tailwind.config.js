/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './nuxt.config.ts',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      // fontSize: {
      //   'Heading1': '3rem',   // Customize the font size for Heading1
      //   'Heading2': '2.5rem', // Customize the font size for Heading2
      //   'md': '4rem',         // Define font size for medium screens (md)
      //   'lg': '5rem',         // Define font size for large screens (lg)
      // },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
  darkMode: 'class',
  // darkMode: ['class', '[data-theme="dark"]'],
}

