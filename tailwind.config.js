/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins,ui-sans-serif, system-ui",
      },
      colors: {
        primary: {
          light: "#49A5FD",
          DEFAULT: "#3E94E5",
          dark: "hsl(212, 98%, 40%)",
        },
        light: "#1A1919",
      },
      backgroundImage: {
        "techie-pattern": "url('/images/techie.svg')",
      },
    },
  },
  plugins: [],
};
