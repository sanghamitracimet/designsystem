import type { Config } from "tailwindcss";

const number = 14;
const colorClasses = [
  
];
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary-sidebar' : '#1e1e2d',
      'blue': '#1a89ff',
      'red': '#dc3545',
      'teal': '#17a2b8',
      'orange': '#ff7849',
      'green': '#28a745',
      'yellow': '#ffc107',
      'black': '#212529',
      'darkGray': '#8D8D8D',
      'white': '#fff',
      'gray': '#A5A5A5',
      'lightGray': '#E0E0E0',
      'warning': {
        'default': '#FDA212',
        'light': '#fda21240',
      },
      'info': {
        'default': '#1ab6ff',
        'light': '#e6f7ff',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Poppins', 'serif'],
    },
    extend: {
      fontSize: {
        cta: `${number + 6}px`,   // 20px
        p1: `${number + 4}px`,    // 18px
        p2: `${number + 2}px`,    // 16px
        p3: `${number}px`,        // 14px
        p4: `${number - 2}px`,    // 12px
        p5: `${number - 4}px`,    // 10px
        h1: `${Math.round(number * 3.2142)}px`, // 45px
        h2: `${number * 2}px`,    // 28px
        h3: `${Math.round(number * 1.7145)}px`, // 24px
      },
      screens: {
        desktop: '80rem',  // 1280px = 80rem (assuming 16px base font size)
        laptop: '68.25rem', // 1092px = 68.25rem
        tablet: '48rem',    // 768px = 48rem
        phone: '30rem',     // 480px = 30rem
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    }
  },
  plugins: [],
} satisfies Config;