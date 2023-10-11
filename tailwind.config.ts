import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        purple: '#996dff',
        pink: '#c7afff',
        black: '#09090a',
        white: '#ffffff',
        gray: '#c4c4cc',
      },
    },
  },
  plugins: [],
}

export default config
