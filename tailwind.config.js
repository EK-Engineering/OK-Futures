module.exports = {
  //the pages you want tailwind to work with. Any File types that you want tailwind in
  //added flowbite into the content tag
  content: [
    "./src/**/*{.jsx,.js,}",
    "./node_modules/flowbite/**/*{.jsx,.js,}",
    'node_modules/flowbite-react/**/*.{.js,.jsx,.ts,.tsx}'
  ],
  //the variables for tailwind. you can change or extend(which creates new ones)
  theme: {
    extend: {
      "cadet-blue": "rgba(97, 150, 153, 0.705)"
    
    },
  },
  //tailwind specific, stuff only gets added here if the docs say so
  plugins: [
    require('flowbite/plugin')
]
}
