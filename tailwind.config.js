/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        bg: 'var(--color-bg)',
        'bg-hover': 'var(--color-bg-hover)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        tertiary: 'var(--color-text-tertiary)',
        muted: 'var(--color-text-muted)',
        accent: 'var(--color-accent)',
        border: 'var(--color-border)',
      },
    },
  },
  plugins: [],
}