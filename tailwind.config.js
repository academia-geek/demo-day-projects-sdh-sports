/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FFFF5F",
          "secondary": "#f3f4f6",
          "accent": "#f5d0fe",
          "neutral": "#111827",
          "base-100": "#111827",
          "info": "#0000ff",
          "success": "#ECC818",
          "warning": "#ea580c",
          "error": "#9f1239",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
