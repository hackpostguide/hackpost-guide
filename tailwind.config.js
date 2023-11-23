/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './nuxt.config.ts',
    './content/**/*.md'
  ],
  
  darkMode: 'class',
  // darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
       },
    },
  },
   
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}

