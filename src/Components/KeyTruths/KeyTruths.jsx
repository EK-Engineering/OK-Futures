import Card from '../Card/Card.jsx';

const content = [
    {num: 1, txt: 'truth 1'},
    {num: 2, txt: 'truth 2'},
    {num: 3, txt: 'truth 3'},
    {num: 4, txt: 'truth 4'}     
    ]

export default function KeyTruths() {
  return (
    <> 
    {
      content.map(
        (truth) => 
          <Card num={truth.num} txt={truth.txt} />
        )
    }
    </>
  )
}
