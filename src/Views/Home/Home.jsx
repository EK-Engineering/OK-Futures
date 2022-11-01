import 'flowbite';

export default function Home() {
  return (
    <>
    <h1 className='text-emerald-500 text-3xl text-center pb-3 font-mono'>
      Hello World!
    </h1>
    <div class="flex flex-wrap">
    <div class="flex items-center mr-4">
        <input id="red-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="red-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Red</label>
    </div>
    <div class="flex items-center mr-4">
        <input id="green-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="green-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Green</label>
    </div>
    <div class="flex items-center mr-4">
        <input checked id="purple-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="purple-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Purple</label>
    </div>
    <div class="flex items-center mr-4">
        <input id="teal-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="teal-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Teal</label>
    </div>
    <div class="flex items-center mr-4">
        <input id="yellow-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
        <label for="yellow-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yellow</label>
    </div>
    <div class="flex items-center mr-4">
        <input id="orange-radio" type="radio" value="" name="colored-radio" class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label for="orange-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Orange</label>
    </div>
</div>
    <script src="../path/to/flowbite/dist/flowbite.js"></script>
    </>
  )
}
