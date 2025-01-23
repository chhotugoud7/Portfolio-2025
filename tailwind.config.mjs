/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover:'#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
        'green' : '4px 4px 0 #00FF00',
        'red': '4px 4px 4px #FF0000',
        'green_circle' : '0 0 8px 4px #00FF00',
        'blue_circle': '0 0 8px 4px #007BFF',
        'purple_circle': '0 0 8px 4px #8A2BE2',
        'yellow_circle': '0 0 8px 4px #FFD700',
        'orange_circle': '0 0 8px 4px #FF5733',
        'black_circle': '0 0 8px 4px #000000',
        'red_circle': '0 0 8px 4px #FF0000', 
      },
      project_primary: {
        light: '#4f46e5', // Light shade for hover or active states
        DEFAULT: '#3730a3', // Default primary color
        dark: '#312e81', // Darker shade for focus or darker backgrounds
      },
      project_secondary: {
        light: '#22c55e', // Secondary light
        DEFAULT: '#16a34a', // Secondary main
        dark: '#15803d', // Secondary dark
      },
      project_accent: {
        light: '#f472b6', // Accent light
        DEFAULT: '#ec4899', // Accent main
        dark: '#db2777', // Accent dark
      },
      project_neutral: {
        light: '#f3f4f6', // Light neutral background
        DEFAULT: '#e5e7eb', // Neutral gray
        dark: '#6b7280', // Dark neutral text
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      },


      keyframes: {
        float: {
          '0%': { transform: 'translateY(100%)', opacity: '0.5' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff' },
          '50%': { boxShadow: '0 0 15px #00FF00, 0 0 25px #00FF00, 0 0 35px #00FF00' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        glow: 'glow 1.5s infinite',

      },


    },
  },
  darkMode: 'selector',
  plugins: [],
};
