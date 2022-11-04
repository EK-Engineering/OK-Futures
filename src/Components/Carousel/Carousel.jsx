import React from 'react'
import { Carousel, Card } from 'flowbite-react'

export default function Carousels() {
  return (
    <div className="flex min-h-100 h-150 sm:h-96">
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

//     <div className="grid min-h-100 h-150 grid-cols-3 gap-4 sm:h-96">
//     <Carousel indicators={false} className="h-100">
//     <div className="max-w-l">
//   <Card imgSrc="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
//     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//       Medical Technology
//     </h5>
//     {/* button or whole card a link? */}
//     <button>Click Me!</button>
//   </Card>
// </div>
// <div className="max-w-2">
//   <Card imgSrc="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?cs=srgb&dl=pexels-pixabay-46148.jpg&fm=jpg&_gl=1*1j0y0l4*_ga*MTA2OTg5NjMwMy4xNjY3NTAxNDY0*_ga_8JE65Q40S6*MTY2NzUwMTQ2NS4xLjEuMTY2NzUwMTUxMy4wLjAuMA..">
//     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//       Airplane Technology
//     </h5>
//   </Card>
// </div>
// <div className="max-w-l">
//   <Card imgSrc="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
//     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//       Noteworthy Technology
//     </h5>
//   </Card>
// </div>
//     </Carousel>
    // eslint-disable-next-line no-lone-blocks
    {/* <Carousel indicators={false} className="h-100">
    <div className="max-w-l">
  <Card imgSrc="https://images.pexels.com/photos/8386366/pexels-photo-8386366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      One Small step for man, One Giant leap for Ai
    </h5>
  </Card>
</div>
<div className="max-w-l">
  <Card imgSrc="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Hive Mind or Collaboration?
    </h5>
  </Card>
</div>
<div className="max-w-l">
  <Card imgSrc="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg?auto=compress&cs=tinysrgb&w=400">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Legal Tech Breakthroughs: Even a Robot Can Do it
    </h5>
  </Card>
</div>
     
    </Carousel>
    <Carousel indicators={false} className="h-100">
    <div className="max-w-l">
  <Card imgSrc="https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     Gen Z Spearheads Gaming over Golf for Business Deals.
    </h5>
  </Card>
</div>
<div className="max-w-l">
  <Card imgSrc="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Are Dogs really Man's BFF?
    </h5>
  </Card>
</div>
<div className="max-w-l">
  <Card imgSrc="https://images.pexels.com/photos/220326/pexels-photo-220326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
     E-books or real books?
    </h5>
  </Card>
</div>
    </Carousel> */}
//   </div>
  

