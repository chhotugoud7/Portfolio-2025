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
        'green_circle' : '0 0 8px 4px #00FF00',
        'blue_circle': '0 0 8px 4px #007BFF',
        'purple_circle': '0 0 8px 4px #8A2BE2',
        'yellow_circle': '0 0 8px 4px #FFD700',
        'orange_circle': '0 0 8px 4px #FF5733',
        'black_circle': '0 0 8px 4px #000000',
         
      }
    },
  },
  plugins: [],
};
