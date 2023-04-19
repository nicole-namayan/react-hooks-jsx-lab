import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="#About">
  <h2>About Me</h2>
  <p>I Made This</p>
  <img src={image}  alt="I Made This" />
  </div>;
}

export default About;
