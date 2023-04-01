import React from "react";
import HeroImg from "./HeroImg";
import HeroText from "./HeroText";

export default function Hero() {
 return (
  <div className={`flex justify-center relative items-center`}>
   <HeroImg />
   <HeroText />
  </div>
 );
}
