/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces — bg-surface-main, bg-surface-card, bg-surface-visual
        surface: {
          main:   'var(--bg-main)',
          card:   'var(--bg-card)',
          visual: 'var(--bg-visual)',
        },
        // Body text — text-content, text-content-muted
        content: {
          DEFAULT: 'var(--text-primary)',
          muted:   'var(--text-secondary)',
        },
        // Brand — bg-primary/20, text-primary, border-primary etc.
        primary:     'rgb(var(--primary-rgb) / <alpha-value>)',
        secondary:   'rgb(var(--secondary-rgb) / <alpha-value>)',
        accent:      'rgb(var(--accent-rgb) / <alpha-value>)',
        interactive: 'rgb(var(--interactive-rgb) / <alpha-value>)',
        highlight:   'var(--highlight)',
        // Diagram palette — text-visual-1, bg-visual-2/20 etc.
        'visual-1':  'rgb(var(--visual-1-rgb) / <alpha-value>)',
        'visual-2':  'rgb(var(--visual-2-rgb) / <alpha-value>)',
        'visual-3':  'rgb(var(--visual-3-rgb) / <alpha-value>)',
        'visual-4':  'rgb(var(--visual-4-rgb) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body:    ['Open Sans', 'sans-serif'],
        code:    ['Space Mono', 'monospace'],
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        popIn: {
          '0%':   { transform: 'scale(0.82)', opacity: '0' },
          '100%': { transform: 'scale(1)',    opacity: '1' },
        },
        slideInL: {
          '0%':   { transform: 'translateX(-18px)', opacity: '0' },
          '100%': { transform: 'translateX(0)',     opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '0.3' },
          '50%':      { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in':   'fadeIn 0.4s ease-out forwards',
        'pop-in':    'popIn 0.3s ease-out forwards',
        'slide-in-l':'slideInL 0.35s ease-out forwards',
        'glow':      'glow 2s ease-in-out infinite',
        'shimmer':   'shimmer 1.8s ease-in-out infinite',
      },
      lineHeight: {
        // Standard line-height for all note body text — use `leading-note` everywhere
        note: '1.9',
      },
      maxWidth: {
        reading: '68ch',
      },
    },
  },
  plugins: [],
}
