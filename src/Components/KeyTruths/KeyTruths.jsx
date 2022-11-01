import Card from '../Card/Card.jsx';

const content = [
    {num: 1, txt: 'Help individuals make well-informed choices in education, training and careers'},
    {num: 2, txt: 'Develop an integrated high-quality system of education and training that responds to constantly evolving needs'},
    {num: 3, txt: 'Promote employer recognition and career development based on skills and mastery'},
    {num: 4, txt: 'Foster a culture that supports and celebrates lifelong learning'}     
    ]

export default function KeyTruths() {
  return (
    <div class="flex"> 
    {
      content.map(
        (truth) => 
          <Card num={truth.num} txt={truth.txt} />
        )
    }
    </div>
  )
}
