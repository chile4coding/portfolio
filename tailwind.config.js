/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "640px" }, // Mobile-first approach
      md: { min: "641px", max: "1023px" },
      lg: { min: "1024px", max: "1439px" },
      xl: { min: "1440px" }, // No max value needed for xl
    },
    extend: {
      colors: {
        "nav-color": "rgb(2, 0, 36)",
      },
    },
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
    darkTheme: "white", // Change "blue" to "dark" (valid DaisyUI theme)
  },
};
