/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.900'),
            h1: {
              color: theme('colors.white'),
            },
            h2: {
              color: theme('colors.white'),
            },
            h3: {
              color: theme('colors.white'),
            },
            h4: {
              color: theme('colors.white'),
            },
            p: {
              color: theme('colors.white'),
            },
            span: {
              color: theme('colors.white'),
            },
            a: {
              textDecoration: 'none',
            },
            td: {
              border: 'none'
            },
            thead: {
              border: 'none'
            },
            tr: {
              border: 'none'
            },
          }
        }
        }),
    },
  },
    plugins: [
      require('@tailwindcss/typography'),
    ],
}