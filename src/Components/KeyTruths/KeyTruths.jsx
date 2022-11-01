import Card from '../Card/Card.jsx';

const content = [
    {num: 1, txt: 'Provide assistance in making informed decisions on education, training and careers.'},
    {num: 2, txt: 'Develop an integrated high-quality system of education and training that is responsive to the evolving needs of our community.'},
    {num: 3, txt: 'Encourage employer recognition and professional development based on skills and knowledge.'},
    {num: 4, txt: 'Foster an environment that supports and rewards lifelong learning.'}     
    ]

export default function KeyTruths() {
  return (
    <div className="flex flex-row"> 
    {
      content.map(
        (truth) => 
          <Card key={truth.num + 1} num={truth.num} txt={truth.txt} />
        )
    }
    </div>
  )
}
