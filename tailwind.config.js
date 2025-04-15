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
        fadeSlideInFromLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-1rem)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        loading: "loading 1.2s ease-in-out infinite",
        fadeSlideInFromLeft: "fadeSlideInFromLeft 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
