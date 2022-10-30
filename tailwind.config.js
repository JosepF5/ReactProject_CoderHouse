export default {
  purge: ["./*.html", "./src/**/*.{vue,js,ts,jsx,tsx,css}"],
  theme: {
    screens: {
      xs: "576px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  content: ["./src/**/*.html", "./node_modules/flowbite/**/*.js"],
  plugins: [],
};
