export default {
  purge: ["./*.html", "./src/**/*.{vue,js,ts,jsx,tsx,css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'xs':'320px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  content: [
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [],
};
