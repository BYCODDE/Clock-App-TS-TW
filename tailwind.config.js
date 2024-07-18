/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-image": "url('/mobile/bg-image-nighttime.jpg')",
        "mobile-image2": "url('/mobile/bg-image-daytime.jpg')",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        "custom-black": "rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
};
