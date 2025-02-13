import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,jsx,ts,tsx}', // Change this path according to your project structure
      './public/index.html',
   
    // Add other paths to include custom components if needed
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'pure-black': '#000000',
        'pure-white': '#FFFFFF',

        // Secondary Colors
        'deep-navy': '#1A365D',
        'slate-gray': '#708090',
        'soft-gold': '#D4AF37',

        // Accent Colors
        'teal-blue': '#008080',
        'light-gray': '#F5F5F5',
        // 'coral': '#FF6B6B',

        // Text colors
        'headline-text': '#000000',
        'body-text': '#708090',
        'link-text': '#008080',
        'cta-text': '#FFFFFF',

        // Background Colors
        'primary-bg': '#FFFFFF',
        'secondary-bg': '#F5F5F5',
        'accent-bg': '#1A365D', // Adjusted for 10% opacity as mentioned

        // UI Element Colors
        'button-bg': '#008080',
        'button-hover-bg': '#006666',
        'card-bg': '#FFFFFF',
        'card-border': '#D3D3D3',
        'icon-color': '#708090',
        'alert-bg': '#FF6B6B',

        primary: "#000000",  // Pure Black for primary text, headlines
        secondary: "#FFFFFF",  // Pure White for backgrounds
        slateGray: "#708090",  // Slate Gray for body text, subheadings
        deepNavy: "#1A365D",  // Deep Navy for section backgrounds, secondary CTAs
        softGold: "#D4AF37",  // Soft Gold for premium elements, highlights
        tealBlue: "#008080",  // Teal Blue for primary CTAs, links
        lightGray: "#F5F5F5",  // Light Gray for background variations, cards
        coral: "#FF6B6B",  // Coral for important notifications
      },

     
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        none: 'none', // Ensures buttons have no shadow (flat design)
      },
      spacing: {
        // You can extend the spacing scale here as needed
      },

      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'bounce-subtle': {
          '0%, 100%': {
            transform: 'translateY(-5px)'
          },
          '50%': {
            transform: 'translateY(0)'
          }
        },
        'slide-x': {
          '0%, 100%': {
            transform: 'translateX(0)'
          },
          '50%': {
            transform: 'translateX(5px)'
          }
        },
        'rotate-slow': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'bounce-subtle': 'bounce-subtle 2s infinite',
        'slide-x': 'slide-x 1.5s infinite',
        'rotate-slow': 'rotate-slow 15s linear infinite'
      }
    }
    ,
  },
  plugins: [],
}
