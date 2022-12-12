import linkedin from '../../Assets/linkedin.png'

export default function Footer() {
  return (
    <footer class="p-4 bg-transparent w-full p-3 border-none dark:bg-gray-800 flex space-x-1">

      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022 
        <a href="/" class="hover:underline">
          {' '}Oklahoma Futures
          </a>
          . All Rights Reserved.
      </span>
      <span>
        <a href='https://www.linkedin.com/in/nick-hathaway-67011966/' target="_blank" rel="noreferrer">
          <img class='h-[20px] w-[20px]' src={linkedin} alt='icon created by Freepik - Flaticon'/>
          <span className='sr-only'>Linkedin Link to Nick Hathaway's LinkedIn</span>
        </a>
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
