/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
     screens: {
      sm: { min: "0px", max: "640px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "641px", max: "768px" },
      // md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "769px", max: "1440px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
      xl: { min: "1441px" },
     },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "blue",
  },
};

