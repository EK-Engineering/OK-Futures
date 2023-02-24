//please note that the height is being fickled, but I have high hopes that this will get resolved in the merge and we start aligning things on the page. 

import { Card } from "flowbite-react";

export default function Carousel() {
  return (
    <>
      <h1 className="text-4xl font-bold p-2 text-zinc-900 tracking-wide m-5">
        Get Started </h1>
      <div className="flex flex-row justify-between ">
        <div className="max-w-sm m-5">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
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
            imgSrc="https://images.unsplash.com/photo-1622295023876-0cdf583c41f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              MID-CAREER SUPPORT PACKAGE
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              This program aims to create more career transition opportunities for individuals in their 40s to 50s, and help them remain employable and be able to access employment.
            </p>
          </Card>
        </div>
        <div className="max-w-sm m-5">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              CAREER TRANSITION PROGRAM
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              The Career Transition Program (CTP) supports mid-career individuals in acquiring industry-relevant skills to improve employability and pivot to new sectors or job roles.
            </p>
          </Card>
        </div>
      </div>
    </>
  )
}

