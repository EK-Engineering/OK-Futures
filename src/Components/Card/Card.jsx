// because tailwind doesn't support dynamic segments within classnames
// we're storing the full classnames for each color in a variable which we'll call on, dependent on the prop passed to the card

const greenStyle = "flex flex-row p-6 max-w-sm bg-green-l rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
const blueStyle = "flex flex-row p-6 max-w-sm bg-blue-d rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
const yellowStyle = "flex flex-row p-6 max-w-sm bg-yellow-d rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
const rustStyle = "flex flex-row p-6 max-w-sm bg-rust-d rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"

export default function Card({ color, txt }) {

    function getBgColor() {
        if (color === 'blue') return blueStyle;
        if (color === 'green') return greenStyle;
        if (color === 'rust') return rustStyle;
        if (color === 'yellow') return yellowStyle;
    }

  return (
    <div className={getBgColor()} >
        <p className="font-normal text-white lg:text-gray-700 dark:text-gray-400">
            {txt}
        </p>
    </div>
        )
    }

