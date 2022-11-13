// because tailwind doesn't support dynamic segments within classnames
// we're storing the full classnames for each color in a variable which we'll call on, dependent on the prop passed to the card

const greenStyle = "m-2 max-w-lg bg-green-l rounded-lg border border-gray-200 shadow-md"
const blueStyle = "m-2 max-w-lg bg-blue-d rounded-lg border border-gray-200 shadow-md"
const yellowStyle = "m-2 max-w-lg bg-yellow-d rounded-lg border border-gray-200 shadow-md"
const rustStyle = "m-2 max-w-lg bg-rust-d rounded-lg border border-gray-200 shadow-md"

export default function Card({ color, txt }) {

    function getBgColor() {
        if (color === 'blue') return blueStyle;
        if (color === 'green') return greenStyle;
        if (color === 'rust') return rustStyle;
        if (color === 'yellow') return yellowStyle;
    }

    return (
        <div className={getBgColor()} >
            <p className="leading-6 p-6 font-normal text-lg antialiased font-medium whitespace-pre-line text-justify text-txt-l">
                {txt}
            </p>
        </div>
    )
}

