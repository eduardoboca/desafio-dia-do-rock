/** @type {import('tailwindcss').Config} */
export default {
  content:
    ["./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Nunito Sans'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-thin': {
          '&::-webkit-scrollbar': {
            width: '2px',
            height: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#4B5563',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'rgba(134, 37, 210, 0.4);',
          },
        },
      });
    },
  ],
}