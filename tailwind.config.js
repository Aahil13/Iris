/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        SoftRed: "hsl(7, 99%, 70%)",
        Yellow: "hsl(51, 100%, 49%)",
        DarkCyan: "hsl(167, 40%, 24%)",
        DarkBlue: "hsl(198, 62%, 26%)",
        moderateCyan: "hsl(168, 34%, 41%)",
        violet: "hsl(212, 27%, 19%)",
        VeryDarkblue: "hsl(213, 9%, 39%)",
        grayishBlue: "hsl(232, 10%, 55%)",
        GrayishBlue: "hsl(210, 4%, 67%)",
        White: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/desktop/image-header.jpg')",
      },
    },
  },
  plugins: [],
};
