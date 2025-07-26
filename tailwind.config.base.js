/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Light theme colors (default)
        border: 'hsl(214.3, 31.8%, 91.4%)',
        input: 'hsl(214.3, 31.8%, 91.4%)',
        ring: 'hsl(222.2, 84%, 4.9%)',
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(222.2, 84%, 4.9%)',
        primary: {
          DEFAULT: 'hsl(222.2, 47.4%, 11.2%)',
          foreground: 'hsl(210, 40%, 98%)',
        },
        secondary: {
          DEFAULT: 'hsl(210, 40%, 96%)',
          foreground: 'hsl(222.2, 84%, 4.9%)',
        },
        destructive: {
          DEFAULT: 'hsl(0, 84.2%, 60.2%)',
          foreground: 'hsl(210, 40%, 98%)',
        },
        muted: {
          DEFAULT: 'hsl(210, 40%, 96%)',
          foreground: 'hsl(215.4, 16.3%, 46.9%)',
        },
        accent: {
          DEFAULT: 'hsl(210, 40%, 96%)',
          foreground: 'hsl(222.2, 84%, 4.9%)',
        },
        popover: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(222.2, 84%, 4.9%)',
        },
        card: {
          DEFAULT: 'hsl(0, 0%, 100%)',
          foreground: 'hsl(222.2, 84%, 4.9%)',
        },

        // Dark theme colors (when .dark class is applied)
        dark: {
          border: 'hsl(217.2, 32.6%, 17.5%)',
          input: 'hsl(217.2, 32.6%, 17.5%)',
          ring: 'hsl(212.7, 26.8%, 83.9%)',
          background: 'hsl(222.2, 84%, 4.9%)',
          foreground: 'hsl(210, 40%, 98%)',
          primary: {
            DEFAULT: 'hsl(210, 40%, 98%)',
            foreground: 'hsl(222.2, 47.4%, 11.2%)',
          },
          secondary: {
            DEFAULT: 'hsl(217.2, 32.6%, 17.5%)',
            foreground: 'hsl(210, 40%, 98%)',
          },
          destructive: {
            DEFAULT: 'hsl(0, 62.8%, 30.6%)',
            foreground: 'hsl(210, 40%, 98%)',
          },
          muted: {
            DEFAULT: 'hsl(217.2, 32.6%, 17.5%)',
            foreground: 'hsl(215, 20.2%, 65.1%)',
          },
          accent: {
            DEFAULT: 'hsl(217.2, 32.6%, 17.5%)',
            foreground: 'hsl(210, 40%, 98%)',
          },
          popover: {
            DEFAULT: 'hsl(222.2, 84%, 4.9%)',
            foreground: 'hsl(210, 40%, 98%)',
          },
          card: {
            DEFAULT: 'hsl(222.2, 84%, 4.9%)',
            foreground: 'hsl(210, 40%, 98%)',
          },
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
