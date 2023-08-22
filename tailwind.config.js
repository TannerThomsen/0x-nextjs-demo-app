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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderColor: {
        'custom-er': 'rgba(255, 255, 255, 0.025)',
        'custom-tr': 'rgba(255, 255, 255, 0.0)',

        'custom-e': '#24232b',
        'bkgg': '#0e0e0e',
        'bfgg': '#24232b',
        'blgg': '#5100ff',
      },
      backgroundColor: {
        'blgg': '#5100ff',
      }
    },
  },
  plugins: [],
}
