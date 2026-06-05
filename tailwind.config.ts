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
        surface: {
          DEFAULT: '#0d1a2e',
          2: '#112240',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-blue': `linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)`,
        'grid-cyan': `linear-gradient(rgba(6,182,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.06) 1px, transparent 1px)`,
        'dot-blue': 'radial-gradient(circle, rgba(59,130,246,0.12) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-60': '60px 60px',
        'grid-40': '40px 40px',
        'dot-24': '24px 24px',
      },
      animation: {
        'flow-line': 'flowLine 3s linear infinite',
        'node-pulse': 'nodePulse 3s ease-in-out infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'float-up': 'floatUp 4s ease-in-out infinite',
        'float-down': 'floatDown 4s ease-in-out infinite',
      },
      keyframes: {
        flowLine: {
          from: { strokeDashoffset: '64' },
          to: { strokeDashoffset: '0' },
        },
        nodePulse: {
          '0%, 100%': { r: '6', opacity: '0.8' },
          '50%': { r: '9', opacity: '0.3' },
        },
        borderGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatDown: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
