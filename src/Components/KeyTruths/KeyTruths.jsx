import Card from '../Card/Card.jsx';
import uuid from 'react-uuid';

const content = [
    {color: 'blue', txt: 'Provide assistance in making informed decisions on education, training and careers.'},
    {color: 'green', txt: 'Develop an integrated system of education and training that is responsive to the evolving needs of our community.'},
    {color: 'yellow', txt: 'Encourage employer recognition and professional development based on skills and knowledge.'},
    {color: 'rust', txt: 'Foster an environment that supports and rewards lifelong learning.'}     
    ]

export default function KeyTruths() {
  return (
    <div className="flex flex-col items-center w-full tracking-normal "> 
      <h1 className="text-4xl font-bold p-2 text-zinc-900 tracking-wide">Key Truths</h1>
    {
      content.map(
        (truth) => 
          <Card key={uuid()} color={truth.color} txt={truth.txt} />
        )
    }
    </div>
  )
}
