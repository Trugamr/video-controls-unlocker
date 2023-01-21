/** @type {import('prettier').Config} */
const config = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'auto',
  plugins: [require('prettier-plugin-tailwindcss')],
}

module.exports = config
