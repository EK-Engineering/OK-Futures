export default function Footer() {
  return (
    <footer class="p-4 bg-transparent w-full p-3 border-none dark:bg-gray-800">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 
        <a href="/" class="hover:underline">
          {' '}Oklahoma Futures
          </a>
          . All Rights Reserved.
      </span>
      {/* placeholder for future page links */}
      {/* <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Contact</a>
        </li>
      </ul> */}
    </footer>
  )
}