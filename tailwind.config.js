/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#ffd700',
        gorse: '#ffed4e',
        'hot-toddy': '#b8860b',
        gallery: '#ededed',
      },
      animation: {
        'slideInUp': 'slideInUp 0.5s ease-out',
        'spin': 'spin 1s linear infinite',
        'pulse': 'pulse 0.3s ease-in-out',
      },
      keyframes: {
        slideInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
} 