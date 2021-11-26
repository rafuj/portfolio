import React from "react";
import About from "./About";
import Banner from "./Banner";
import Clients from "./Clients";
import Projects from "./Projects";
import Sponsor from "./Sponsor";
export default function Body() {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Projects></Projects>
      <Clients></Clients>
      <Sponsor></Sponsor>
    </>
  );
}
