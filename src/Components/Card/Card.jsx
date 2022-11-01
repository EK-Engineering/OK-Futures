export default function Card({ num, txt }) {

  return (
    <a href="#" 
        class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {num}</h5>
        <p
            class="font-normal text-gray-700 dark:text-gray-400">
                {txt}</p>
    </a>
        )
    }

