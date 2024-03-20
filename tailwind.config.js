/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    // ... other theme settings ...

    extend: {
      backgroundColor: {
        'green-500': '#496F82', // Replace with your desired color
      },
      borderColor: {
        'green-500': '#496F82', // Replace with your desired color
      },
      checked: {
        'green-500': '#496F82', // Replace with your desired color
      },
    },
  },
  plugins: [],
}
