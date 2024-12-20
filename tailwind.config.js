// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#121216",
        secondary: "#26bbff",
        "cl-third": "#202024",
        "cl-four": "#414145",
      },
      boxShadow: {
        first: "0 -4px 10px rgba(0, 0, 0, 0.2)",
      },
    },
    container: {},
  },
  plugins: [],
};
