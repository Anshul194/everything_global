/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '350px',
        // => @media (min-width: 350px) { ... }

        'xs': '450px',
        // => @media (min-width: 450px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1360px',
        // => @media (min-width: 1360px) { ... }

        '3xl': '1440px',
        // => @media (min-width: 1440px) { ... }

        '4xl': '1680px',
        // => @media (min-width: 1680px) { ... }

        '5xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },
      colors: {
        primary: {
          DEFAULT: '#f0ead8',
        },
        secondary: {
          DEFAULT: '#F76310',
        },
        yellow: {
          DEFAULT: '#FFAD33',
        },
        blue: {
          DEFAULT: '#293896',
        },
        success: {
          DEFAULT: '#0E993DB2'
        },
        none: {
          DEFAULT: 'transparent',
        },
        danger: {
          DEFAULT: "#DD1F13",
        },
        unsafe: {
          DEFAULT: '#EC0909'
        },
        safe: {
          DEFAULT: '#04B3BE'
        },
        warning: {
          DEFAULT: '#FFA133'
        },
        protective: {
          DEFAULT: '#1E90FF'
        },
        borderColor: {
          DEFAULT: '#CACACA'
        },
      },
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        // You can add more configurations for other row numbers if needed
      },
      gridRowStart: {
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        flip: 'flip 1s cubic-bezier(0, 0, 0.2, 1) infinite'
      },
      keyframes: {
        flip: {
          'from': { transform: 'rotateX(0deg)', transformOrigin: '50% bottom ', },
          'to': { transform: 'rotateX(180deg)', transformOrigin: '50% bottom ', }
        }
      },
      boxShadow: {
        '3xl': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
