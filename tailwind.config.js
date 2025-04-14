module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%": { color: "#e9e9e9" },
          "50%": { color: "#b89b84" },
          "100%": { color: "#e9e9e9" },
        },
      },
      animation: {
        loading: "loading 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
