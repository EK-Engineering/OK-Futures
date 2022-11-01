module.exports = {
  //the pages you want tailwind to work with. Any File types that you want tailwind in
  //added flowbite into the content tag
  content: [
    "./src/**/*{.jsx,.js,}",
    "./node_modules/flowbite/**/*{.jsx,.js,}"
  ],
  //the variables for tailwind. you can change or extend(which creates new ones)
  theme: {
    extend: {
      "cadet-blue": "rgba(97, 150, 153, 0.705)",
      // provides a theme-screen variable for us to use
      // inline to develop responsively
      // => @media (min-width: 992px) { ... }
      screens: {
        'lg': '800px',
      }
    },
  },
  //tailwind specific, stuff only gets added here if the docs say so
  plugins: [
    require('flowbite/plugin')
]
}
