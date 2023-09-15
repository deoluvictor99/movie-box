/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DMsans: "DM Sans",
      },
      // backgroundImage: {
      //   "my-image": `url(https://image.tmdb.org/t/p/original/${movieList.backdrop_path})`,
      // },
    },
  },
  plugins: [],
};
