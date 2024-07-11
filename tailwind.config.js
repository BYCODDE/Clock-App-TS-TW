/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-image": "url('src/assets/mobile/nighttime.jpg')",
      },
    },
  },
  plugins: [],
};
