import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '769px',
        '2xl': '1440px'
      },
      backgroundImage: {
        'partners-gradient':
            'linear-gradient(90deg, #00B3FF 10.54%, #0075D5 89.31%)',
        'custom-gradient':
            'linear-gradient(to right, rgba(207, 224, 255, 0.40) 40%, rgba(207, 224, 255, 0.76), rgba(255, 255, 255, 1) 100%)',
        'custom-gradient-eco':
            'linear-gradient(40deg, #CFE0FF66 40%, transparent 40%)',
        'awards-section':
            'linear-gradient(139.15deg, #0071CD 4.07%, #001D48 92.15%)',
        'ecosystem-bg':
            'linear-gradient(96.38deg, #0062D2 20.56%, #00489B 97.28%)',
        'custom-gradient-solution':
            'linear-gradient(to bottom, #002C8B00 0%, #001E4B 100%)',
        'header-mobile': 'linear-gradient(109.8deg, #0077D0 0%, #002155 100%)'
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        subtle: 'var(--text-subtle)',
        primary: 'var(--primary)'
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '2rem',
        '8': '2.5rem',
        '9': '2.75rem',
        '10': '3rem',
        '11': '4rem',
        '12': '5rem',
        '13': '6rem'
      },
      borderRadius: {
        sharp: '0',
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        fill: '200px'
      },
      boxShadow: {
        'black-20': '0px 4px 20px 0px rgba(0, 0, 0, 0.15)',
        'black-10': '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
        'black-20-revert': '0px -4px 20px 0px rgba(0, 0, 0, 0.15)',
        'black-10-revert': '0px -4px 10px 0px rgba(0, 0, 0, 0.1)',
        'why-choose-us': '15px 15px 40px 0px rgba(207, 224, 255, 0.45)'
      }
    }
  },
  plugins: []
}
export default config
