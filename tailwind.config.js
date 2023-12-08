/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'accommodation': "url('/accommodation.svg')",
        'annie-spratt': "url('/annie-spratt.svg')",
        'bar-lullaby-paris': "url('/bar-lullaby-paris.svg')",
        'kasa' : "url('kasa.svg')"
      },
fontFamily: {
        'noto-sans-tamil': ['Noto Sans Tamil', 'sans-serif'],
        'recursive': ['Recursive', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
