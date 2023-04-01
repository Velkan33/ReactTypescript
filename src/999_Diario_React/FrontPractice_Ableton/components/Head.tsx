import React from "react";
import Hero from "./head/Hero";
import MainBar from "./head/MainBar";
import SecondBar from "./head/SecondBar";

export default function Head() {
 return (
  <>
   <MainBar />
   <hr />
   <SecondBar />
   <Hero />
  </>
 );
}
