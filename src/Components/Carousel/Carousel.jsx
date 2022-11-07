import React from 'react'
import { Carousel, Card } from 'flowbite-react'

//please note that the height is being fickled, but I have high hopes that this will get resolved in the merge and we start aligning things on the page. 

export default function Carousels() {
  return (
    <div className="flex min-h-100 h-150 sm:h-96 m-5 p-5">
    <Carousel indicators={false} className="h-100">
    <div className="max-w-sm">
  <Card imgSrc="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Medical Technology
    </h5>
    {/* button or whole card a link? */}
    <button>More Details!</button>
  </Card>
</div>
<div className="max-w-sm">
  <Card imgSrc="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?cs=srgb&dl=pexels-pixabay-46148.jpg&fm=jpg&_gl=1*1j0y0l4*_ga*MTA2OTg5NjMwMy4xNjY3NTAxNDY0*_ga_8JE65Q40S6*MTY2NzUwMTQ2NS4xLjEuMTY2NzUwMTUxMy4wLjAuMA..">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Airplane Technology
    </h5>
    <button>More Details!</button>
  </Card>
</div>
<div className="max-w-sm">
  <Card imgSrc="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy Technology
    </h5>
    <button>More Details!</button>
 </Card>
 </div>
  </Carousel>
 </div>
  )
}

