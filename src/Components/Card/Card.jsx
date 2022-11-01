export default function Card({ num, txt }) {

  return (
    <div  
        className="flex flex-col justify-center p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h5 
            className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {num}</h5>
        <p
            className="font-normal text-center text-gray-700 dark:text-gray-400">
                {txt}</p>
    </div>
        )
    }

