import React from 'react'
import {Footer} from 'flowbite-react';

export default function Foot() {
  return (
    <Footer container={true}>
  <Footer.Copyright
    href="/"
    by="Oklahoma Futures™"
    year={2022}
  />
  <Footer.LinkGroup>
    {/* <Footer.Link href="#">
      About
    </Footer.Link> */}
  </Footer.LinkGroup>
</Footer>
  )
}
