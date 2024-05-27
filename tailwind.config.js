const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#189BA6",
        secondary: "#F8F8F8",
      },
    },
  },
  plugins: [],
});
