//please note that the height is being fickled, but I have high hopes that this will get resolved in the merge and we start aligning things on the page. 

import { Card } from "flowbite-react";

export default function Carousel() {
  return (
    <>
      <h1 className="text-4xl font-bold p-2 text-zinc-900 tracking-wide">
        Key Truths</h1>
      <div className="flex flex-row justify-between ">
        <div className="max-w-sm m-5">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SKILLS DEMAND FOR THE FUTURE ECONOMY
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Find out the priority skills and jobs in demand in three growth areas - the Digital, Green, and Care economies - and use it to guide your skills development in the next one to three years.
            </p>
          </Card>
        </div>
        <div className="max-w-sm m-5">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SKILLSFUTURE MID-CAREER SUPPORT PACKAGE
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              This program aims to create more career transition opportunities for individuals in their 40s to 50s, and help them remain employable and be able to access employment.
            </p>
          </Card>
        </div>
        <div className="max-w-sm m-5">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SKILLSFUTURE CAREER TRANSITION PROGRAMME
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              The SkillsFuture Career Transition Programme (SCTP) supports mid-career individuals in acquiring industry-relevant skills to improve employability and pivot to new sectors or job roles.
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}

