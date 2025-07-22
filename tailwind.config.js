/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./listindex.html"],
  theme: {
    extend: {
          fontFamily:{
                Poppins:[ "Poppins","sans-serif"],
               
            },
    },
  },
plugins: [
  require('tailwind-scrollbar-hide')
]

}

