module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "primary-color": " #00aa45",
        "dark-primary-color": "#00aa45",
        "primary-font-color": "#27ae60",
        "complimentary-font-color": "#24292E",
        "primary-bg-color": "#fefffe",
        "secondary-bg-color": "#202120",
        "tertiory-bg-color": "#E3F5EB",
        "bg-off-white": "#F7F9FA",
        "bg-black": "#0C0C0D",
        "hover-color": "#E0E4E9",
      },
      padding: {
        "px-20": "40%",
      },
      screens: {
        xs: "480px",
      },
      gridTemplateColumns: {
        "feed-3": "repeat(3,minMax(200px,1fr))",
      },
      width: {
        128: "35rem",
      },
    },
  },
  plugins: [],
};
//9916197948
