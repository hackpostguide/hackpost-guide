/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './nuxt.config.ts',
    './content/**/*.md',
    './vueform.config.ts', 
    './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
    './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
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
    require('@vueform/vueform/tailwind'),

  ],
}

