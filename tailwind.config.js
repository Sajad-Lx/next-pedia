const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))", //Repeated
        foreground: "hsl(var(--foreground))",
        primary: {
          //Repeated
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          //Repeated
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Material3
        mprimary: {
          DEFAULT: "var(--md-primary)",
          container: "var(--md-primary-container)",
        },
        msecondary: {
          DEFAULT: "var(--md-secondary)",
          container: "var(--md-secondary-container)",
        },
        tertiary: {
          DEFAULT: "var(--md-tertiary)",
          container: "var(--md-tertiary-container)",
        },
        error: {
          DEFAULT: "var(--md-error)",
          container: "var(--md-error-container)",
        },
        mbackground: "var(--md-background)",
        surface: {
          DEFAULT: "var(--md-surface)",
          variant: "var(--md-surface-variant)",
          tint: "var(--md-surface-tint)",
        },

        on: {
          primary: {
            DEFAULT: "var(--md-on-primary)",
            container: "var(--md-on-primary-container)",
          },
          secondary: {
            DEFAULT: "var(--md-on-secondary)",
            container: "var(--md-on-secondary-container)",
          },
          tertiary: {
            DEFAULT: "var(--md-on-tertiary)",
            container: "var(--md-on-tertiary-container)",
          },
          error: {
            DEFAULT: "var(--md-on-error)",
            container: "var(--md-on-error-container)",
          },
          background: "var(--md-on-background)",
          surface: {
            DEFAULT: "var(--md-on-surface)",
            variant: "var(--md-on-surface-variant)",
          },
        },

        outline: {
          DEFAULT: "var(--md-outline)",
          variant: "var(--md-outline-variant)",
        },
        inverse: {
          primary: "var(--md-inverse-primary)",
          surface: "var(--md-inverse-surface)",
          on: {
            surface: "var(--md-inverse-on-surface)",
          },
        },
        shadow: "var(--md-shadow)",
        scrim: "var(--md-scrim)",
        // Material3 Ends
      },

      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
