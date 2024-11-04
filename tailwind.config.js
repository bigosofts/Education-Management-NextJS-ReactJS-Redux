/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // ... other theme settings ...

    extend: {
      backgroundColor: {
        "green-500": "#496F82",
      },
      borderColor: {
        "green-500": "#496F82",
      },
      checked: {
        "green-500": "#496F82",
      },
      textColor: {
        accent: "#496F82",
      },
    },
  },
  plugins: [],
};
