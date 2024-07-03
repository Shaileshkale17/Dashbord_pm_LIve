/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-opactity": "pulse-opactity 2.5s infinite",
      },
      keyframes: {
        "pulse-opactity": {
          "0% 100%": { opacity: 1 },
          "25%": { opacity: 0.25 },
          "50%": { opacity: 0.75 },
        },
      },
    },
  },
  plugins: [],
};
