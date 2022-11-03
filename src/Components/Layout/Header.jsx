import React from 'react'
import 'flowbite';
import {Navbar} from "flowbite-react";

//documentation for flowbite does not explicitly explain how to get this working, have to call in the { Navbar } from flowbite-react instead of just importing flowbite generally. 

export default function Header() {
  return (
    <nav className="p-3 bg-gray-50 rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <Navbar
    fluid={true}
    rounded={true}
  >
    <Navbar.Brand href="https://www.elocker.org/">
      <img
        src="https://place-puppy.com/300x300"
        className="mr-3 h-6 sm:h-9"
        alt="placepuppy Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Oklahoma Futures
      </span>
    </Navbar.Brand>
    <Navbar.Toggle>
    <span className="sr-only">Toggle Main Menu Bar</span>
    </Navbar.Toggle>
    <Navbar.Collapse>
      <Navbar.Link
        href="/"
      >
        Home
      </Navbar.Link>
      <Navbar.Link  href="/about">
        About 
      </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  </nav>
  )
}

