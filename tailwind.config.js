module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  plugins: [require("tw-elements/dist/plugin")],
  theme: {
    extend: {
      colors: {
        primary1: "#090c9b",
        primary2: "#1F7A8C",
        primary3: "#BFDBF7",
        primary4: "#E1E5F2",
        primary5: "#f2f4ff",
        primary6: "#EDEDE8",
      },
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
      '40%':'40%'
    }
  }, 
};
