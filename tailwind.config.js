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
      // provides a theme-screen variable for us to use
      // inline to develop responsively
      // => @media (min-width: 992px) { ... }
      screens: {
        'lg': '900px',
      },
      colors: {
        'blue-l': '#004e99',
        'blue-d': '#0066a8',
        'yellow-l': '#ab6728',
        'yellow-d': '#dd8e25',
        'rust-l':  '#dd8e25',
        'rust-d':  '#d15521',
        'green-d': '#30681f',
        'green-l': '#659c41',
        'txt-l': '#f0f5f5',
        'bg-1': '#F8F3F2',
        'bg-2': '#F9F5F4',
        'bg-white': '#F7F5F3',
      },
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif']
      },
      backgroundImage: {
        'prelaunch': "url('./Assets/bg-img.jpg')",
      }
  },
  //tailwind specific, stuff only gets added here if the docs say so
  plugins: [
    require('flowbite/plugin')
]
}
