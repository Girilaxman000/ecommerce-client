/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "m.media-amazon.com",
      "media.wired.com",
    ], // Add the domain(s) you want to allow
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
