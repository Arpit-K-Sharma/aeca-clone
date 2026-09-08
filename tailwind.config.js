/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4332',
        dark: '#3F3836',
        'tint-light': '#F7EAE8',
        'text-muted': '#817A78',
        'tint-lighter': '#FBF0EE',
        'tint-lightest': '#FFF5F4',
        'accent-gold': '#EFBB1C',
        'accent-green': '#008852',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        opensans: ['var(--font-opensans)'],
        roboto: ['var(--font-roboto)'],
        robotoslab: ['var(--font-robotoslab)'],
      },
      fontSize: {
        xs: '12px',
        sm: '13px',
        base: '14px',
        body: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '38px',
        '5xl': '42px',
        '6xl': '64px',
        '7xl': '90px',
      },
      screens: {
        xs: '480px',
        sm: '580px',
        md: '767.98px',
        lg: '991.98px',
        xl: '1199.98px',
        '2xl': '1600px',
      },
      borderRadius: {
        card: '8px',
      },
      boxShadow: {
        // Restrained 2-step elevation scale using the brand's own dark tone
        // (#3F3836) instead of pure black — see globals.css elevation notes.
        'level-1': '0 1px 3px rgba(63,56,54,0.08), 0 1px 2px rgba(63,56,54,0.06)',
        'level-2': '0 4px 12px rgba(63,56,54,0.12)',
      },
      transitionDuration: {
        card: '180ms',
      },
    },
  },
  plugins: [],
}
