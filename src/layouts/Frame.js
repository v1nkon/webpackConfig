import React from "react";
// import Nav from '@/layouts/Nav';
import Nav from './Nav'

const Frame = (props) => {
  return(
    <div className="frame">
      <section> <Nav /> </section>
      <section className="container"> {props.children} </section>
    </div>
  )
}

export default Frame;